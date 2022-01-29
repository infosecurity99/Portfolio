import React ,{useState} from 'react';
import {Container, Content,
     Card,CardImg,Title,Kategoriya,
     Price, OtherName,Deleted,
     EditedImg,DeletedImg,
     Edited}  from './style'

     import deleted from '../../../assets/imgs/deleted.png'
     import pencil from '../../../assets/imgs/pencil.png'

     
const Filiallar1 = () => {

  return(
      <Container>
             <Content>

                  <Card>
                       <Title>Shaxrishton</Title>
                       <Kategoriya>Maksim Gorgiy</Kategoriya>
                       <Price>Metro ro’parasida</Price>
                       <OtherName>09:00 - 20:00</OtherName>

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

export default Filiallar1;
