import React from 'react';
import {Container ,Content,List,Line} from './style'
const HodimlarNomi = () => {
  return <Container>
         <Content>
              <List  style={{marginRight:'186px' ,marginLeft:'76px'}}>Hodimlar (UZ)</List>
                  <Line></Line>
              <List style={{marginRight:'166.5px'}}>Hodimlar (Ru)</List>
                  <Line></Line>
              <List style={{marginRight:'187.5px'}}>Bosh Hodimlar</List>
                  <Line></Line>
              <List>ACTION</List>
         </Content>
  </Container>
};

export default HodimlarNomi;
