import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import TM from './components/TM'
import TopBar from './components/TopBar'
import BB from './screens/BB'
import './styles/BB.scss'
import HowTo from './screens/HowTo'
import About from './screens/About'
import Account from './screens/Account'

export default class Site extends React.Component {

    render(){
        return (
                <Router>                    
                    <TopBar/>
                    <TM/>
                    <Switch>
                        <Route path="/" exact component={() => <BB/>}/>
                        <Route path="/howto" exact component={() => <HowTo/>}/>
                        <Route path="/about" exact component={() => <About/>}/>
                        <Route path="/signup" exact component={() => <BB/>}/>
                        <Route path="/policy" exact component={() => <BB/>}/>
                        <Route path="/sign_up" exact component={() => <Account/>}/>
                    </Switch>
                    <Footer/>
                </Router>
        )
    }
}