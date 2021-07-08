import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import logo from './images/cuddlistlogo2.png';

import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/" exact={true} activeClassName="active">
          <img src={logo} alt='something'></img>
        </NavLink>
      </div>
      <ul>
        <li>
        </li>
        <li>
          <NavLink to="/chat" exact={true} activeClassName="active">
            Chat
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile-page" exact={true} activeClassName="active">
            Profile Page
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;