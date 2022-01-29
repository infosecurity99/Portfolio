import React from 'react';
import {Container ,Content,List,Line} from './style'
const MijozlarNomi = () => {
  return <Container>
         <Content>
              <List  style={{marginRight:'186px' ,marginLeft:'76px'}}>Mijoz ismi</List>
                  <Line></Line>
              <List style={{marginRight:'133.5px'}}>Telefon raqam</List>
                  <Line></Line>
              <List style={{marginRight:'92.5px'}}>Buyurtmalar soni</List>
                   <Line></Line>
              <List style={{marginRight:'119px'}}>Status</List>
                  <Line></Line>
              <List>ACTION</List>
         </Content>
  </Container>
};

export default MijozlarNomi;
