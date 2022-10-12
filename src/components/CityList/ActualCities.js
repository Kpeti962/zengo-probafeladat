import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/ActualCities.scss";
import City from "./City/City";
import { motion } from "framer-motion";

const ActualCities = () => {

  const [actualCounty, setActualCounty] = useState()

  useEffect(() => {
    
  }, []);

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
      <div className="cities-list">
        <City />
      </div>
    </motion.div>
  );
};

export default ActualCities;
