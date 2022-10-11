import React from 'react';
import "../styles/Counties.scss";
import arrow from "../../img/county-arrow.png"

const Counties = () => {
  return (
    <div className='counties-section'>

      <h5>MEGYE</h5>
      <select className='county-picker'>
        <option name="" id="">Válassz</option>
      </select>
      <img src={arrow} alt="" />
    </div>
  )
};

export default Counties;