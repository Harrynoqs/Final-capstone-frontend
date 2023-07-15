import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles/home.css'
import Laptopcard from './Laptopcard';
const Home = () => {
  const { laptoplibrary } = useSelector((state) => state.laptops);


  return (
    <div className='homecontainer'>   
        <h1>LATEST LAPTOP MODEL</h1>
       <div className='homepage'>
      { laptoplibrary.map((books) => (

        <Laptopcard  key={books.id} lappy={books} />
        
      ))}

    </div>
    </div>

  );
};

export default Home;
