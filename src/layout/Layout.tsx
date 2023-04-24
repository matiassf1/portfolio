import React from 'react'
import { NavBar } from './NavBar';
import { Footer } from './Footer';

interface ILayout {
  children: React.ReactNode;
}

export const Layout: React.FunctionComponent<ILayout> = ({children}) => {
  return (
    <>
        <NavBar />
        {children}
        <Footer/>
    </>
  )
}
