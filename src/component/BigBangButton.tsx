import { Box, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface IBigBangButton {
  content: string;
  url: string;
}

export const BigBangButton: React.FunctionComponent<IBigBangButton> = ({
  content,
  url,
}) => {
  return (
    <Box right={"20%"}>
        <Link className="btn-11 btn" to={url}><p style={{textAlign:'center', marginTop:'14px'}}>{content}</p></Link>
    </Box>
  );
};
