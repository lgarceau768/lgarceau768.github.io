import React from 'react'
import './BB.scss'
import FirstCard from './components/FirstCard'
import TM from './components/TM'
import TopBar from './components/TopBar'

export default class BB extends React.Component {

  render(){
    return (
      <div className="main">
        <TopBar/>
        <TM/>
        <FirstCard/>
      </div>
    )
  }
}