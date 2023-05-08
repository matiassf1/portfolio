import { Box, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IBigBangButton {
  content: string;
  url: string;
}

export const BigBangButton: React.FunctionComponent<IBigBangButton> = ({
  content,
  url,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const buttonRef: React.RefObject<any> = React.useRef(null);

  const onRedirect = () => {
    navigate(url);
  };

  const handleMouseOver = () => {
    console.log('heloo');
    
    buttonRef.current!.backgroundColor = 'white'
  }



  return (
    <Box right={'20%'}>
      <button
        ref={buttonRef}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOver}
        className="btn-11 btn"
        onClick={onRedirect}
      >
        {content}
      </button>
    </Box>
  );
};
