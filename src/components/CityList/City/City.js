import React, { useState } from "react";
import deleteBtn from "../../../img/delete-button.png";
import xBtn from "../../../img/x-button.png";
import checkBtn from "../../../img/check-button.png";
import { motion } from "framer-motion";
import { deleteCity } from "../../../ApiRequests";

const City = ({ id, city, cities, setCities }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const isEditableHandler = () => {
    setIsHighlighted(true);
  };
  const deleteCityHandler = async () => {
    console.log(city.id);
    await deleteCity(city.id);
    const citiesArrayAfterDelete = cities.filter((item) => item.id !== city.id);
    setCities(citiesArrayAfterDelete);
  };

  return (
    <div key={id} className="city-line">
      <div onClick={isEditableHandler} className="city">
        <li
          className={isHighlighted ? "highlightedCity" : ""}
          contentEditable={true}
          value={city?.id}
        >
          {city?.name}
        </li>
      </div>
      {isHighlighted && (
        <div className="city-btns">
          <motion.img
            onClick={deleteCityHandler}
            whileTap={{ scale: 0.75 }}
            src={deleteBtn}
            alt=""
          />

          <motion.img whileTap={{ scale: 0.75 }} src={checkBtn} alt="" />
          <motion.img
            onClick={() => {
              setIsHighlighted(false);
            }}
            whileTap={{ scale: 0.75 }}
            src={xBtn}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default City;
