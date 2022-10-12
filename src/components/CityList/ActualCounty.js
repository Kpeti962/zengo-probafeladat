import React from "react";
import "../../styles/ActualCounty.scss";
import { motion } from "framer-motion";

const ActualCounty = ({ choosenCounty }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="actual-county-section"
    >
      <div className="actual-county">
        <h4 id="megye">MEGYE</h4>
        <h4>{choosenCounty}</h4>
      </div>
    </motion.div>
  );
};

export default ActualCounty;
