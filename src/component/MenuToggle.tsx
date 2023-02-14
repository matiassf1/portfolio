import React from "react"
import {SlClose, SlMenu} from 'react-icons/sl'
import { Box } from "@chakra-ui/react"

interface IMenuToggle {
    toggle: React.MouseEventHandler<HTMLDivElement>;
    isOpen: boolean;
}

export const MenuToggle: React.FunctionComponent<IMenuToggle> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none"}} cursor='pointer' onClick={toggle} style={{ padding: '8px' }} fontSize='15px' _hover={{ fontSize: '20px' }}>
      {isOpen ? <SlClose color="#F24B4B" /> : <SlMenu color="#F24B4B" />}
    </Box>
  )
}