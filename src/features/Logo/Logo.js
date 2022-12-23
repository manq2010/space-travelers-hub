import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LogoContainer = styled.h1`
  display: flex;
  font-family: "Montserrat",sans-serif;
  color: rgb(4, 118, 248);

@media (min-width: 768px) {
    display: flex;
}
`;

const LogoImage = styled.img`
  height: 4rem;
  width: 4rem;
  align-items: center;
  margin-left: 1rem;
`;

const LogoText = styled.h3`
display: none;
font-size: 1.5rem;
padding-left: 1rem;
justify-content: center;
align-items: center;

@media (min-width: 768px) {
  display: flex;
}

`;

const Logo = () => {
  const navigate = useNavigate();
  return (
    <>
      <LogoContainer
        onClick={() => navigate('/')}
        aria-hidden="true"
      >
        <LogoImage src="https://cdn-icons-png.flaticon.com/512/3212/3212567.png" alt="logo" />
        <LogoText>
          Space Travelers&apos; Hub
        </LogoText>
      </LogoContainer>
    </>
  );
};

export default Logo;
