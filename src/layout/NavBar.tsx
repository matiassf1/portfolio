import React, { useState, MouseEvent } from 'react';
import { NavBarContainer, Logo, MenuToggle, MenuLinks } from '../component/navbar';
import { Outlet } from 'react-router-dom';

interface INavBar {
  children: React.ReactNode;
}


export const NavBar: React.FC<INavBar> = ({ children }) => {
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
      </NavBarContainer>
      {children}
    </>
  );
};

