import { Flex } from "@chakra-ui/react";

interface INavBarContainer {
    children: any;
}


export const NavBarContainer: React.FunctionComponent<INavBarContainer> = ({ children, ...props }) => {
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
        bg={'white'}
        zIndex={3}
        color={["blackAlpha.700", "blackAlpha.700", "#F26D6D", "#F26D6D"]}
        {...props}
      >
        {children}
      </Flex>
    )
  }