import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './styles/home.css';
import { NavLink } from 'react-router-dom';
import * as Remix from 'react-icons/fi';
import Laptopcard from './Laptopcard';

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
    <div className="homecontainer">
      <h1>LATEST MODELS</h1>
      <p>Please Select a Laptop Model </p>
      <hr />
      <div className="homepage">
        <NavLink className={currentPage <= 1 ? 'prev disabled' : 'prev'} to="#" onClick={prePage}>
          <Remix.FiTriangle className="triangle" />
        </NavLink>
        {records.map((book) => (
          <Laptopcard key={book.id} lappy={book} />
        ))}
        <NavLink className={currentPage >= totalPages ? 'next disabled' : 'next'} to="#" onClick={nextPage}>
          <Remix.FiTriangle className="next-triangle" />
        </NavLink>
      </div>

    </div>
  );
};
export default Home;
