import React from "react";
import "../../styles/Cities.scss";
import arrow from "../../img/city-arrow.png";
import { motion } from "framer-motion";

const Cities = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -200 }}
      transition={{ duration: 0.7 }}
      className="cities-section"
    >
      <h5>ÚJ VÁROS</h5>
      <input type="text" placeholder="Település neve" className="city-picker" />
      <motion.button whileTap={{ scale: 0.85 }} className="add-to-list-btn">
        FELVESZEM
      </motion.button>
      <img src={arrow} />
    </motion.div>
  );
};

export default Cities;
