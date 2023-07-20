// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import './styles/details.css';

// const Details = () => {
//   const { id } = useParams();
//   const LaptopDetails = useSelector((state) => state.laptops).LaptopList
//     .filter((detail) => (detail.id === id));

//   return (
//     <div className="detail-container">
//       <div>
//         <img className="image-detail" src={LaptopDetails[0].image_url} />
//       </div>
//       <div className="detail-card">
//         <h1>{LaptopDetails[0].name}</h1>
//         <p>
//           Price
//           {LaptopDetails[0].price}
//         </p>
//         <p>
//           Ram_size
//           {LaptopDetails[0].ram_size}
//         </p>
//         <p>
//           Rom_size
//           {LaptopDetails[0].rom_size}
//         </p>
//         <p>
//           Model_year
//           {LaptopDetails[0].model_year}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Details;
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLaptops } from '../redux/laptop/laptopSlice'; import './styles/details.css';

const Details = () => {
  const { id } = useParams();
  const LaptopDetails = useSelector((state) => state.laptops).LaptopList
    .filter((detail) => detail.id === id);
  const isLoading = useSelector((state) => state.laptops.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch laptop details when the component mounts
    dispatch(fetchLaptops());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!LaptopDetails || LaptopDetails.length === 0) {
    return <div>Laptop not found</div>;
  }

  return (
    <div className="detail-container">
      <div>
        <img className="image-detail" src={LaptopDetails[0].image_url} alt="Laptop" />
      </div>
      <div className="detail-card">
        <h1>{LaptopDetails[0].name}</h1>
        <p>
          Price:
          {' '}
          {LaptopDetails[0].price}
        </p>
        <p>
          RAM Size:
          {' '}
          {LaptopDetails[0].ram_size}
        </p>
        <p>
          ROM Size:
          {' '}
          {LaptopDetails[0].rom_size}
        </p>
        <p>
          Model Year:
          {' '}
          {LaptopDetails[0].model_year}
        </p>
      </div>
    </div>
  );
};

export default Details;
