import React from 'react';
import "../../styles/ActualCities.scss"
import City from './City/City';

const ActualCities = () => {
  return (
    <div className='city-list-section'>
      <div className="varosok">
        <h4>VÁROSOK</h4>
      </div>
      <div className="cities-list">
      <City />
      </div>
    </div>
  )
};

export default ActualCities;