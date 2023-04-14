import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface IBigBangButton {
  content: string;
}

export const BigBangButton: React.FunctionComponent<IBigBangButton> = ({
  content,
}) => {
  return <button style={{right:"20%"}} className="btn-11 btn">{content}</button>

  ;
};
