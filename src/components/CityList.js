import React from 'react';
import Cities from './CityList/ActualCities';
import ActualCounty from './CityList/ActualCounty';
import "../styles/CityList.scss"

const CityList = ({choosenCounty}) => {
  return (
    <div className='list-section'>
      <ActualCounty choosenCounty={choosenCounty} />
        <Cities />
    </div>
  )
};

export default CityList;