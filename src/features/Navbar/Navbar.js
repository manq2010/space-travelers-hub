import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Logo/Logo';

const NavBar = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
height: 5rem;
align-items: center;
border-bottom: 1px solid gray
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
  font-family: "Montserrat",sans-serif;
  font-size: .813rem;
  letter-spacing: 1.9px;
  margin-right: 5rem;
`;

const MenuLI = styled.li`
  font-weight: bold;
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

  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'bold',
    color: isActive ? 'white' : 'rgb(4, 118, 248)',
    backgroundColor: isActive ? 'rgb(4, 118, 248)' : 'white',
    padding: isActive ? '0.5rem' : '0',
    borderRadius: isActive ? '0.2rem' : '0',
  });

  return (
    <>
      <NavBar>
        <Logo />
        <MenuNavUL>
          {links.map((link) => (
            <MenuLI key={link.id} aria-hidden="true">
              <NavLink style={navLinkStyles} data-testid={link.text} to={link.path}>
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
