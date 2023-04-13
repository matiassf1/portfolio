import React, { useState } from "react";
import { Logo } from "../component/navbar/Logo";
import { MenuLinks } from "../component/navbar/MenuLinks";
import { MenuToggle } from "../component/navbar/MenuToggle";
import { NavBarContainer } from "../component/navbar/NavBarContainer";


export const NavBar = () => {
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
    </>
  );
};
