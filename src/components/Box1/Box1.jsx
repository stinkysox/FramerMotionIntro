import React, { useState } from "react";
import { motion } from "framer-motion";

const Box1 = () => {
  const [isAnimating, setAnimating] = useState(false);
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          x: isAnimating ? 500 : 0,
          opacity: isAnimating ? 1 : 0.5,
          rotate: isAnimating ? 360 : 0,
        }}
        initial={{
          opacity: 0.1,
          x: -1000,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
        }}
        onClick={() => setAnimating(!isAnimating)}
      >
        Click Here
      </motion.div>
    </div>
  );
};

export default Box1;
