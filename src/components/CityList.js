import React from 'react';
import Cities from './CityList/ActualCities';
import ActualCounty from './CityList/ActualCounty';
import "../components/styles/CityList.scss"

const CityList = () => {
  return (
    <div className='list-section'>
      <ActualCounty />
        <Cities />
    </div>
  )
};

export default CityList;