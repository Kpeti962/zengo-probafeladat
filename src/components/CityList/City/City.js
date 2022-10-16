import React, { useState } from "react";
import deleteBtn from "../../../img/delete-button.png";
import xBtn from "../../../img/x-button.png";
import checkBtn from "../../../img/check-button.png";
import { motion } from "framer-motion";
import { deleteCity, editCity, getTheCities } from "../../../ApiRequests";

const City = ({ id, city, cities, setCities }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [editedCityValue, setEditedCityValue] = useState("");
  const [editAlertOpen, setEditAlertOpen] = useState(false);
  const [editAlertMessage, setEditAlertMessage] = useState("");
  const [deleteAlertOpen, setDeleteAlertOpen] = useState(false);
  const [deleteAlertMessage, setDeleteAlertMessage] = useState("");

  const isEditableHandler = () => {
    setIsHighlighted(true);
  };
  const deleteCityHandler = async () => {
    if (window.confirm("Valóban törölni szeretnéd?")) {
      await deleteCity(city.id)
          const citiesArrayAfterDelete = cities.filter(
            (item) => item.id !== city.id
          );
          setCities(citiesArrayAfterDelete);
          setDeleteAlertOpen(true);
          setDeleteAlertMessage("Sikeresen törölve");
          setTimeout(() => setDeleteAlertOpen(false), 1500);
    }
  };

  const editCityHandler = async (e) => {
    const targetValue = e.target.value;
    setEditedCityValue(targetValue);
  };

  const acceptEditCityHandler = async () => {
    await editCity(editedCityValue, city.id).then((response) => {
      if (response.data.success) {
        const arrayAfterEditing = cities.map((cityObj) => {
          if (cityObj.id === city.id && cityObj.name !== editedCityValue) {
            cityObj.name = editedCityValue;
          }
          return cityObj;
        });
        setCities(arrayAfterEditing);
        setIsHighlighted(false);
        setEditAlertOpen(true);
        setEditAlertMessage("Sikeresen módosítva");
        setTimeout(() => setEditAlertOpen(false), 1500);
      } else {
        setEditAlertOpen(true);
        setEditAlertMessage("Ebben az oszlopban már létezik ilyen város");
        setTimeout(() => setEditAlertOpen(false), 1500);
      }
    });
  };

  return (
    <div key={id} className="city-line">
      <div onClick={isEditableHandler} className="city">
        {!isHighlighted && <li value={city?.id}>{city?.name}</li>}
      </div>
      {isHighlighted && (
        <div className="city-btns">
          <input
            defaultValue={city?.name}
            type="text"
            className="city-edit-input"
            onChange={editCityHandler}
          />
          <motion.img
            onClick={deleteCityHandler}
            whileTap={{ scale: 0.75 }}
            src={deleteBtn}
            alt=""
          />

          <motion.img
            onClick={acceptEditCityHandler}
            whileTap={{ scale: 0.75 }}
            src={checkBtn}
            alt=""
          />
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
      {editAlertOpen && <motion.h4
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 0.8, y: 0 }}
        exit={{ opacity: 0, y: -200 }}
        transition={{ duration: 0.7 }}
        className={`alert ${
          editAlertMessage === "Sikeresen módosítva" ? " success" : "error"
        }`}
      >{editAlertMessage}</motion.h4>}
      {deleteAlertOpen && <motion.h4
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 0.8, y: 0 }}
        exit={{ opacity: 0, y: -200 }}
        transition={{ duration: 0.7 }}
        className={`alert ${
          deleteAlertMessage === "Sikeresen törölve" ? " success" : "error"
        }`}
      >{deleteAlertMessage}</motion.h4>}
    </div>
  );
};

export default City;
