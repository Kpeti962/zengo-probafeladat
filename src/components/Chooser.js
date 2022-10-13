import React, { useState } from "react";
import "../styles/Chooser.scss";
import Cities from "./Chooser/Cities";
import Counties from "./Chooser/Counties";
import upperTriangles from "../img/upper-triangles.png";
import lowerTriangles from "../img/lower-triangles.png";

const Chooser = ({
  newCity,
  cities,
  setNewCity,
  counties,
  setCounties,
  setChoosenCounty,
  newDataInput,
  setNewDataInput,
  setCities
}) => {
  return (
    <div>
      <div className="chooser-section">
        <img src={upperTriangles} alt="" />
        <Counties
        setCities={setCities}
          counties={counties}
          setCounties={setCounties}
          setNewDataInput={setNewDataInput}
          setChoosenCounty={setChoosenCounty}
        />
        {newDataInput && <Cities newCity={newCity} setCities={setCities} cities={cities} setNewCity={setNewCity} counties={counties} />}
        <img src={lowerTriangles} alt="" />
      </div>
    </div>
  );
};

export default Chooser;
