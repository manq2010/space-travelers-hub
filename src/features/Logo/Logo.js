import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LogoContainer = styled.h1`
  display: none;

  font-family: "Montserrat",sans-serif;
  color: #0290ff;
  // margin-top: 2.5rem;
  // margin-left: 4%;
  // margin-bottom: 2.5rem;
  // height: 3rem;

@media (min-width: 768px) {
    display: flex;
}
`;

const LogoImage = styled.img`
  // margin-top: 3rem;
  height: 100px;
  width: 100px;
  border: 1px red solid;
  align-items: center;
  margin-right: 0.5rem;
`;

const LogoText = styled.h3`
display: flex;
font-size: 1.2rem;
justify-content: center;
align-items: center;
border: 1px red solid;
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
