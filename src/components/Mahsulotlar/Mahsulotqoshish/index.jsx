import React, { useState } from 'react';
import { Drawer,Modal  ,Upload, message } from 'antd';
import 'antd/dist/antd.css';
import { InboxOutlined } from '@ant-design/icons';
import {
  Add,Titles,
  Header,Label,Inputs1,
  MenuH,Select,Option,
  MenuV,Buttons,
  Toggle,ImgDowloand,
  Wrapper,Content,
  IconWrapper,Form,
  Input,SortContent,
  InputWraper,Search,Sort,SortImg,Ul ,Li ,InputCkeckBox,TextLi
} from './style';
import search from '../../../assets/imgs/search.png'
import sort from '../../../assets/imgs/sort.png'
import {mahsulotlar} from '../../../mock/mahsulotlar'
import Mahsulotlar1 from '../Mahsulotlar1/index';
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
      console.log(info.file.name, info.fileList);
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
const [contacts,setContacts]=useState(mahsulotlar)

/************** */

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
  
/********************************** */
const [name, setName] = useState( 'Chizburger');
const Named=(e)=>{
setName(e.target.value)
}


const [kategoriya, setkategoriya] = useState( 'Burger1');
const kategoriya1=(newSelected)=>{
setkategoriya(newSelected)
}

const [price, setPrice]=useState('18,500 UZS')
const Price=(e)=>{
setPrice(e.target.value)
}

const [desc ,setDesc]=useState('')
const Desc=(e)=>{
  setDesc(e.target.value)
}

const [rasim,setRasim]=useState('')
const Rasim=(e)=>{
setRasim(e.target.value)
}

/** */
const handelSubmit=(event)=>{
const newConcat={
  id:Date.now(),
  name:name,
  kategoriya:kategoriya,
  price:price,
  desc:desc,
}
const newcontacts=[...contacts,newConcat];
setContacts(newcontacts)
}
  /********************************** */

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
                     <Inputs1 placeholder='Chizburger' value={name}  onChange={(e)=>Named(e)} />
                </Content>
                
                <Content>
                    <Label>Kategoriya</Label>

                     <Select value={kategoriya}  onChange={(e)=>kategoriya1(e.target.value)}>
                         <Option>Burger1</Option>
                         <Option>Pizza2</Option> 
                         <Option>Burger3</Option>
                         <Option>Pizza4</Option> 
                     </Select>

              </Content>

              <Content>
                   <Label>Narxi</Label>
                   <Inputs1 placeholder='18,500 UZS'  value={price}  onChange={(e)=>Price(e)} />
              </Content>

              <Content>
                    <Label>Qo’shimcha ma’lumot</Label>
                   <Inputs1 placeholder='Katta burgur, 2 karra pishloq bor' value={desc}  onChange={(e)=>Desc(e)}  />
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

              <Buttons  onClick={(event)=>handelSubmit(event)}>Saqlash</Buttons>
           </Form>
       
       </Drawer>
    </Header>
  );
};

export default Mahsulotqoshish;
