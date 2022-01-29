import React ,{useState} from 'react';
import {Container,
    Content,Card,ActiveS
     ,CardImg,Title, ActivImg,
     Kategoriya,Price,
     OtherName,Deleted,EditedImg,DeletedImg,
     Edited}  from './style'

     import deleted from '../../../assets/imgs/deleted.png'
     import pencil from '../../../assets/imgs/pencil.png'
     import activ from  '../../../assets/imgs/activ.png'

     
const Mijozlar1 = () => {

  return(
      <Container>
             <Content>
                  <Card>
                       <Title>Dina Glenn</Title>
                       <Kategoriya>(+99 893) 461-41-88</Kategoriya>
                       <Price>3</Price>
                       <OtherName>Aktiv</OtherName>
                         
                          <ActiveS>
                              <ActivImg  src={activ} />
                          </ActiveS>
                         <Edited>
                              <EditedImg  src={pencil}/>
                         </Edited>

                         <Deleted>
                              <DeletedImg  src={deleted}/>
                         </Deleted>

                  </Card>

                  <Card>
                  <Title>Dina Glenn</Title>
                  <Kategoriya>(+99 893) 461-41-88</Kategoriya>
                  <Price>3</Price>
                  <OtherName>Aktiv</OtherName>
                    
                     <ActiveS>
                         <ActivImg  src={activ} />
                     </ActiveS>
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

export default Mijozlar1;
