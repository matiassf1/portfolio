import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Flex, IconButton, theme } from "@chakra-ui/react";

import React from "react";

export const Footer = () => {
  return (
    <Flex justifyContent="center" alignItems="center" py={4} mt="30px" mb="40px">
      <IconButton
        aria-label="Instagram"
        icon={<FaInstagram />}
        variant="ghost"
        color="#BF4F45"
        backgroundColor='#987cb'
        size="lg"
        rounded='lg'
        mr={4}
      />
      <IconButton
        aria-label="LinkedIn"
        icon={<FaLinkedin />}
        variant="ghost"
        colorScheme="blue"
        size="lg"
        mr={4}
      />
      <IconButton
        aria-label="GitHub"
        icon={<FaGithub />}
        variant="ghost"
        color="#465973"
        size="lg"
        mr={4}
      />
      <IconButton
        aria-label="Mail"
        icon={<FaEnvelope />}
        variant="ghost"
        color="#BF4F45"
        size="lg"
      />
    </Flex>
  );
};
