import React, { useState } from "react";
import { Logo } from "../component/Logo";
import { MenuLinks } from "../component/MenuLinks";
import { MenuToggle } from "../component/MenuToggle";
import { NavBarContainer } from "../component/NavBarContainer";


export const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle: React.MouseEventHandler<HTMLDivElement> = (): void =>
    setIsOpen(!isOpen);

  return (
    <>
      <NavBarContainer>
        <Logo
          w="100px"
          color={["white", "white", "primary.500", "primary.500"]}
        />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavBarContainer>
    </>
  );
};
