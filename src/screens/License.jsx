import React, { useState } from 'react'
import { useHistory } from 'react-router'
import CancelIcon from '@material-ui/icons/Cancel';
import '../styles/license_screen.scss'
import '../styles/account.scss'
import { CaliLicense, OtherLicense } from '../components/LicenseFrame'
import { Link } from 'react-router-dom';


export default function License(props) {
    const [cali, setCali] = useState(false)
    const [step, setStep] = useState(0) // 0 cali / 1 cali / 2 agree
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const accept = () => {
        alert('Thank You! Enjoy')        
        goBack()
    }


    return (
        <div style={{height: '100vh'}}>
            {step == 0 ?
                <div className="smallYellow">
                    <div className="end">
                        <CancelIcon onClick={goBack} className="cancelIcon"/>
                    </div>
                    <p className="question">Are you a California Resident?</p>
                    <div className="btnContainer" style={{justifyContent: 'space-around'}}>
                        <div className="darkBtn" style={{
                            backgroundColor: 'transparent',
                            border: '2px solid #394967'    
                        }}>
                        <p className="darkBtnTxt" style={{
                                color: '#394967'
                            }} onClick={() => {
                                setCali(false);
                                setStep(2)
                            }}>
                                No
                            </p>
                        </div>
                        <div className="darkBtn">
                            <p className="darkBtnTxt" onClick={() => {
                                setCali(true);
                                setStep(1)
                            }}>
                                Yes
                            </p>
                        </div>
                    </div>
                </div>
            : 
                <div className="smallYellow">
                    <div className="end">
                        <CancelIcon onClick={goBack} className="cancelIcon"/>
                    </div>
                    <p className="question">
                        {step == 1 ? 'License Agreement California' : 'License Agreement'}
                    </p>
                    {cali ? <CaliLicense/> : <OtherLicense/>}
                    <div className="btnContainer" style={{justifyContent: 'space-around'}}>
                        <div className="darkBtn" style={{
                            backgroundColor: 'transparent',
                            border: '2px solid #394967'    
                        }}>
                        <Link to="/dl/policy_ex.pdf" target="_blank" download><p className="darkBtnTxt" style={{
                                color: '#394967'
                            }} onClick={() => {
                                alert('Downloading Privacy Policy!')
                            }}>
                                Learn More
                            </p>
                            </Link>
                        </div>
                        <div className="darkBtn">
                            <p className="darkBtnTxt" onClick={accept}>
                                Accept User Agreement
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}