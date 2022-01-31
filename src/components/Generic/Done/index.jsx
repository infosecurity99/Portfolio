import React from 'react';
import { Container, Done } from './style';

export const Index = ({ onClick }) => {
  return (
    <Container>
      <Done   onClick={onClick}/>
    </Container>
  );
};

export default Index;
