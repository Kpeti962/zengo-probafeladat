import React, { useState } from "react";
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
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const newCityInput = (e) => {
    setNewCity(e.target.value);
  };
  const newCityHandler = async (e) => {
    e.preventDefault();
    await putNewCity(newCity, choosenCountyId).then((response) => {
      if (response.data.success) {
        setCities([...cities, response.data.data]);
        setNewCity("");
        setAlertOpen(true);
        setAlertMessage("Sikeresen hozzáadva");
        setTimeout(() => setAlertOpen(false), 1500);
      } else {
        setAlertOpen(true);
        setAlertMessage("Ilyen város már létezik");
        setTimeout(() => setAlertOpen(false), 1500);
      }
    });
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
        value={newCity}
      />
      <motion.button
        onClick={newCityHandler}
        whileTap={{ scale: 0.85 }}
        className="add-to-list-btn"
      >
        FELVESZEM
      </motion.button>
      <img alt="arrow" src={arrow} />
      {alertOpen && (
        <motion.h4
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 0.8, y: 0 }}
          exit={{ opacity: 0, y: -200 }}
          transition={{ duration: 0.7 }}
          className={`alert ${
            alertMessage === "Sikeresen hozzáadva" ? " success" : "error"
          }`}
        >
          {alertMessage}
        </motion.h4>
      )}
    </motion.div>
  );
};

export default Cities;
