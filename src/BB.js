import React from 'react'
import './BB.scss'
import FirstCard from './components/FirstCard'
import TM from './components/TM'
import TopBar from './components/TopBar'
import VideoCard from './components/VideoCard'

export default class BB extends React.Component {

  render(){
    return (
      <div className="main">
        <TopBar/>
        <TM/>
        <FirstCard/>
        <VideoCard 
          color="#FFE066" 
          cardTxt="Loreum ipsum dolor sit amet, consetetur"
          title="Lego DJ"
          url='https://www.youtube.com/watch?v=EY89lhcatYs'/>
      </div>
    )
  }
}