import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

interface IBigBangButton {
  content: string;
  url: string;
}

export const BigBangButton: React.FunctionComponent<IBigBangButton> = ({
  content,
  url
}) => {

  const navigate =  useNavigate();

  const onRedirect = () => {
    navigate(url);
  }

  return <button style={{right:"20%"}} className="btn-11 btn" onClick={onRedirect}>{content}</button>

  ;
};
