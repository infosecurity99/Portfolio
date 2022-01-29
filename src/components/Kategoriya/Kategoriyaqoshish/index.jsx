import React, { useState } from 'react';
import { Drawer,Modal  } from 'antd';
import 'antd/dist/antd.css';
import {
  Add,Titles,
  Header,Label,Inputs1,
  MenuH,Select,Option,
  MenuV,Buttons,
  Toggle,InputkWraper,
  Wrapper,Content,
  IconWrapper,Form,
  Input,
  InputWraper,Search,Inputk,SelectWrap
} from './style';
import search from '../../../assets/imgs/search.png'
import sort from '../../../assets/imgs/sort.png'
import dow from '../../../assets/imgs/dow.png'
export const Kategoriyaqoshish= ({ onClick }) => {
  const [isActive, setIsActive] = useState('Yangi');
  const [on, setOn] = useState(true);

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

         
      </Wrapper>
  
        <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}
        headerStyle={{background:"red",display:'none' ,position:'relative'}}>


           <Titles>Yangi maxsulot qo’shish</Titles>

           <Form>

                <Content>
                     <Label>Kategoriya nomi uz</Label>
                     <Inputs1 placeholder='Issiq ichimliklar' />
                </Content>

              <Content>
                   <Label>Kategoriya nomi ru</Label>
                   <Inputs1 placeholder='Горячие напитки' />
              </Content>
              
              <Content>
              <Label>Bosh kategoriyaga biriktirish</Label>

            <SelectWrap>
              <InputkWraper>
                        <Inputk  type="checkbox"/>
              </InputkWraper>
              <Select>
                   <Option>Ichimliklar</Option>
                   <Option>Ovqatlar</Option> 
               </Select>
            </SelectWrap>

        </Content>

              <Buttons>Saqlash</Buttons>
           </Form>
       
       </Drawer>

    </Header>
  );
};

export default Kategoriyaqoshish;
