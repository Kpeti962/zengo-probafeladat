import React, { useEffect, useState } from "react";
import "../../styles/Counties.scss";
import arrow from "../../img/county-arrow.png";
import axios from "axios";

const Counties = ({ counties, setCounties, setChoosenCounty, setNewDataInput }) => {


//Put the choosen county to the choosenCounty useState
  const choosenCountyHandler = (e) => {
    setChoosenCounty(counties[Number(e.target.value) / 2 - 1].name);
    setNewDataInput(true)
    console.log(e.target.value);
  };

  return (
    <div className="counties-section">
      <h5>MEGYE</h5>
      <select onChange={choosenCountyHandler} className="county-picker">
        <option value={null}>Válassz megyét</option>
        {counties.length > 0 &&
          counties.map((county) => {
            const { id, name } = county;
            return (
              <option key={id} value={id}>
                {county?.name}
              </option>
            );
          })}
      </select>

      <img src={arrow} alt="" />
    </div>
  );
};

export default Counties;
