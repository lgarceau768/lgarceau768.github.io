import React from 'react'
import '../styles/topcard.scss'
import 'pure-react-carousel/dist/react-carousel.es.css';
import scanIcon from '../imgs/scan_icon.png'
import bankIcon from '../imgs/vault_icon.png'
import designIcon from '../imgs/design_icon.png'
import shareIcon from '../imgs/share_icon.png'
import slider3 from '../imgs/slider/3.png'
import slider4 from '../imgs/slider/4.png'
import slider5 from '../imgs/slider/5.png'
import slider6 from '../imgs/slider/6.png'
import slider7 from '../imgs/slider/7.png'
import slider8 from '../imgs/slider/8.png'
import slider9 from '../imgs/slider/9.png'
import slider10 from '../imgs/slider/10.png'
import slider11 from '../imgs/slider/11.png'
import slider12 from '../imgs/slider/12.png'
import slider13 from '../imgs/slider/13.png'
import slider15 from '../imgs/slider/15.png'
import slider16 from '../imgs/slider/16.png'
import slider17 from '../imgs/slider/17.png'
import slider18 from '../imgs/slider/18.png'
import slider19 from '../imgs/slider/19.png'
import slider20 from '../imgs/slider/20.png'
import slider21 from '../imgs/slider/21.png'
import slider22 from '../imgs/slider/22.png'
import slider23 from '../imgs/slider/23.png'
import slider24 from '../imgs/slider/24.png'
import slider25 from '../imgs/slider/25.png'
import slider26 from '../imgs/slider/26.png'
import weCanDetect from '../imgs/detection.png'
import HLine from './HLine'
import { Carousel } from 'react-responsive-carousel'
import { ButtonBack, ButtonNext, CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel'

export default function FirstCard(props){

    return (
        <div className="outerCard">
            <div class="topSection">
                <div class="topLeft">
                    <p className="rText">HOW MANY</p>
                    <p className="gText">BRICKS</p>
                    <p className="yText">
                        <span style={{color:"#FFAD33"}}>DO YOU HAVE</span>
                        <span style={{color:"#F25F5C"}}>?</span>
                    </p>
                    <img src={weCanDetect} alt="We Can Detect That!" className="changing"/>
                    <p className="plainTxt">Revolutionary Way To Maintain Your LEGO® Collection</p>
                    <p className="limited">Limited Alpha Tester Seats Available</p>
                </div>
                <div className="topRight">
                    <div className="whiteBorder">
                        <CarouselProvider
                            naturalSlideHeight={400}
                            naturalSlideWidth={200}
                            totalSlides={23}
                            step={1}
                            visibleSlides={3}
                            playDirection='forward'
                            infinite={true}
                            style={{height: '400px'}}>
                            <Slider>
                                <Slide index={1}>
                                    <img src={slider3} alt="Slider3" className="sliderImg"/>                                
                                </Slide>
                                <Slide index={2}>
                                    <img src={slider4} alt="Slider4" className="sliderImg"/>
                                </Slide>
                                <Slide index={3}>
                                    <img src={slider5} alt="Slider5" className="sliderImg"/>
                                </Slide>
                                <Slide index={4}>
                                    <img src={slider6} alt="Slider6" className="sliderImg"/>
                                </Slide>
                                <Slide index={5}>
                                    <img src={slider7} alt="Slider7" className="sliderImg"/>
                                </Slide>
                                <Slide index={6}>
                                    <img src={slider8} alt="Slider8" className="sliderImg"/>
                                </Slide>
                                <Slide index={7}>
                                    <img src={slider9} alt="Slider9" className="sliderImg"/>
                                </Slide>
                                <Slide index={8}>
                                    <img src={slider10} alt="Slider10" className="sliderImg"/>
                                </Slide>
                                <Slide index={9}>
                                    <img src={slider11} alt="Slider11" className="sliderImg"/>
                                </Slide>
                                <Slide index={10}>
                                    <img src={slider12} alt="Slider12" className="sliderImg"/>
                                </Slide>
                                <Slide index={11}>
                                    <img src={slider13} alt="Slider13" className="sliderImg"/>
                                </Slide>
                                <Slide index={12}>
                                    <img src={slider15} alt="Slider15" className="sliderImg"/>
                                </Slide>
                                <Slide index={13}>
                                    <img src={slider16} alt="Slider16" className="sliderImg"/>
                                </Slide>
                                <Slide index={14}>
                                    <img src={slider17} alt="Slider17" className="sliderImg"/>
                                </Slide>
                                <Slide index={15}>
                                    <img src={slider18} alt="Slider18" className="sliderImg"/>
                                </Slide>
                                <Slide index={16}>
                                    <img src={slider19} alt="Slider19" className="sliderImg"/>
                                </Slide>
                                <Slide index={17}>
                                    <img src={slider20} alt="Slider20" className="sliderImg"/>
                                </Slide>
                                <Slide index={18}>
                                    <img src={slider21} alt="Slider21" className="sliderImg"/>
                                </Slide>
                                <Slide index={19}>
                                    <img src={slider22} alt="Slider22" className="sliderImg"/>
                                </Slide>
                                <Slide index={20}>
                                    <img src={slider23} alt="Slider23" className="sliderImg"/>
                                </Slide>
                                <Slide index={21}>
                                    <img src={slider24} alt="Slider24" className="sliderImg"/>
                                </Slide>
                                <Slide index={22}>
                                    <img src={slider25} alt="Slider25" className="sliderImg"/>
                                </Slide>
                                <Slide index={23}>
                                    <img src={slider26} alt="Slider26" className="sliderImg"/>
                                </Slide>
                            </Slider>      
                            <ButtonNext className="caroseulNext">&#62;</ButtonNext>
                            <ButtonBack className="carosuelBack">&#60;</ButtonBack>
                        </CarouselProvider>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="shadows">
                    <div className="infoItem">
                        <img src={scanIcon} alt="Scan Icon" className="icon"/>
                        <p className="navInfoText">SCAN</p>
                        <HLine color="#F25F5C" width="242px"/>
                        <p className="navInfoSubText">You Can Scan<br></br>The Bricks<br></br>With Your Camera!</p>
                    </div>
                    <div className="infoItem">
                        <img src={bankIcon} alt="Bank Icon" className="icon"/>
                        <p className="navInfoText">BANK</p>
                        <HLine color="#FFE066" width="242px"/>
                        <p className="navInfoSubText">You Can Keep<br></br>All The Pieces<br></br>In Your Vault!</p>
                    </div>
                    <div className="infoItem">
                        <img src={designIcon} alt="Design Icon" className="icon"/>
                        <p className="navInfoText">DESIGN</p>
                        <HLine color="#06D6A0" width="242px"/>
                        <p className="navInfoSubText">You Can Build<br></br>The Bricks<br></br>And Share Them!</p>
                    </div>
                    <div className="infoItem">
                        <img src={shareIcon} alt="Scan Icon" className="icon"/>
                        <p className="navInfoText">SHARE</p>
                        <HLine color="#5BA1D6" width="242px"/>
                        <p className="navInfoSubText">You Can Share<br></br>Your Latest Designs<br></br>With Your Friends!</p>
                    </div>
                </div> 
            </div>           
        </div>
    )
}