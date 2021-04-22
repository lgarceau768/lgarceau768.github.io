import React from 'react'
import ReactPlayer from 'react-player'
import '../styles/videocard.scss'
import HLine from './HLine'

export default function VideoCard(props){


    return (
        <div className="tallCard" style={{backgroundColor: props.color}}>
            <ReactPlayer 
                url={props.url}
                width="19.938rem"
                height="19.875rem"
                controls={true}
                className="player"/>
            <p className="cardTitle">{props.title}</p>
            <HLine color="#FFFFFF" width="300px" height="3px"/>
            <p className="cardTxt">{props.cardTxt}</p>
        </div>
    )
}