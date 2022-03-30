import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './LogoutButton'

class Header extends React.Component {
  render() {
    return (
      <Navbar className="nav-bar" collapseOnSelect expand="lg" >
        <Navbar.Brand className="nav-brand">THESE ARE THE BEST BOOKS EVER</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {/* TODO: if the user is logged in, render a navigation link to profile page */}
        <NavItem>{this.props.user?<Link to="/Profile" className="nav-link">Profile</Link>:''}</NavItem>
        {/* TODO: if the user is logged in, render the `LogoutButton` */}
        <NavItem>{this.props.user?<LogoutButton onLogout={this.props.onLogout}/>:''}</NavItem>
      </Navbar>
    )
  }
}

export default Header;
