import React from "react";
import "../../../styles/City.scss";
import deleteBtn from "../../../img/delete-button.png";
import xBtn from "../../../img/x-button.png";
import checkBtn from "../../../img/check-button.png";
import { motion } from "framer-motion";

const City = () => {
  return (
    <div className="city-list-wrapper">
      <ul>
        <div className="city-line">
          <li>asdsad</li>
          <motion.img whileTap={{ scale: 0.75 }} src={deleteBtn} alt="" />
          <motion.img whileTap={{ scale: 0.75 }} src={checkBtn} alt="" />
          <motion.img whileTap={{ scale: 0.75 }} src={xBtn} alt="" />
        </div>
      </ul>
    </div>
  );
};

export default City;
