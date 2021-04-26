import React, { useLayoutEffect, useState } from 'react'
import '../styles/topbar.scss'
import logo from '../imgs/logo.png';
import icon from '../imgs/icon.png';
import hamburger from '../imgs/hamburger.png';
import Spacer from 'react-spacer';
import Line from './Line';
import { Link } from 'react-scroll';
import { Link as NavLink } from 'react-router-dom'

export default function TopBar(props) {
    const [screen, setScreen] = useState(window.innerWidth > 720 ? 'large': 'small')
    const [lineColor, setLineColor] = useState('#5BA1D6') // #F25F5C // #FFD166

    const checkScreen = () => {
        setScreen(window.innerWidth > 1220 ? 'large': 'small')
    }

    const openMenu = () => {
        console.log("menu opened")
    }

    const scrollTo = (path) => {
        switch (path) {
            case 'scan':
                scrollY(2500)
                break;
            case 'vault':
                scrollY(3000)
                break
            case 'marketplace':
                scrollY(3600)
                break
            case 'designer':
                scrollY(4200)
                break
            default:
                break;
        }
    }

    const scrollY = (y) => {
        window.scrollTo({
            left: 0,
            top: y,
            behavior: 'smooth'
        })
    }

    useLayoutEffect(() => {
        function updateSize(){
            console.log('resized')
            checkScreen();
        }
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    return (
        <div className="mainBar">
                <NavLink to="/">
                    {screen == "large" ?
                        <img src={logo} alt="BB Logo" className="mainLogo"/>
                    : 
                        <img src={icon} alt="BB Icon" className="mainLogoIcon"/>
                    }
                </NavLink>
                <Spacer grow='0.75'/>
                {screen == 'small' ?
                    <div className="particles">
                        <div className="whiteBox">
                            <img src={hamburger} atl="Navigation" className="hamburgerMenu" onClick={() => openMenu()}/>
                        </div>
                    </div>   
                : 
                    <div className="textNav">
                        <div onClick={() => scrollTo("scan")}>
                            <p className="navText">Scan</p>
                        </div>
                        <Line color="#FFD166" height="2.5rem"/>
                        <div onClick={() => scrollTo("vault")}>
                            <p className="navText">Vault</p>
                        </div>
                        <Line color="#F25F5C" height="2.5rem"/>
                        <div onClick={() => scrollTo("designer")}>
                            <p className="navText">Designer</p>
                        </div>
                        <Line color="#06D6A0" height="2.5rem"/>
                        <div onClick={() => scrollTo("marketplace")}>
                            <p className="navText">MarketPlace</p>
                        </div>
                        <Line color="#5BA1D6" height="2.5rem"/>
                        <NavLink to="/howto">
                            <p className="navText">How To</p>
                        </NavLink>
                    </div>
                } 
                <div className="particles2">
                    <NavLink to="sign_up">
                        <div className="signUpBox">
                            <p className="signUpTxt">Sign Up Now</p>    
                        </div>    
                    </NavLink>
                </div>            
            </div>
    )
}

