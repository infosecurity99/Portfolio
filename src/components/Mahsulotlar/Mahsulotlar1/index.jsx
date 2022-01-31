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
     import {mahsulotlar} from  '../../../mock/mahsulotlar'

const Mahsulotlar1 = () => {
const [daka, setdaka] = useState(mahsulotlar);

     const Deleteds=(id)=>{
          console.log(daka+"ncjksankjcnas")
      setdaka(daka.filter((value)=>value.id!==id))
     }
     
  return(
      <Container>
             <Content>
                {
                daka.map((value)=>{
                     return (
                         <Card key={value.id}>
                         <CardImg  src={apple}/>
                         <Title>{value.title}</Title>
                         <Kategoriya>{value.kategoriya}</Kategoriya>
                         <Price>{value.price}</Price>
                         <OtherName>{value.othername}</OtherName>
  
                           <Edited style={{marginLeft:"60px"}}>
                                <EditedImg  src={pencil}/>
                           </Edited>
  
                           <Deleted onClick={()=>Deleteds(value.id)}>
                                <DeletedImg  src={deleted}/>
                           </Deleted>
                    </Card>
                     )
                })
                }


             </Content>

      </Container>
  )
};

export default Mahsulotlar1;
