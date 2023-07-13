import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/navigation.css';
import myImage from './images/tag.JPG';
const Navigation = () => (
  <nav className="navbar">
    <img src={myImage} alt="Tag" className='picture' />
    <ul className='link'>
    <NavLink className="lifestyle" to="/">MODELS</NavLink>
    <NavLink className="lifestyle" to="/lifestyle/">LIFESTYLE</NavLink>
    <NavLink className="lifestyle" to="/shop/">SHOP</NavLink>
    <NavLink className="lifestyle" to="/test/">TEST LAPTOP</NavLink>
    </ul>
  </nav>
);

export default Navigation;
