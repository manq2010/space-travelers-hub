import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  margin-top: 10rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NotFound = () => (
  <NotFoundContainer>
    <h3>404!</h3>
    <p>
      Oops Page
      {' '}
      <em>Not</em>
      {' '}
      Found!
    </p>
    <Link to="/">Back to home</Link>
  </NotFoundContainer>
);

export default NotFound;
