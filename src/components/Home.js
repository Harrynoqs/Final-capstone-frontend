import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles/home.css';
import { NavLink } from 'react-router-dom';
import * as Remix from 'react-icons/fi';
import Laptopcard from './Laptopcard';
import { fetchLaptops } from '../redux/laptop/laptopSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLaptops());
  },
  [dispatch]);
  const { laptoplibrary } = useSelector((state) => state.laptops);
  const [currentPage, setCurrentPage] = useState(1);
  const displayPerPage = 3;
  const totalPages = laptoplibrary ? Math.ceil(laptoplibrary.length / displayPerPage) : 0;
  const startIndex = (currentPage);
  const endIndex = startIndex + displayPerPage;

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

  return (
    <div className="homecontainer">
      <h1>LATEST MODELS</h1>
      <p>Please Select a Laptop Model</p>
      <hr />
      <div className="homepage">
        <NavLink className={currentPage === 1 ? 'prev disabled' : 'prev'} to="#" onClick={prePage}>
          <Remix.FiTriangle className="triangle" />
        </NavLink>
        {laptoplibrary.slice(startIndex, endIndex).map((book) => (
          <Laptopcard key={book.id} lappy={book} />
        ))}
        <NavLink className={currentPage === totalPages ? 'next disabled' : 'next'} to="#" onClick={nextPage}>
          <Remix.FiTriangle className="next-triangle" />
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
