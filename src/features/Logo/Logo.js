import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="logo" onClick={() => navigate('/')} aria-hidden="true">
        <img src="https://cdn-icons-png.flaticon.com/512/3212/3212567.png" alt="logo" />
      </h1>
    </>
  );
};

export default Logo;
