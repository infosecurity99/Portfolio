import React from 'react';
import { Container, Wrapper } from './style';
import Card from '../../ProductCardH';
import { card } from '../../../mock/card';

export const Body = () => {
  return (
    <Container>
      {card.yangi.map((value,index) => (
        <Card  key={index} value={value} />
      ))}
    </Container>
  );
};

export default Body;
