import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles/details.css';

const Details = () => {
  const { id } = useParams();
  const LaptopDetails = useSelector((state) => state.laptops).LaptopList
    .filter((detail) => (detail.id === Number(id)));
  const isLoading = useSelector((state) => state.laptops.isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!LaptopDetails || LaptopDetails.length === 0) {
    return <div>Laptop not found</div>;
  }

  return (
    <div className="detail-container">
      <div>
        <img className="image-detail" src={LaptopDetails[0].image_url} alt={LaptopDetails[0].name} />
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
