import React, { useState } from "react";
import "../../../styles/City.scss";
import deleteBtn from "../../../img/delete-button.png";
import xBtn from "../../../img/x-button.png";
import checkBtn from "../../../img/check-button.png";
import { motion } from "framer-motion";

const City = ({ name, id, city }) => {

  const [isEditable, setIsEditable] = useState(false)

const isEditableHandler = () =>{
setIsEditable(true)
}

  return (
    <div key={id} className="city-line">
      <div className="city">
      <li contentEditable={true} onClick={isEditableHandler}>{city?.name}</li>
      </div>
      {isEditable && (<div className="city-btn">
      <motion.img whileTap={{ scale: 0.75 }} src={deleteBtn} alt="" />
      <motion.img whileTap={{ scale: 0.75 }} src={checkBtn} alt="" />
      <motion.img onClick={()=>{setIsEditable(false)}} whileTap={{ scale: 0.75 }} src={xBtn} alt="" />
      </div>)}
    </div>
  );
};

export default City;
