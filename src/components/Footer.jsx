import React, { useState } from 'react'
import logo from '../imgs/logo.png'
import SendIcon from '@material-ui/icons/Send'
import '../styles/footer.scss'
import ig from '../imgs/ig.png'
import world from '../imgs/world.png'
import twitter from '../imgs/twitter.png'


export default function Footer(props) {
    const [email, setEmail] = useState("")

    const regEmail = () => {
        console.log('Email Registered')
        alert("Successfully Added Your Email To Our Mailing List!")
    }

    const navigate = (path) => {
        console.log('navigation to '+path)
    }

    const openLink = (link) => {
        window.open(link)
    }

    return (
        <footer className="footer">
            <img src={logo} alt="BrickBanker Logo" className="footerLogo"/>
            <div className="middleDiv">
                <div className="emailInputDiv">
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="emailInput" placeholder="Email"/>
                    <SendIcon onClick={() => regEmail()} className="sendIcon"/>
                </div>
                <p className="disclaimer">
                    The LEGO® logo are trademarks of The LEGO® Group of companies which is not associated with Brickbanker<br></br>
                    This product is under the rules and regulations in "Patent Pending" format
                </p>
            </div>
            <div className="navButtonsGrid">
                <p className="navBtn" onClick={() => navigate("home")}>Home</p>
                <p className="navBtn" onClick={() => navigate("guidlines")}>Guidlines</p>
                <p className="navBtn" onClick={() => navigate("about")}>About</p>
                <p className="navBtn" onClick={() => navigate("contact")}>Contact</p>
                <p className="navBtn" onClick={() => navigate("policy")}>Privacy Policy</p>
                <p className="navBtn" onClick={() => navigate("help")}>Help</p>
            </div>  
            <div className="iconDisp">
                <img src={twitter} alt="Twitter" onClick={() => openLink("www.twitter.com")} className="iconImg"/> 
                <img src={ig} alt="Instagram" onClick={() => openLink("www.instagram.com")} className="iconImg"/> 
                <img src={world} alt="Web" onClick={() => openLink("www.google.com")} className="iconImg"/> 
            </div>   
        </footer>
    )
}