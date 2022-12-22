import { Box, Button, ButtonGroup, Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import { NavBar } from "./ui/NavBar";

interface IHomePage {}

export const HomePage: React.FunctionComponent<IHomePage> = () => {
  return (
    <Box display="flex" flexDirection='column' fontFamily={"monospace"}>
      <NavBar />

      <Flex
        minWidth="max-content"
        alignItems="center"
        justify="center"
        gap="5"
        marginTop="5"
      >
        <Image
          borderRadius="full"
          boxSize="250px"
          src="https://imgs.search.brave.com/ysTzsnlRAsb24nvV4Oy6voS7IauninuVsgXnh1xB5Cs/rs:fit:474:285:1/g:ce/aHR0cHM6Ly9mY2Jh/cmNlbG9uYS5teC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8x/Mi81MzQ0Ni9qdWxp/YW4tYWx2YXJlei1m/dWUtb2ZyZWNpZG8t/YWwtYmFyY2EtYXll/ci1kZS1xdWUtZmlj/aGFyYS1wb3ItZWwt/Y2l0eS03ODB4NDcw/LmpwZWc"
          alt="Dan Abramov"
        />
        <Heading>Front-End Developer</Heading>
      </Flex>
    </Box>
  );
};
