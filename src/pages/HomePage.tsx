import {
  Box,
  Flex,
  Heading,
  Image,
  Code,
  Stack,
  ScaleFade,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "../ui/NavBar";
import { Projects } from "./Projects";
import SaitamaCard from "../component/SaitamaCard";
import { MyStack } from "../component/MyStack";

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

  return (
    <>
      <Box
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
            borderTopLeftRadius={["full", "full", "full", "full"]}
            borderTopRightRadius={["none", "none", "none", "none"]}
            borderBottomRightRadius={["full", "full", "full", "full"]}
            borderBottomLeftRadius={["none", "none", "none", "none"]}
            boxSize={["100px", "150px", "230px"]}
            objectFit="cover"
            src="https://imgs.search.brave.com/OxBAGMx5Fg9P5Ij3xFH2BI4DiwSoONbbOiWxZCwJeko/rs:fit:900:600:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy1tZWRpdW0t/bGFyZ2UtNS9icmlk/Z2Utb2YtYm9hdHMt/YXQtc2F3YS1ob2t1/c2FpLWthdGFzdXNo/aWthLmpwZw"
            alt="Image.jpg"
          />
          <Heading fontSize={["17px", "22px", "34px", "40px"]}>
            Front-End Developer
          </Heading>
        </Flex>

        <Stack
          direction={["column", "row"]}
          justify="center"
          padding="20px"
          mt={["15px", "20px", "35px"]}
        >
          <Code
            colorScheme="terciary"
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
      </Box>

      <ScaleFade initialScale={0.9} in={enterCount > 0}>
        <Box
          h="100vh"
          w="full"
          ref={ref}
          bgColor="#1B1F26"
          scrollSnapAlign={"center"}
          display="flex"
          gap={'20'}
          alignItems={"center"}
          justifyContent="space-evenly"
          flexDirection={"row"}
        >
          <SaitamaCard />
          <MyStack />
        </Box>
      </ScaleFade>
    </>
  );
};
