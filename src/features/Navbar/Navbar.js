import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
// import Footer from '../Footer/Footer';

// const Button = styled.button`
//   display: block;
//   width: fit-content;
//   margin: 1rem 0 1rem 4%;
//   cursor: pointer;
//   z-index: 2;
//   color: #3fffd2;

// @media (min-width: 768px) {
//   display: none;
// }
// `;

const NavBar = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-around;
height: 10rem;
align-items: center;
`;

const MenuNavUL = styled.ul`
  list-style: none;
  position: relative;
  color: #121212;
    display: flex;
    gap: 1rem;
    margin-top: 0;
    align-items: center;
    justify-content: space-between;
    height: 2.5rem;
    opacity: .5;
    font-family: "Montserrat",sans-serif;
    font-size: .813rem;
    color: #121212;
    letter-spacing: 1.9px;

`;

const MenuLI = styled.li`
  // margin: 1.5rem 0 1rem 1rem;
  // text-transform: uppercase;
  font-weight: bold;
  color: #000;
  a:link {
    text-decoration: none;
  }
`;

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/myprofile',
      text: 'My Profile',
    },
  ];
  return (
    <>
      <NavBar>
        <Logo />
        <MenuNavUL>
          {links.map((link) => (
            <MenuLI key={link.id} aria-hidden="true">
              <NavLink data-testid={link.text} to={link.path}>
                {link.text}
              </NavLink>
            </MenuLI>
          ))}
        </MenuNavUL>
      </NavBar>
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Navbar;
