import React, { Component } from 'react'
import { Link, withRouter,NavLink } from 'react-router-dom'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

 




  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li >
        <NavLink to="/Register" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">
          Sign Up</NavLink>
           
        </li>
        <li >
        <NavLink to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">
          Sign In</NavLink>
        </li>
        {/* <li >
        <NavLink to="/Insert" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">
         témoins</NavLink>
        </li> */}
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
      
        <li className="nav-item">
          
        <NavLink  to="/profile" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">
            Profile
          </NavLink >
        </li>
       
        <li className="nav-item">
          
          <NavLink  to="/Insert" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">
            Incidents
            </NavLink >
          </li>
          <li className="nav-item">
          
          <NavLink  to="/Incident" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">
          Witnesses
            </NavLink >
          </li>
          <li className="nav-item">
          
          <NavLink  to="/favoriteliste" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">
               Confident  Witnesses
            </NavLink >
          </li>
          <li className="nav-item">
          
          <NavLink  to="/Login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item" onClick={this.logOut.bind(this)}>
            Logout
            </NavLink >
          </li>
       
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item" >
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    )
  }
}

export default withRouter(Landing)