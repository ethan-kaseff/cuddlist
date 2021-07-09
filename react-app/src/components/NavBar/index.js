import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='flex justify-between item-center shadow-sm p-2'>
      <div>
        <NavLink to="/" exact={true} activeClassName="active">
          <img src="/images/cuddlistlogo2.png" alt='something'></img>
        </NavLink>
      </div>
      <div className='flex justify-center items-center pr-4 md:hidden'>
        <i class="fas fa-bars fa-lg"></i>
      </div>
      <ul className='md:flex justify-between items-center w-4/5 list-none pr-4 hidden'>
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