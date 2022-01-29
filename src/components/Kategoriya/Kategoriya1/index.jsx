import React ,{useState} from 'react';
import {Container,
    Content,Card
     ,CardImg,Title,
     Kategoriya,Price,
     OtherName,Deleted,EditedImg,DeletedImg,
     Edited}  from './style'

     import apple from '../../../assets/imgs/apple.png'
     import deleted from '../../../assets/imgs/deleted.png'
     import pencil from '../../../assets/imgs/pencil.png'

     
const Kategoriya1 = () => {

  return(
      <Container>
             <Content>

                  <Card>
                       <CardImg  src={apple}/>
                       <Title>Lavash mini</Title>
                       <Kategoriya>Lavash</Kategoriya>
                       <Price>18,000 UZS</Price>
                       <OtherName>Kichkina lavash, bla bla</OtherName>

                         <Edited>
                              <EditedImg  src={pencil}/>
                         </Edited>

                         <Deleted>
                              <DeletedImg  src={deleted}/>
                         </Deleted>

                  </Card>

                                    <Card>
                       <CardImg  src={apple}/>
                       <Title>Lavash mini</Title>
                       <Kategoriya>Lavash</Kategoriya>
                       <Price>18,000 UZS</Price>
                       <OtherName>Kichkina lavash, bla bla</OtherName>

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

export default Kategoriya1;
