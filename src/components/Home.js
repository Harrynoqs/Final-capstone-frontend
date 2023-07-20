import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles/home.css';
import { NavLink } from 'react-router-dom';
import * as Remix from 'react-icons/fi';
import Laptopcard from './Laptopcard';
import { fetchLaptops } from '../redux/laptop/laptopSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { LaptopList, isLoading, error } = useSelector((state) => state.laptops);
  const [currentPage, setCurrentPage] = useState(1);
  const displayPerPage = 3;
  const [records, setRecords] = useState([]);

  useEffect(() => {
    dispatch(fetchLaptops());
  }, [dispatch]);

  const totalPages = Math.ceil(LaptopList.length / displayPerPage);

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
    if (LaptopList.length === 0) {
      setRecords([]);
    } else {
      const startIndex = (currentPage - 1) * displayPerPage;
      const endIndex = Math.min(startIndex + displayPerPage, LaptopList.length);
      const records = LaptopList.slice(startIndex, endIndex);
      setRecords(records);
    }
  }, [LaptopList, currentPage, displayPerPage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error occurred:
        {error}
      </div>
    );
  }

  if (LaptopList.length === 0) {
    return <div>No laptops available.</div>;
  }

  return (
    <div className="homecontainer">
      <h1>LATEST MODELS</h1>
      <p>Please Select a Laptop Model</p>
      <hr />
      <div className="homepage">
        <NavLink className={currentPage <= 1 ? 'prev disabled' : 'prev'} to="#" onClick={prePage}>
          <Remix.FiTriangle className="triangle" />
        </NavLink>
        {records.map((book) => (
          <NavLink className="detail-link" to={`/details/${book.id}`} key={book.id}><Laptopcard lappy={book} /></NavLink>
          // <Laptopcard key={book.id} lappy={book} />
        ))}
        <NavLink className={currentPage >= totalPages ? 'next disabled' : 'next'} to="#" onClick={nextPage}>
          <Remix.FiTriangle className="next-triangle" />
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
