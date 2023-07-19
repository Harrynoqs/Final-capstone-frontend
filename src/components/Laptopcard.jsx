import React from 'react';
import './styles/laptopcard.css';
import { NavLink } from 'react-router-dom';
import * as Falcons from 'react-icons/fa6';
import PropTypes from 'prop-types';

const Laptopcard = ({ lappy }) => {
  Laptopcard.propTypes = {
    lappy: PropTypes.oneOfType([PropTypes.object]).isRequired,

  };

  return (

    <div className="card">
      <img src={lappy.image_url} className="card-image" alt={lappy.name} />
      <h2>{lappy.model}</h2>
      <hr />
      <p>{lappy.description}</p>
      <ul className="icon-container">
        <div className="link-container"><NavLink to="#"><Falcons.FaFacebookF /></NavLink></div>
        <div className="link-container"><NavLink to="#"><Falcons.FaTwitter /></NavLink></div>
        <div className="link-container"><NavLink to="#"><Falcons.FaChalkboard /></NavLink></div>
      </ul>
    </div>
  );
};

export default Laptopcard;
