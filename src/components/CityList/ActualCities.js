import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/ActualCities.scss";
import City from "./City/City";
import { motion } from "framer-motion";

const ActualCities = ({ cities }) => {
 
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="city-list-section"
    >
      <div className="varosok">
        <h4>VÁROSOK</h4>
      </div>
      <div className="city-list-wrapper">
        <ul>
          {cities &&
            cities.length > 0 &&
            cities.map((city) => {
              const { id, name } = city;
              return <City city={city} />;
            })}
        </ul>
      </div>
    </motion.div>
  );
};

export default ActualCities;
