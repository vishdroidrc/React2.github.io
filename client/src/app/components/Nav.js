import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navBar navbar">
          <NavLink exact to="/">Home</NavLink>      
          <NavLink to="/articles">Articles</NavLink>      
          <NavLink to="/saved">Saved</NavLink>      
        </nav> 
      </div>
    );
  }
}

export default Nav;