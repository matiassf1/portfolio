import { Flex, useColorMode } from "@chakra-ui/react";

interface INavBarContainer {
    children: any;
}


export const NavBarContainer: React.FunctionComponent<INavBarContainer> = ({ children, ...props }) => {
  const {colorMode, toggleColorMode} = useColorMode();

    return (
      <Flex
        as="nav"
        align="center"
        position='fixed'
        top='0'
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={7}
        pb={3}
        bg={colorMode === 'dark' ? '#253659' : 'white'}
        zIndex={3}
        color={["blackAlpha.700", "blackAlpha.700", "#F26D6D", "#F26D6D"]}
        {...props}
      >
        {children}
      </Flex>
    )
  }