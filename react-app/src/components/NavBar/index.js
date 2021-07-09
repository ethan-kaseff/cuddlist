import React from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux'
import LogoutButton from '../auth/LogoutButton';
import logo from '../../images/cuddlistlogo2.png';
import LoginFormModal from '../auth/loginFormModal';


const NavBar = () => {
  const user = useSelector(state => state.session.user)

  return (
    <nav className='flex justify-between item-center shadow-sm p-2'>
      <div>
        <NavLink to="/" exact={true} activeClassName="active">
          <img src={logo} alt='something'></img>
        </NavLink>
      </div>
      {/* <div className='w-1/4'>

      </div> */}
      <div className='flex justify-center items-center pr-4 md:hidden'>
        <i className="fas fa-bars fa-lg"></i>
      </div>
      <ul className='md:flex justify-between items-center w-3/8 list-none pl-8 pr-4 hidden max-w-3xl min-w-md'>
        {/* <li>
          <NavLink to="/chat" exact={true} activeClassName="active">
            Chat
          </NavLink>
        </li> */}
        {user &&
        <li className='hover:bg-blue-200 p-2 items-center rounded-xl flex'>
          <NavLink to="/my-dashboard" exact={true} activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        }
        {!user &&
        <li className='hover:bg-blue-200 p-2 items-center rounded-xl flex'>
          {/* <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink> */}
          <LoginFormModal />
        </li>
        }
        {!user &&
        <li className='hover:bg-blue-200 p-2 items-center rounded-xl flex min-w-min'>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        }
        {user &&
        <li>
          <LogoutButton />
        </li>
        }
      </ul>
    </nav>
  );
}

export default NavBar;