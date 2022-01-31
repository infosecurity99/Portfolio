import React, { useState } from 'react';
import { Drawer,Modal  ,Upload, message } from 'antd';
import 'antd/dist/antd.css';
import { InboxOutlined } from '@ant-design/icons';
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
import sort from '../../../assets/imgs/sort.png'

export const Mahsulotqoshish= ({ onClick }) => {
  const { Dragger } = Upload;
/****************************************************** */
const props = {
  height: '97px',
  widht:'318px !important',
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
   //   message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
/**************************************** */


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
           
           <Sort  onClick={showModal}>
               <SortContent>
                  <SortImg  src={sort}/>
               </SortContent>
           </Sort>

         
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
                   <Dragger headers={{height:"97px",widht:'318px'}} {...props} style={{height:"97px",widht:'318px'}}>
                   <p className="ant-upload-drag-icon" style={{height:"97px",widht:'318px'}}>
                     <InboxOutlined />
                     <p className="ant-upload-text">Maxsulot rasmini yuklang</p>
                   </p>
                 
                 </Dragger>
                  </ImgDowloand>
              </Content>

              <Buttons>Saqlash</Buttons>
           </Form>
       
       </Drawer>

    </Header>
  );
};

export default Mahsulotqoshish;
