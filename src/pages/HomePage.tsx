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
import { Projects } from "./Projects";
import SaitamaCard from "../component/SaitamaCard";
import { MyStack } from "../component/MyStack";
import { RuletHeading } from "../component/RuletHeading";

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
        boxShadow="dark-lg"
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

        <Text marginTop={20} align={"center"}>
          Explore my portfolio
        </Text>
      </Box>

      <ScaleFade initialScale={0.9} in={enterCount > 0}>
        <Box rounded={"2xl"} boxShadow={"dark-lg "} margin={5}>
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
