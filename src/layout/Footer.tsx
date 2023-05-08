import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Flex, IconButton, Link } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const Footer = () => {
  const [footerHide, setshowingFooter] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowingFooter(false);
    }, 1500);
  }, []);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      py={4}
      mt="30px"
      mb="40px"
      hidden={footerHide}
    >
      <Link target="__blank" href="">
        <IconButton
          aria-label="Instagram"
          icon={<FaInstagram />}
          variant="ghost"
          color="#BF4F45"
          backgroundColor="#987cb"
          size="lg"
          rounded="lg"
          mr={4}
        />
      </Link>
      <Link target="__blank" href="https://www.linkedin.com/in/sfer-matias/">
        <IconButton
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          variant="ghost"
          colorScheme="blue"
          rounded="lg"
          size="lg"
          mr={4}
        />
      </Link>
      <Link target="__blank" href="https://github.com/matiassf1">
        <IconButton
          aria-label="GitHub"
          icon={<FaGithub />}
          variant="ghost"
          color="#465973"
          rounded="lg"
          size="lg"
          mr={4}
        />
      </Link>
      <Link target="__blank" href="">
        <IconButton
          aria-label="Mail" 
          icon={<FaEnvelope />}
          variant="ghost"
          color="#BF4F45"
          rounded="lg"
          size="lg"
        />
      </Link>
    </Flex>
  );
};
