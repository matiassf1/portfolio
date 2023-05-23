import React from "react"
import {SlClose, SlMenu} from 'react-icons/sl'
import { Box, useColorMode } from "@chakra-ui/react"

interface IMenuToggle {
    toggle: React.MouseEventHandler<HTMLDivElement>;
    isOpen: boolean;
}

export const MenuToggle: React.FunctionComponent<IMenuToggle> = ({ toggle, isOpen }) => {
  const {colorMode} = useColorMode();
  const close = <SlMenu color="#C45606" />
  const open = <SlClose color="#C45606" />
  return (
    <Box display={{ base: "block", md: "none"}} cursor='pointer' onClick={toggle} style={{ padding: '8px' }} fontSize='15px' _hover={{ fontSize: '20px' }}>
      {isOpen ? open : close }
    </Box>
  )
}