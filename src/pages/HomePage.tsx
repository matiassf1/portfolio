import {
  Box,
  Flex,
  Heading,
  Image,
  Code,
  Stack,
  ScaleFade,
  theme,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { Outlet, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

import { MyStack, SaitamaCard, RuletHeading } from "../component";

import "../styles/ssvg.css";

interface IHomePage {}

export const HomePage: React.FunctionComponent<IHomePage> = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const { inViewport, enterCount } = useInViewport(
    ref,
    { rootMargin: "-200px" },
    { disconnectOnLeave: false },
    {}
  );
  console.log();

  return (
    <>
      <Box
        rounded={"lg"}
        display="flex"
        flexDirection="column"
        style={{ userSelect: "none" }}
        scrollSnapAlign={"center"}
        h="100vh"
        w="full"
      >
        <Outlet />

        <Flex
          minWidth="max-content"
          alignItems="center"
          justify="center"
          gap={["1", "2", "5"]}
          marginTop="25vh"
          direction={"row"}
        >
          <Image
            borderTopLeftRadius={"60%"}
            borderTopRightRadius={"none"}
            borderBottomRightRadius={`60%`}
            borderBottomLeftRadius={"none"}
            boxSize={["100px", "150px", "230px"]}
            objectFit="cover"
            src="https://imgs.search.brave.com/OxBAGMx5Fg9P5Ij3xFH2BI4DiwSoONbbOiWxZCwJeko/rs:fit:900:600:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy1tZWRpdW0t/bGFyZ2UtNS9icmlk/Z2Utb2YtYm9hdHMt/YXQtc2F3YS1ob2t1/c2FpLWthdGFzdXNo/aWthLmpwZw"
            alt="Image.jpg"
          />
          {/* <Heading fontSize={["17px", "22px", "34px", "40px"]}>
            Front-End Developer
          </Heading> */}

          <Box w="24%">
            <RuletHeading />
          </Box>
        </Flex>

        <Stack
          direction={["column", "row"]}
          justify="center"
          padding="20px"
          mt={["15px", "20px", "35px"]}
        >
          <Code
            colorScheme="tertiary"
            textColor={"white"}
            children="console.log(welcome!!)"
          />
          <Code
            colorScheme="secondary"
            textColor={"white"}
            children="const myFullName = 'Sfer Matias Gabriel'"
          />
          <Code
            colorScheme="primary"
            textColor={"white"}
            children="yarn add good-vibes@latest"
          />
        </Stack>

        <Flex
          marginTop={["120px","120px", "60px", "60px"]}
          marginBottom={0}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
          p={2}
          w={["80%", "60%", "40%", "30%"]}
          gap={[9,5,5,5]}
        >
          <Text
            marginTop={['30px',0,0,0]}
            p={0.7}
            rounded={"2xl"}
            w={['90%','90%','85%','80%']}
            backgroundColor={"#ec5555"}
            color={"white"}
            align={"center"}
          >
            Explore my portfolio
          </Text>

          <Box w={['62px','30px','62px']}>
            <svg style= {{width:'100px'}}
             onClick={() => console.log("clicked")}>
              <path className="arrow-path a1" d="M0 0 L30 32 L60 0"></path>
              <path className="arrow-path a2" d="M0 20 L30 52 L60 20"></path>
              <path className="arrow-path a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </Box>
        </Flex>
      </Box>

      <ScaleFade initialScale={0.9} in={enterCount > 0}>
        <Box rounded={["sm","xl","2xl","2xl"]} boxShadow={["dark-lg","dark-lg","dark-lg"]} marginTop={'20px'} margin={["0","5","5"]}>
          <Heading padding={20} textAlign={"center"}>
            About me
          </Heading>

          <Box
            w="full"
            ref={ref}
            bgColor="white"
            scrollSnapAlign={"center"}
            display="flex"
            gap={["12", "23", "10", "20"]}
            alignItems={"center"}
            justifyContent="space-evenly"
            flexDirection={["column", "column", "row", "row"]}
          >
            <SaitamaCard />
            <MyStack />
          </Box>
        </Box>
      </ScaleFade>
    </>
  );
};
