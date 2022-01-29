import React from 'react';
import {Container ,Content,List,Line} from './style'
const KategoriyaNomi = () => {
  return <Container>
         <Content>
              <List  style={{marginRight:'186px' ,marginLeft:'76px'}}>Kategoriya (UZ)</List>
                  <Line></Line>
              <List style={{marginRight:'166.5px'}}>Kategoriya (Ru)</List>
                  <Line></Line>
              <List style={{marginRight:'187.5px'}}>Bosh kategoriya</List>
                  <Line></Line>
              <List>ACTION</List>
         </Content>
  </Container>
};

export default KategoriyaNomi;
