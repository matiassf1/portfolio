import React from "react";
import { motion } from "framer-motion";

interface IButtonOne {
  text: string;
  animation: string;
}

const ButtonOne: React.FunctionComponent<IButtonOne> = ({ text, animation }) => {
  return (
    <motion.button
      className={`btn-${animation}`}
      whileHover={{ color: "#c5dfe5" }}
      whileTap={{ scale: 0.9 }}
    >
      {text}
    </motion.button>
  );
};

export const Example = () => {
  return (
    <div className="centerer">
      <ButtonOne text="Button 9" animation="9" />
      <ButtonOne text="Button 10" animation="10" />
      <ButtonOne text="Button 11" animation="11" />
    </div>
  );
};

export default Example;
