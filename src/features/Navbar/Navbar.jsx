import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../Logo/Logo';
// import Footer from '../Footer/Footer';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/mission',
      text: 'Mission',
    },
    {
      id: 3,
      path: '/myprofile',
      text: 'My Profile',
    },
  ];

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <nav>
        <button type="button" onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: '#fff', width: '30px', height: '30px' }} />
          ) : (
            <FiMenu style={{ color: '#7b7b7b', width: '30px', height: '30px' }} />
          )}
        </button>
        <ul className={`${navbarOpen ? 'showMenu' : ''}`}>
          <Logo />
          {links.map((link) => (
            <li key={link.id} onClick={() => closeMenu()} aria-hidden="true">
              <NavLink data-testid={link.text} to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Navbar;