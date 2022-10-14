import React from "react";
import arrow from "../../img/city-arrow.png";
import { motion } from "framer-motion";
import { putNewCity } from "../../ApiRequests";

const Cities = ({
  counties,
  setNewCity,
  cities,
  setCities,
  newCity,
  choosenCountyId,
}) => {
  const newCityInput = (e) => {
    setNewCity(e.target.value);
  };
  const newCityHandler = async (e) => {
    let newCityInp = await putNewCity(newCity, choosenCountyId);
    setCities([...cities, newCityInp]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -200 }}
      transition={{ duration: 0.7 }}
      className="cities-section"
    >
      <h5>ÚJ VÁROS</h5>
      <input
        type="text"
        onChange={newCityInput}
        placeholder="Település neve"
        className="city-picker"
      />
      <motion.button
        onClick={newCityHandler}
        whileTap={{ scale: 0.85 }}
        className="add-to-list-btn"
      >
        FELVESZEM
      </motion.button>
      <img alt="arrow" src={arrow} />
    </motion.div>
  );
};

export default Cities;
