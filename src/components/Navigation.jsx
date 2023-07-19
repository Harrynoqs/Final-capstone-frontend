import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/navigation.css';
import * as Falcons from 'react-icons/fa6';
import * as Tiles from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import myImage from './images/tag.JPG';
import { fetchLaptops } from '../redux/laptop/laptopSlice';

const Navigation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLaptops());
  }, [dispatch]);

  return (
    <nav className="navbar">
      <img src={myImage} alt="Tag" className="picture" />
      <ul className="link">
        <NavLink className="lifestyle" to="/">MODELS</NavLink>
        <NavLink className="lifestyle" to="/lifestyle/">LIFESTYLE</NavLink>
        <NavLink className="lifestyle" to="/shop/">SHOP</NavLink>
        <NavLink className="lifestyle" to="/test/">TEST LAPTOP</NavLink>
      </ul>
      <div className="footer">
        <ul className="icons">
          <NavLink to="#"><Falcons.FaTwitter /></NavLink>
          <NavLink to="#"><Falcons.FaFacebookF /></NavLink>
          <NavLink to="#"><Tiles.TiSocialGooglePlus /></NavLink>
          <NavLink to="#"><Falcons.FaVimeoV /></NavLink>
          <NavLink to="#"><Falcons.FaPinterestP /></NavLink>
        </ul>
        <p className="footnote">&copy; 2023 Omotayo-Harry-Queenta</p>
      </div>
    </nav>
  );
};

export default Navigation;
