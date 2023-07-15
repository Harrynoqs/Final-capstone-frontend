import React from 'react'
import './styles/laptopcard.css'
import { NavLink } from 'react-router-dom';
import * as Falcons from 'react-icons/fa6';
import * as Tiles from 'react-icons/ti';

const Laptopcard = ({lappy}) => {
  return (

    <div className='card'>
        <img src={lappy.image} className='card-image'/>
         <h2>{lappy.model}</h2>
         <hr/>
         <p>{lappy.description}</p>
         <ul className="icon-container">
         <div className="link-container"><NavLink to="#"><Falcons.FaFacebookF /></NavLink></div>
        <div className="link-container"><NavLink to="#"><Falcons.FaTwitter /></NavLink></div>
        <div className="link-container"><NavLink to="#"><Falcons.FaChalkboard/></NavLink></div>
      </ul>
         </div>
  )
}

export default Laptopcard