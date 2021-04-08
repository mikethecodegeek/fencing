import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='navbar'>
      
    <ul>
      
      <li>
        <NavLink exact to="/">Dales Fencing</NavLink>
        {/* {isLoaded && sessionLinks} */}
      </li>
      <li>
          <NavLink exact to="/about">About Us</NavLink>
      </li>
      <li>
          <NavLink exact to="/services">Services</NavLink>
      </li>
      <li>
          <NavLink exact to="/areas">Served Areas</NavLink>
      </li>
      <li>
          <NavLink exact to="/testimonials">Testimonials</NavLink>
      </li>
      <li>
          <NavLink exact to="/contact">Contact Us</NavLink>
      </li>
    </ul>
    </div>
  );
}

export default Navigation;