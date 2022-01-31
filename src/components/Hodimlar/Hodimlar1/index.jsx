import React ,{useState} from 'react';
import {Container,
    Content,Card
     ,CardImg,Title,
     Kategoriya,Price,
     OtherName,Deleted,EditedImg,DeletedImg,
     Edited}  from './style'

     import deleted from '../../../assets/imgs/deleted.png'
     import pencil from '../../../assets/imgs/pencil.png'

     
const Hodimlar1 = () => {

  return(
      <Container>
             <Content>

                  <Card>
                       <Title>Burger uz</Title>
                       <Kategoriya>Burger ru</Kategoriya>
                       <OtherName>Ichimliklar</OtherName>

                         <Edited>
                              <EditedImg  src={pencil}/>
                         </Edited>

                         <Deleted>
                              <DeletedImg  src={deleted}/>
                         </Deleted>

                  </Card>

             </Content>

      </Container>
  )
};

export default Hodimlar1;
