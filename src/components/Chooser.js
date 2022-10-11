import React from 'react';
import "../components/styles/Chooser.scss"
import Cities from './Chooser/Cities';
import Counties from './Chooser/Counties';
import upperTriangles from "../img/upper-triangles.png"
import lowerTriangles from "../img/lower-triangles.png"
const Chooser = () => {
  return (
    <div>
        <div className='chooser-section'>
            <img src={upperTriangles} alt="" />
        <Counties />
        <Cities />
            <img src={lowerTriangles} alt="" />
        </div>
    </div>
  )
};

export default Chooser;