import React, { useState, MouseEvent } from 'react';
import { NavBarContainer, Logo, MenuToggle, MenuLinks, ToggleColorMode} from '../component/navbar';
import { Box, useColorMode } from '@chakra-ui/react';

interface INavBar {
}


export const NavBar: React.FC<INavBar> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const toggle: React.MouseEventHandler<HTMLDivElement> = (): void => setIsOpen(!isOpen);

  return (
    <>
      <NavBarContainer>
        <Logo
          w="100px"
          color={colorMode === 'dark' ? '#DEEFE7' : '#F26D6D'}
        />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
        <ToggleColorMode isOpen={isOpen} />
      </NavBarContainer>
    </>
  );
};

