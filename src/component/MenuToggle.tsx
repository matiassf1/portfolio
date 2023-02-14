import React from "react"
import {SlClose, SlMenu} from 'react-icons/sl'
import { Box } from "@chakra-ui/react"

interface IMenuToggle {
    toggle: React.MouseEventHandler<HTMLDivElement>;
    isOpen: boolean;
}

export const MenuToggle: React.FunctionComponent<IMenuToggle> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none"}} cursor='pointer' onClick={toggle}  _hover={{ fontSize: '15px' }}>
      {false ? <SlClose /> : <SlMenu color="white" />}
    </Box>
  )
}