import React from 'react'
import HLine from './HLine'
import '../styles/imagecard.scss'

function LeftImageCard(props){


    return (
        <div className="imageCard" style={{
            border: `8px solid ${props.color}`,
            boxShadow: `5px 5px 10px rgba(${props.shadow[0]}, ${props.shadow[1]}, ${props.shadow[2]}, 0.5)`
        }}>
            <img src={props.img} alt={props.alt} className="image"/>
            <div className="imageCardText">
                <p className="cardTitle">{props.title}</p>
                <HLine color={props.color} width="40.063rem" height="5px" className="cardDividerLine" style={{
                    boxShadow: `5px 5px 10px rgba(${props.shadow[0]}, ${props.shadow[1]}, ${props.shadow[2]}, 0.5)`,
                    height: "5px",
                    borderRadius: "5px"
                }}/>
                {props.desc}
            </div>
        </div>
    )
}

function RightImageCard(props) {

    return (
        <div className="imageCard" style={{
            border: `8px solid ${props.color}`,
            boxShadow: `5px 5px 10px rgba(${props.shadow[0]}, ${props.shadow[1]}, ${props.shadow[2]}, 0.5)`
        }}>
            <div className="imageCardText">
                <p className="cardTitle">{props.title}</p>
                <HLine color={props.color} width="40.063rem" height="5px" style={{
                    boxShadow: `5px 5px 10px rgba(${props.shadow[0]}, ${props.shadow[1]}, ${props.shadow[2]}, 0.5)`,
                    height: "5px",
                    borderRadius: "5px"
                }}/>
                {props.desc}
            </div>
            <img src={props.img} alt={props.alt} className="image"/>
        </div>
    )
}

export {
    LeftImageCard,
    RightImageCard
}