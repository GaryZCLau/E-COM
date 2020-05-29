import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {

    const link = {
        // width: '100px',
        // padding: '12px',
        margin: '0 6px 6px',
        // background: 'darkgray',
        textDecoration: 'none',
        color: 'black'
      }

  return(
    <ul className="nav">
      <li className="navli">
        <NavLink to="/" exact style={link} activeStyle={{color: 'lightblue'}}>Home</NavLink>
      </li>
      <li className="navli">
        <NavLink to="/men" style={link} activeStyle={{color: 'lightblue'}}>Men</NavLink>
      </li>
      <li className="navli">
        <NavLink to="/women" style={link} activeStyle={{color: 'lightblue'}}>Women</NavLink>
      </li>
      <li className="navli">
        <NavLink to="/cart" style={link} activeStyle={{color: 'lightblue'}}>Cart</NavLink>
      </li>
    </ul>
  )
};

export default NavBar;