import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Stickyomponent = ({ stickyPos }) => {
  const { scrollY } = useViewportScroll();
  const yTransform = useTransform(
    scrollY,
    [0, stickyPos, stickyPos + 1],
    [0, 0, 1],
    {
      clamp: false
    }
  );
  return (
    <motion.div y={yTransform} className="box">
      This is sticky
    </motion.div>
  );
};

export default Stickyomponent;
