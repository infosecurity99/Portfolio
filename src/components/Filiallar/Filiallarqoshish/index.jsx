import React, { useState } from 'react';
import { Drawer,Modal  } from 'antd';
import 'antd/dist/antd.css';
import {
  Add,Titles,Ass,
  Header,Label,Inputs1,
  MenuH,Select,Option,
  MenuV,Buttons,
  Toggle,ImgDowloand,
  Wrapper,Content,Imgs3,
  IconWrapper,Form,
  Input,SortContent,
  InputWraper,Search,Sort,SortImg,Ul ,Li ,InputCkeckBox,TextLi
} from './style';
import search from '../../../assets/imgs/search.png'
import dow from '../../../assets/imgs/dow.png'


export const Filiallarqoshish= ({ onClick }) => {


  const [isActive, setIsActive] = useState('Yangi');
  const [on, setOn] = useState(true);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
//Drawer

const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  
  return (
    <Header >
 
      <Wrapper order='1'>
        <Add.Plus  onClick={showDrawer}/>
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
 
      <Wrapper center order='2' >

           <InputWraper>
                  <Input placeholder='Qidirish' />
                  <Search  src={search}/>
           </InputWraper>
         
         <Modal footer={null} headerStyle={null} width='313px' height='206px' style={{
          width:' 313px',
          height: '206px',
          boxShadow: '0px 20px 25px rgba(176, 177, 181, 0.432802)',
          borderRadius: '6px',
         }} title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               <Ul>
                    <Li><InputCkeckBox type='checkbox'/> <TextLi>Nom bo’yicha (A-Z)</TextLi></Li>
                    <Li><InputCkeckBox type='checkbox'/> <TextLi>Nom bo’yicha (Z-A)</TextLi></Li>
                    <Li><InputCkeckBox type='checkbox'/> <TextLi>Buyurtmalar soni (O’sish tartibida)</TextLi></Li>
                    <Li><InputCkeckBox type='checkbox'/> <TextLi>Buyurtmalar soni (Kamayish tartibida)</TextLi></Li>
                    <Li><InputCkeckBox type='checkbox'/> <TextLi>Blocklangan mijozlar</TextLi></Li>
                    <Li><InputCkeckBox type='checkbox'/> <TextLi>Aktiv mijozlar</TextLi></Li>
               </Ul>
          </Modal>
         
      </Wrapper>
  
        <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}
        headerStyle={{background:"red",display:'none' ,position:'relative'}}>


           <Titles>Yangi maxsulot qo’shish</Titles>

           <Form>

                <Content>
                     <Label>Maxsulot nomi</Label>
                     <Inputs1 placeholder='Chizburger' />
                </Content>
                
                <Content>
                    <Label>Kategoriya</Label>

                     <Select>
                         <Option>Burger</Option>
                         <Option>Pizza</Option> 
                     </Select>

              </Content>

              <Content>
                   <Label>Narxi</Label>
                   <Inputs1 placeholder='18,500 UZS' />
              </Content>

              <Content>
                    <Label>Qo’shimcha ma’lumot</Label>
                   <Inputs1 placeholder='Katta burgur, 2 karra pishloq bor' />
              </Content>

              <Content>
                   <ImgDowloand>
                        <Imgs3 src={dow}/>
                        <Ass href="dowloand">Maxsulot rasmini yuklang</Ass>
                  </ImgDowloand>
              </Content>

              <Buttons>Saqlash</Buttons>
           </Form>
       
       </Drawer>

    </Header>
  );
};

export default Filiallarqoshish;
