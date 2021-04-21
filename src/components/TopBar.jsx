import React, { useLayoutEffect, useState } from 'react'
import '../styles/topbar.scss'
import logo from '../imgs/logo.png';
import icon from '../imgs/icon.png';
import hamburger from '../imgs/hamburger.png';
import Spacer from 'react-spacer';
import Line from './Line';
import { Link } from 'react-scroll';

export default function TopBar(props) {
    const [screen, setScreen] = useState(window.innerWidth > 720 ? 'large': 'small')
    const [lineColor, setLineColor] = useState('#5BA1D6') // #F25F5C // #FFD166

    const checkScreen = () => {
        setScreen(window.innerWidth > 1220 ? 'large': 'small')
    }

    const openMenu = () => {
        console.log("menu opened")
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
                {screen == "large" ?
                    <img src={logo} alt="BB Logo" className="mainLogo"/>
                : 
                    <img src={icon} atl="BB Icon" className="icon"/>
                }
                <Spacer grow='0.75'/>
                {screen == 'small' ?
                    <div className="particles">
                        <div className="whiteBox">
                            <img src={hamburger} atl="Navigation" className="hamburgerMenu" onClick={() => openMenu()}/>
                        </div>
                    </div>   
                : 
                    <div className="textNav">
                        <Link to="scan">
                            <p className="navText">Scan</p>
                        </Link>
                        <Line color={lineColor} height="2.5rem"/>
                        <Link to="vault">
                            <p className="navText">Vault</p>
                        </Link>
                        <Line color={lineColor} height="2.5rem"/>
                        <Link to="designer">
                            <p className="navText">Designer</p>
                        </Link>
                        <Line color={lineColor} height="2.5rem"/>
                        <Link to="martetplace">
                            <p className="navText">MarketPlace</p>
                        </Link>
                        <Line color={lineColor} height="2.5rem"/>
                        <Link to="how to">
                            <p className="navText">How To</p>
                        </Link>
                    </div>
                } 
                <div className="particles2">
                    <div className="signUpBox">
                        <p className="signUpTxt">Sign Up Now</p>    
                    </div>    
                </div>            
            </div>
    )
}

