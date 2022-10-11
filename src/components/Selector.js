import React from 'react';
import Cities from './Selector/Cities';
import Counties from './Selector/Counties';
import upperTriangles from "../img/upper-triangles.png"
import lowerTriangles from "../img/lower-triangles.png"
const Selector = () => {
  return (
    <div>
        <div>
            <img src={upperTriangles} alt="" />
        <Counties />
        <Cities />
            <img src={lowerTriangles} alt="" />
        </div>
    </div>
  )
};

export default Selector;