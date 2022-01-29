import React, { useState } from 'react';
import {
  Add,Content,Cards,
  Header,ContentLeft,
  MenuH,LeftTitle,CardImg,
  MenuV,CardWrapper,
  Tab,ContentRight,
  Toggle,ContentLefterTab,
  Wrapper,ContentLefterTabs,
  IconWrapper,
} from './style';
import { Drawer, Button, Space } from 'antd';
export const Navbar = ({ onClick }) => {
/**************************** */
const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();
  const showLargeDrawer = () => {
    setSize('large');
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const [actives, setActives] = useState('Burger');
/********************************* */
  const [isActive, setIsActive] = useState('Yangi');
  const [on, setOn] = useState(true);
import Bitmap from '../../../assets/imgs/Bitmap.png'
  return (
    <Header>
      {/* 1 */}
      <Wrapper order='1'>
        <Add.Plus onClick={showLargeDrawer} />
        <Add.Title>Yangi buyurtma <span style={{display:'block',fontWeight:'bold'}}>qo'shish</span></Add.Title>
        <Toggle toggle>
          <IconWrapper active={on} onClick={() => setOn(true)}>
            <MenuH active={on} />
          </IconWrapper>
          <IconWrapper active={!on} onClick={() => setOn(false)}>
            <MenuV active={!on} />
          </IconWrapper>
        </Toggle>
      </Wrapper>
      {/* 2 */}
      <Wrapper center order='2'>
        <Tab>
          <Tab.Item
            active={'Yangi' === isActive}
            onClick={() => setIsActive('Yangi')}
          >
            Yangi
          </Tab.Item>
          <Tab.Item
            active={'Qabul' === isActive}
            onClick={() => setIsActive('Qabul')}
          >
            Qabul qilingan
          </Tab.Item>
          <Tab.Item
            active={'Jonatilgan' === isActive}
            onClick={() => setIsActive('Jonatilgan')}
          >
            Jo'natilgan
          </Tab.Item>
          <Tab.Item
            active={'Yopilgan' === isActive}
            onClick={() => setIsActive('Yopilgan')}
          >
            Yopilgan
          </Tab.Item>
        </Tab>
      </Wrapper>
      {/* 3 */}
      <Wrapper order='3'>
        <Toggle>
          <IconWrapper
            active={on}
            onClick={() => {
              onClick(true);
              setOn(true);
            }}
          >
            <MenuH active={on} />
          </IconWrapper>
          <IconWrapper
            active={!on}
            onClick={() => {
              onClick(false);
              setOn(false);
            }}
          >
            <MenuV active={!on} />
          </IconWrapper>
        </Toggle>
      </Wrapper>


      {/***************************************/}

      <Drawer
     width="1039px"
      headerStyle={{display:'none'}}
      title={`${size} Drawer`}
      placement="right"
      size={size}
      onClose={onClose}
      visible={visible}
      extra={
        <Space>
  
          <Button type="primary" onClick={onClose}>
            OK
          </Button>
        </Space> }  >
      <Content>
         <ContentLeft>
              <LeftTitle>Yangi buyurtma qo’shish</LeftTitle>

                <ContentLefterTabs>
                     <ContentLefterTab  active1={'Burger' === actives} onClick={()=>setActives('Burger')} >Burger</ContentLefterTab>
                     <ContentLefterTab active1={'Lavash' === actives}   onClick={()=>setActives('Lavash')}>Lavash</ContentLefterTab>
                     <ContentLefterTab active1={'Garniyer' === actives}  onClick={()=>setActives('Garniyer')}>Garniyer</ContentLefterTab>
                     <ContentLefterTab active1={'Salatlar' === actives} onClick={()=>setActives('Salatlar')}>Salatlar</ContentLefterTab>
                     <ContentLefterTab  active1={'Ichimliklar' === actives} onClick={()=>setActives('Ichimliklar')}>Ichimliklar</ContentLefterTab>
                     <ContentLefterTab active1={'Sous' === actives} onClick={()=>setActives('Sous')}>Sous</ContentLefterTab>
                </ContentLefterTabs>

                <CardWrapper>
                     <Cards>
                        <CardImg  src={Bitmap}/>
                     </Cards>
                     <Cards> </Cards>
                     <Cards> </Cards>
                </CardWrapper>
                
         </ContentLeft>

         <ContentRight>

         </ContentRight>
      </Content>
    </Drawer>


    </Header>
  );
};

export default Navbar;
