import { Flex } from "@chakra-ui/react";
import { ReactJSXElement, ReactJSXElementAttributesProperty } from "@emotion/react/types/jsx-namespace"


interface INavBarContainer {
    children: any;
}


export const NavBarContainer: React.FunctionComponent<INavBarContainer> = ({ children, ...props }) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={8}
        bg={["blue.700", "blue.700", "transparent", "transparent"]}
        color={["blackAlpha.700", "blackAlpha.700", "blue.700", "blue.700"]}
        {...props}
      >
        {children}
      </Flex>
    )
  }