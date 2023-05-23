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
  const navigate = useNavigate();
  const onRedirect = () => {
    navigate(url);
  };


  return (
    <Box right={'20%'}>
      <button
        className="btn-11 btn"
        onClick={onRedirect}
      >
        {content}
      </button>
    </Box>
  );
};
