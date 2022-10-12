import React, { useState } from "react";
import "../styles/Chooser.scss";
import Cities from "./Chooser/Cities";
import Counties from "./Chooser/Counties";
import upperTriangles from "../img/upper-triangles.png";
import lowerTriangles from "../img/lower-triangles.png";

const Chooser = ({ counties, setCounties, setChoosenCounty, newDataInput, setNewDataInput }) => {


  return (
    <div>
      <div className="chooser-section">
        <img src={upperTriangles} alt="" />
        <Counties
          counties={counties}
          setCounties={setCounties}
          setNewDataInput={setNewDataInput}
          setChoosenCounty={setChoosenCounty}
        />
        {newDataInput && <Cities />}
        <img src={lowerTriangles} alt="" />
      </div>
    </div>
  );
};

export default Chooser;
