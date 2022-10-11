import React from "react";
import "../styles/Cities.scss";
import arrow from "../../img/city-arrow.png";

const Cities = () => {
  return (
    <div className="cities-section">
      <h5>ÚJ VÁROS</h5>
      <input type="text" placeholder="Település neve" className="city-picker" />
      <button className="add-to-list-btn">FELVESZEM</button>
      <img src={arrow} />
    </div>
  );
};

export default Cities;
