import React from 'react';
import { Container, Wrapper } from './style';
import Card from '../../ProductCardV';
import { Buyurtma } from '../../../context/buyurtmalar';

export const Body = () => {
  const [card] = Buyurtma();
  return (
    <Container>
      <Wrapper>
        {card.yangi.map((value,index) => (
          <Card key={index} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.qabul.map((value,index) => (
          <Card key={index} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.jonatilgan.map((value,index) => (
          <Card key={index} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.yopilgan.map((value,index) => (
          <Card key={index} value={value} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Body;
