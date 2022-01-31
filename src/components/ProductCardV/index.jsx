import React,{useState} from 'react';
import Done from '../Generic/Done';
import Cancel from '../Generic/Cancel';
import { Container, Footer, Diskret,IconWrapper,Texts,Dispatched4,Dispatched1,Dispatched3Right, Dispatched3Left,Dispatched3,Info, Timer, Wrapper,Dispatched ,Dispatched2,Dispatched2Left,Dispatched2Right} from './style';
import { Buyurtma } from '../../context/buyurtmalar';
import 'antd/dist/antd.css';
import { Drawer } from 'antd';
import clipboard from '../../assets/imgs/clipboard.png'
import trunk from '../../assets/imgs/truck.png'
export const ProductCard = ({ value }) => {

/**** */
const [visible, setVisible] = useState(false);

const showDrawer = () => {
  setVisible(true);
};

const onClose = () => {
  setVisible(false);
};
/************ */

  const [card, setCard] = Buyurtma();
  const onCancel = (value) => {
    let newData = card[value.categoria].filter((e) => e.id !== value.id);
    setCard({ ...card, [value.categoria]: newData });
    console.log(newData);
  };
  return (
    <Container>

      <Wrapper>
        <Info.OrderID>{value?.orderId || 'Not'}</Info.OrderID>
        <IconWrapper>
          <Info.Save />
        </IconWrapper>
        <Timer>
          <Info.Clock />
          <Info.Text>
            {`${value?.time.getHours() || 'h'}: ${
              value?.time.getMinutes() || 'm'
            }`}
          </Info.Text>
        </Timer>
      </Wrapper>

      <Wrapper flex>
        <Info>
          <Info.User />
          <div>
            <Info.Name>{value?.user?.name || 'Not Available'}</Info.Name>
            <Info.Nuber>{value?.user?.phone || 'Not Available'}</Info.Nuber>
          </div>
        </Info>
        <Info center>
          <div>
            <Info.Total top>Umumiy Summa</Info.Total>
            <Info.Price>{value?.total || 'Not Available'} UZS</Info.Price>
          </div>
          <Info end={'true'}>
            <Info.PaymeIcon />
            <Info.Payme>Payme</Info.Payme>
          </Info>
        </Info>
      </Wrapper>

      <Wrapper flex last>

        <Footer>
          <div>
            <Info.Total>Operator</Info.Total>
            <Info.Name>{value?.operator?.name || 'Not Available'}</Info.Name>
          </div>
          <Cancel onClick={() => onCancel(value)} />
        </Footer>

        <Footer>
          <div>
            <Info.Total>Filiall</Info.Total>
            <Info.Name>{value?.filial?.title || 'Not Available'} <br />{' '} </Info.Name>
          </div>
          <Done  onClick={showDrawer}/>
        </Footer>

      </Wrapper>

      <Drawer headerStyle={{display:"none" ,paddingTop:"0px"}} title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
          <Wrapper last>
                <Info.OrderID>{value?.orderId || 'Not'}</Info.OrderID>
                <Timer>
          <Info.Clock />
          <Info.Text>
            {`${value?.time.getHours() || 'h'}: ${
              value?.time.getMinutes() || 'm'
            }`}
          </Info.Text>
               </Timer>
        </Wrapper>

        <Wrapper flex last  >
         <Dispatched>
         <Info keraks>
         <Info.User />
         <div>
           <Info.Name>{value?.user?.name || 'Not Available'}</Info.Name>
           <Info.Nuber>{value?.user?.phone || 'Not Available'}</Info.Nuber>
         </div>
       </Info>
         </Dispatched>
       </Wrapper>
 
         <Wrapper>
           <Diskret>
            <div>
               <Info.Total>Operator</Info.Total>
               <Info.Name>{value?.operator?.name || 'Not Available'}</Info.Name>
           </div>
           <div>
              <Info.Total>Filiall</Info.Total>
              <Info.Name>{value?.filial?.title || 'Not Available'} <br />{' '} </Info.Name>
          </div>
        </Diskret>
         </Wrapper>
           
         <Wrapper  last>
           <Dispatched1>

              <Dispatched2>
                <Dispatched2Left>MAXSULOTLAR</Dispatched2Left>
                <Dispatched2Right>Soni | narxi</Dispatched2Right>
              </Dispatched2>

              <Dispatched3>
                 <Dispatched3Left>
                   <Texts>Shaurma o’rtacha</Texts>
                   <Texts>Klab sendwich</Texts>
                   <Texts>Coca-Cola 1,5</Texts>
                 </Dispatched3Left>
                <Dispatched3Right>
                   <Texts>4*15,000 UZS</Texts>
                   <Texts>2*23,000 UZS</Texts>
                   <Texts>1*9,000 UZS</Texts>
                </Dispatched3Right>
            </Dispatched3>

           </Dispatched1>
         </Wrapper>

         <Wrapper flex last styled={{marginTop:"38px"}}>
            <Dispatched4>

               <Dispatched4.Infos>

                  <Dispatched4.Con>
                      <Info.PaymeIcons  src={clipboard}/>
                      <Dispatched4.Text>115,000 UZS</Dispatched4.Text>
                  </Dispatched4.Con>

                  <Dispatched4.Con>
                         <Info.PaymeIcons  src={trunk}/>
                         <Dispatched4.Text>5,000 UZS</Dispatched4.Text>
                  </Dispatched4.Con>

               </Dispatched4.Infos>

                <Dispatched4.Infos>
                  <Dispatched4.Con></Dispatched4.Con>
                  <Dispatched4.Con  style={{marginRight:"22px"}}>
                     <Info end={'true'}>
                         <Info.PaymeIcon />
                               <Info.Payme>Payme</Info.Payme>
                             </Info>
                   </Dispatched4.Con>
               </Dispatched4.Infos>

            </Dispatched4>
        </Wrapper>

        <Wrapper last    style={{marginTop:"50px"}}>
        <Done  onClick={showDrawer}/>
       <div style={{marginLeft:"28px"}}> <Cancel onClick={() => onCancel(value)} /></div>
        </Wrapper>
      </Drawer>

    </Container>
  );
};

export default ProductCard;
