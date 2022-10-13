import React, { useEffect, useState } from "react";
import "../../styles/Counties.scss";
import arrow from "../../img/county-arrow.png";
import axios from "axios";
import { getTheCity } from "../../ApiRequests";


const Counties = ({
  counties,
  setCounties,
  setChoosenCounty,
  setNewDataInput,
  setCities
}) => {


  const choosenCountyHandler = async (e) => {
    setChoosenCounty(counties[Number(e.target.value) / 2 - 1].name);
    setNewDataInput(true);
    let responseCities = await getTheCity(e.target.value)
    setCities(responseCities);
   

  };
  return (
    <div className="counties-section">
      <h5>MEGYE</h5>
      <select onChange={choosenCountyHandler} className="county-picker">
        <option>Válassz megyét</option>
        {counties.length > 0 &&
          counties.map((county) => {
            const { id, name } = county;

            return (
              <option key={id} value={county.id}>
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
