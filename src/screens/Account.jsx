import React, { useState } from 'react'
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
import '../styles/account.scss'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function Account(props) {
    const history = useHistory()
    const [step, setStep] = useState(0) // 0 = log 1 = reset 2 = recover
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [successModal, setModal] = useState(false) 

    const toggleModal = () => {
        setModal(!successModal)
    }

    const goBack = () => {
        history.goBack();
    }

    const doAction = () => {
        switch (step) {
            case 0:
                toggleModal();                
                break;
            case 1:                
                toggleModal();
                break;
            case 2:
                toggleModal();
                break;
            default:
                break;
        }
    }

    const stepBack = () => {
        if(step == 0){
            goBack()
        } else {
            setStep(step - 1)
        }
    }

    return (
        <div className="large">
            {successModal ?
                <div className="yellowContainerSmall">
                    <div className="spaceBtw">
                        <ArrowBackIosIcon onClick={toggleModal} className="backBtn"/>
                        <CancelIcon onClick={goBack} className="cancelIcon"/>
                    </div>
                    <p className="bigTitle">THANK YOU</p>
                    <p className="capsTxt">
                        YOU HAVE BECOME AN ALPHA TESTER<br></br>
                        FOR THE NEW BRICKBANKER APP
                    </p>
                    <p className="regTxt">
                        If selected, we will forward<br></br>
                        the appropriate links to download the App.<br></br>
                        We look forward to your valuable feedback.
                    </p>
                    <div className="btnContainer" style={{justifyContent: 'space-around'}}>
                        <div className="darkBtn" style={{
                            backgroundColor: 'transparent',
                            border: '2px solid #394967'    
                        }}>
                            <Link to="/howto"><p className="darkBtnTxt" style={{
                                color: '#394967'
                            }}>
                                How To
                            </p></Link>
                        </div>
                        <div className="darkBtn">
                            <p className="darkBtnTxt" onClick={() => {
                                window.open('mailto:info@brickbanker.com')
                            }}>
                                Contact Us
                            </p>
                        </div>
                    </div>
                </div>
            :
                <div className="yellowContainerSmall">
                    <div className="spaceBtw">
                        <ArrowBackIosIcon onClick={stepBack} className="backBtn"/>
                        <CancelIcon onClick={goBack} className="cancelIcon"/>
                    </div>
                    <p className="title">
                        {step == 0 ? 'Login' : step == 1 ? 'Reset' : 'Recover'}
                    </p>
                    <div className="inputDiv">
                        <p className="inputLabel">
                            {step == 0 ? 'Email' : step == 1 ? 'New Password' : 'Email'}
                        </p>
                        {step == 0 ?
                            <div className="iconInput">
                                <MailIcon className="inputIcon"/>
                                <input type="text" placeholder="Email Address"  className="emailInputAcc" value={email} onChange={(e) => setEmail(e.target.value)}/> 
                            </div>
                        :
                            <div className="iconInput">
                                <LockIcon className="inputIcon"/>
                                <input type="text" placeholder="Password"  className="passInput" value={password} onChange={(e) => setPassword(e.target.value)}/> 
                            </div>
                        }  
                        </div>      
                    {step != 2 ?
                        <div className="inputDiv">
                            <p className="inputLabel">
                                {step == 0 ? 'Password': 'Confirm New Password'}
                            </p>
                            <div className="iconInput">
                                <LockIcon className="inputIcon"/>
                                <input type="text" placeholder="Password" className="passInput" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}/> 
                            </div>
                        </div>
                    : 
                        <div></div>
                    }
                    {step == 0  || step == 1 ?
                        <p className="goToForgot" onClick={() => setStep(step == 0 ? 1 : 2)}>
                            {step == 0 ? 'Forgot Password?' : 'Recover Account'}
                        </p>
                    : <div></div>}
                    <div className="btnContainer">
                        <div className="darkBtn">
                            <p className="darkBtnTxt" onClick={doAction}>
                                {step == 0 ? 'Sign In' : step == 1 ? 'Reset Password' : 'Send Reset Email'}
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}