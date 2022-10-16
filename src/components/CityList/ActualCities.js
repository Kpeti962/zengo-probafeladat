import React from "react";
import City from "./City/City";
import { motion } from "framer-motion";

const ActualCities = ({ cities, setCities }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
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
            cities.map((city, index) => {
              const { id } = city;
              return (
                <City
                  setCities={setCities}
                  cities={cities}
                  key={id}
                  city={city}
                  index={index}
                />
              );
            })}
        </ul>
      </div>
    </motion.div>
  );
};

export default ActualCities;
