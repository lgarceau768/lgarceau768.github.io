import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import React from 'react'
import './BB.scss'
import 'pure-react-carousel/dist/react-carousel.es.css';
import FirstCard from './components/FirstCard'
import TM from './components/TM'
import TopBar from './components/TopBar'
import VideoCard from './components/VideoCard'
import VideoContainer from './components/VideoContainer';
import challenges from './imgs/cards/challenges.png'
import scan from './imgs/cards/scan.png'
import vault from './imgs/cards/vault.png'
import marketplace from './imgs/cards/marketplace.png'
import designer from './imgs/cards/designer.png'
import bin from './imgs/cards/bin.png'
import coming_soon from './imgs/cards/coming_soon.png'
import { LeftImageCard, RightImageCard } from './components/ImageCard';
import Footer from './components/Footer';

export default class BB extends React.Component {

  render(){
    return (
      <div className="main">
        <TopBar/>
        <TM/>
        <FirstCard/>
        <VideoContainer/>
        <LeftImageCard
          img={challenges}
          alt="Daily Challeneges"
          title="Spin The Daily Challenge Wheel"
          desc={
            <p className="cardDesc">
              Play &#38; Win<br></br>
              Level Up!<br></br>
            </p>
          }
          shadow={[231, 68, 72]}
          color="#E74448"/>
        <RightImageCard
          img={scan}
          alt="Scan"
          title="Scan!"
          desc={
            <p className="cardDesc">
              Bank your LEGO&#169; pieces.<br></br>
              Organize them in the "Vault"<br></br>
              Create your own builds
            </p>
          }
          shadow={[255, 209, 102]}
          color="#FFD166"/>
        <LeftImageCard
          img={vault}
          alt="My Vault"
          title="Bank Your Vault"
          desc={
            <p className="cardDesc">
              Scan &#38; add your LEGO&#169;<br></br>
              New sets recommended for you<br></br>
              Organize your pieces the way you want!
            </p>
          }
          shadow={[91, 161, 214]}
          color="#5BA1D6"/>
        <RightImageCard
          img={marketplace}
          alt="Marketplace"
          title="Discover New Sets"
          desc={
            <p className="cardDesc">
              Find new nifty set<br></br>
              Share, buy &#38; discuss
            </p>
          }
          shadow={[6, 214, 160]}
          color="#06D6A0"/>
        <LeftImageCard
          img={designer}
          alt="Designer"
          title="Design Your Story"
          desc={
            <p className="cardDesc">
              Free form Sandbox<br></br>
              Use your own pieces<br></br>
              Create amazing new designs<br></br>
            </p>
          }
          shadow={[255, 173, 51]}
          color="#FFAD33"/>
        <RightImageCard
          img={bin}
          alt="BIN Creation"
          title="Create Your Own Bin Labels"
          desc={
            <p className="cardDesc" style={{textAlign: 'left'}}>
              1 - Find a box, mark it with a color, number or write a name you like.<br></br>
              2 - Create a BIN with the same name or color in the app.<br></br>
              3 - Scan parts and add them to this BIN.<br></br>
              4 - Store these-pieces in the box or container, that you created earlier.<br></br>
              Amazing, you learned to use BIN, a new feature in BrickBanker
            </p>
          }
          shadow={[112, 193, 179]}
          color="#70C1B3"/>
        <LeftImageCard
          img={coming_soon}
          alt="Coming Soon"
          title="Stay Tuned!"
          desc={
            <p className="cardDesc">
              Cool new features are comming soon.<br></br>
              Stay tuned to see them before anyone else<br></br>
            </p>
          }
          shadow={[255, 224, 102]}
          color="#FFE066"/>
        <Footer/>
      </div>
    )
  }
}