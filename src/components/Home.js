import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './styles/home.css';
import Laptopcard from './Laptopcard';
import { NavLink } from 'react-router-dom';
import * as Remix from "react-icons/fi";

const Home = () => {
  const { laptoplibrary } = useSelector((state) => state.laptops);
  const [currentPage, setCurrentPage] = useState(1);
  const displayPerPage = 2;
  const totalPages = Math.ceil(laptoplibrary.length / displayPerPage);
  const startIndex = (currentPage - 1) * displayPerPage;
  const endIndex = Math.min(startIndex + displayPerPage, laptoplibrary.length);
  const records = laptoplibrary.slice(startIndex, endIndex);

  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <div className='homecontainer'>
      <h1>LATEST LAPTOP MODEL</h1>
      <div className='homepage'>
      <NavLink className='prev' to='#' onClick={prePage}>
      <Remix.FiTriangle className='triangle' />
          </NavLink>
        {records.map((book) => (
          <Laptopcard key={book.id} lappy={book} />
        ))}
          <NavLink className='next' to='#' onClick={nextPage}>
          <Remix.FiTriangle className='next-triangle' />
          </NavLink>
      </div>
        
    </div>
  );
};

export default Home;
