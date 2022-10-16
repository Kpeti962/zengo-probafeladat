import React from "react";
import ActualCounty from "./CityList/ActualCounty";
import starterImg from "../img/starter-img.png";
import { motion } from "framer-motion";
import ActualCities from "./CityList/ActualCities";

const CityList = ({ choosenCounty, newDataInput, cities, setCities}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.4 }}
      className="list-section"
    >
      {newDataInput && (
        <>
          <ActualCounty choosenCounty={choosenCounty} />
          <ActualCities setCities={setCities} cities={cities} />
        </>
      )}
      {newDataInput === false && (
        <img className="starter-img" src={starterImg} alt="" />
      )}
    </motion.div>
  );
};

export default CityList;
