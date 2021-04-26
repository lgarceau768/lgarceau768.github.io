import React from 'react'
import CancelIcon from '@material-ui/icons/Cancel';
import '../styles/about.scss'
import icon from '../imgs/icon.png'
import Spacer from 'react-spacer';
import { useHistory } from 'react-router';

export default function About(props) {
    
    const history = useHistory()
    const goBack = () => {
        history.goBack();
    }

    const contact = () => {
        window.open("mailto:info@brickbanker.com")
    }

    return (
        <div style={{height: '100vh'}}>
            <div className="yellowContainer">
                <div className="end">
                    <CancelIcon onClick={() => goBack()} className="cancelIcon"/>
                </div>
                <div className="columns">
                    <div className="left">
                        <p className="title">ABOUT US</p>
                        <p className="aboutUsTxt">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore

    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem wefhh ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio efadde dignissim.
                        </p>
                        <div className="contact" onClick={() => contact()}>
                            <p className="btntxt">Contact Us</p>
                        </div>
                    </div>
                    <img src={icon} alt="BrickBanker" className="logo"/>
                </div>
            </div>
        </div>
    )
}