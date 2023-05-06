import React, { useState, MouseEvent } from 'react';
import { NavBarContainer, Logo, MenuToggle, MenuLinks, ToggleColorMode} from '../component/navbar';
import { Box } from '@chakra-ui/react';

interface INavBar {
}


export const NavBar: React.FC<INavBar> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle: React.MouseEventHandler<HTMLDivElement> = (): void =>
    setIsOpen(!isOpen);

  return (
    <>
      <NavBarContainer>
        <Logo
          w="100px"
          color={"#F26D6D"}
        />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
        <ToggleColorMode />
      </NavBarContainer>
    </>
  );
};

