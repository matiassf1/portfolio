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

import { AboutMeHome, CarrouselHeader } from "./components";

import "../../styles/ssvg.css";

interface IHomePage {}

export const HomePage: React.FunctionComponent<IHomePage> = () => {
  return (
    <Box
      rounded={"lg"}
      display="flex"
      flexDirection="column"
      style={{ userSelect: "none" }}
      scrollSnapAlign={"center"}
      h="100vh"
      w="full"
    >
      <Flex
        minWidth="max-content"
        alignItems="center"
        justify="center"
        gap={["1", "2", "5"]}
        marginTop="25vh"
        direction={"row"}
        id="home"
      >
        <Image
          borderTopLeftRadius={"60%"}
          borderTopRightRadius={"none"}
          borderBottomRightRadius={`60%`}
          borderBottomLeftRadius={"none"}
          boxSize={["100px", "150px", "230px"]}
          src="https://imgs.search.brave.com/OxBAGMx5Fg9P5Ij3xFH2BI4DiwSoONbbOiWxZCwJeko/rs:fit:900:600:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy1tZWRpdW0t/bGFyZ2UtNS9icmlk/Z2Utb2YtYm9hdHMt/YXQtc2F3YS1ob2t1/c2FpLWthdGFzdXNo/aWthLmpwZw"
          alt="Image.jpg"
        />

        <Box w="24%">
          <CarrouselHeader />
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
        marginTop={["120px", "120px", "60px", "60px"]}
        marginBottom={0}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        margin={"auto"}
        w={["80%", "60%", "40%", "30%"]}
        gap={[9, 5, 5, 5]}
      >
        <Text
          marginTop={["30px", 0, 0, 0]}
          rounded={"2xl"}
          w={["90%", "90%", "85%", "80%"]}
          backgroundColor={"#ec5555"}
          color={"white"}
          align={"center"}
        >
          Explore my portfolio
        </Text>

        <Box w={["62px", "30px", "62px"]}>
          <a href="#about-home">
            <svg style={{ width: "100px", cursor: "pointer" }}>
              <path className="arrow-path a1" d="M0 0 L30 32 L60 0"></path>
              <path className="arrow-path a2" d="M0 20 L30 52 L60 20"></path>
              <path className="arrow-path a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </a>
        </Box>
      </Flex>

      <Box
        rounded={["xl", "2xl", "2xl"]}
        boxShadow={["dark-lg", "dark-lg", "dark-lg"]}
        margin={"auto"}
        w={{ base: "95%", md: "90%" }}
        marginTop={"20px"}
      >
        <Box>
          <AboutMeHome />
        </Box>

        <Box id="projects">
          <Heading textAlign={"center"}>Projects</Heading>
        </Box>
      </Box>
    </Box>
  );
};
