import React from "react";
import Cities from "./CityList/ActualCities";
import ActualCounty from "./CityList/ActualCounty";
import "../styles/CityList.scss";
import starterImg from "../img/starter-img.png";
import { motion } from "framer-motion";
import ActualCities from "./CityList/ActualCities";

const CityList = ({ choosenCounty, newDataInput, cities }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.4 }}
      className="list-section"
    >
      {newDataInput && <ActualCounty choosenCounty={choosenCounty} />}
      {newDataInput && <ActualCities cities={cities} />}
      {newDataInput === false && (
        <img className="starter-img" src={starterImg} alt="" />
      )}
    </motion.div>
  );
};

export default CityList;
