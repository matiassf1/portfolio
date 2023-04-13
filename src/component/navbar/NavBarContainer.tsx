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
        position='fixed'
        top='0'
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={7}
        pb={3}
        bg={'white'}
        color={["blackAlpha.700", "blackAlpha.700", "#F26D6D", "#F26D6D"]}
        {...props}
      >
        {children}
      </Flex>
    )
  }