import React from 'react'
import '../styles/BB.scss'
import '../styles/howto.scss' 
import scan from '../imgs/cards/scan.png'
import { CompactImageCard } from '../components/ImageCard'
import HLine from '../components/HLine'

export default function HowTo(props) {


    return (
        <div className="container">
            <div className="yellowContainer">
                <p className="title">HOW TO</p>
                <CompactImageCard 
                    img={scan}
                    alt="Join!"
                    title="Join Brickbanker"
                    desc={
                        <p className="cardDesc">
                            Create an account, choose an avater,<br></br>
                            remember the confirmation code that is in your email.<br></br>
                            And explore a world of possibilities.
                        </p>
                    }
                    shadow={[0, 0, 0]}
                    color="#F9E92F"/>
                <HLine color="#707070" width="52.813rem" height="2px" className="howToDivider"/>
                <CompactImageCard 
                    img={scan}
                    alt="Bank!"
                    title="Bank Your First Piece"
                    desc={
                        <p className="cardDesc">
                            With the camera application,<br></br>
                            you can scan the parts automatically.<br></br>
                            Just select the correct part, and remember<br></br>
                            to use a white background.
                        </p>
                    }
                    shadow={[0, 0, 0]}
                    color="#F9E92F"/>
                <HLine color="#707070" width="52.813rem" height="2px" className="howToDivider"/>
                <CompactImageCard 
                    img={scan}
                    alt="Vault!"
                    title="My Vault"
                    desc={
                        <p className="cardDesc">
                            Here you will see your scanned pieces,<br></br>
                            they are added automatically.<br></br>
                            You can filter them by rarity, color, and several more.<br></br>
                            Also, if you select a piece,<br></br>
                            you will be able to see its deatils.
                        </p>
                    }
                    shadow={[0, 0, 0]}
                    color="#F9E92F"/>
                <HLine color="#707070" width="52.813rem" height="2px" className="howToDivider"/>
                <CompactImageCard 
                    img={scan}
                    alt="BIN!"
                    title="Bin Label Creation"
                    desc={
                        <p className="cardDesc" style={{textAlign: 'left'}}>
                            1 - Find a box or bin, mark it with a color or wite the name you like.<br></br>
                            2 - Create a BIN with the same name or color in the app.<br></br>
                            3 - Scan parts and added them to this BIN.<br></br>
                            4 - Store these pieces in the box or container, that your created earlier.
                        </p>
                    }
                    shadow={[0, 0, 0]}
                    color="#F9E92F"/>
                <HLine color="#707070" width="52.813rem" height="2px" className="howToDivider"/>
                <CompactImageCard 
                    img={scan}
                    alt="Design!"
                    title="Designer"
                    desc={
                        <p className="cardDesc">
                            You can see your designs, save them, and share them.<br></br>
                            You can also block it in case you do not want<br></br>
                            to disassemble your design.
                        </p>
                    }
                    shadow={[0, 0, 0]}
                    color="#F9E92F"/>                
                <HLine color="#707070" width="52.813rem" height="2px" className="howToDivider"/>
                <CompactImageCard 
                    img={scan}
                    alt="MarketPlace!"
                    title="MarketPlace"
                    desc={
                        <p className="cardDesc">
                            See how close you are to completing your favorite set.<br></br>
                            You're just missing a few pieces.<br></br>
                            You can also see recommended sets<br></br>
                            according to your piece history.<br></br>
                            Do you have some sets in mind?<br></br>
                            You can save them in the "Wishlist".<br></br>
                        </p>
                    }
                    shadow={[0, 0, 0]}
                    color="#F9E92F"/>
            </div>
        </div>
    )
}