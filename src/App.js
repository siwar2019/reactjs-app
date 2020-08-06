import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

import Insert from './components/Insert'
import Incident from './components/Incident'

import sidenav from './components/sidenav'


//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';

import './App.css';
import { SideNav } from 'react-simple-sidenav'
class App extends Component {
  render() {
    return (

      <Router >
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <Navbar />
            <SideNav />
            <Switch>
              <Route exact path="/" component={Landing} />
              <div className="container">
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/Navbar" component={Navbar} />
                <Route exact path="/Insert" component={Insert} />
                <Route exact path="/Incident" component={Incident} />
              </div>
            </Switch>
          </div>
        </div>
      </Router>

    )
  }
}



export default App

/* raditha heka :) dm1 7ot register w home w ogin w logut f navlink :) w importi css  fel code eli fou9 w zid les div b shih
import React, { Component } from 'react'
import { BrowserRouter as Router, Route,NavLink } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import './App.css';
class App extends Component {
  render() {
    return (

<Router >
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/Register" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/Login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/Register" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/Login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            </div>
          </div>

        </div>
      </Router>



    )
  }
}

export default App
*/