import React, { useState } from 'react';
import { Drawer,Modal,TimePicker  } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  Autocomplete,
  Polygon,
} from '@react-google-maps/api';

import {
  Add,Titles,Ass,
  Header,Label,Inputs1,
  MenuH,Select,Option,Maps,
  MenuV,Buttons,LineInput,
  Toggle,ImgDowloand,
  Wrapper,Content,Imgs3,
  IconWrapper,Form,
  Input,SortContent,InputWrapers1,
  InputWraper,Search,Sort,SortImg,Ul ,Li ,InputCkeckBox,TextLi
} from './style';
import search from '../../../assets/imgs/search.png'
import dow from '../../../assets/imgs/dow.png'


export const Filiallarqoshish= ({ onClick ,location }) => {


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
const libraries = ['places'];
const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  //**************************************************** */
  const [place, setPlace] = useState(null);
  const [center, setCenter] = useState({ lat: 41.2995, lng: 69.2401 });

  const { REACT_APP_MAP_KEY: mapKey } = process.env;
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: mapKey,
    id: 'fastfood',
    libraries,
  });
  const onPlaceChanged = (e) => {
    console.log(place?.getPlace());
    console.log(place?.getPlace()?.geometry?.location?.lat());
    console.log(place?.getPlace()?.geometry?.location?.lng());
    setCenter({
      lat: place?.getPlace()?.geometry?.location?.lat(),
      lng: place?.getPlace()?.geometry?.location?.lng(),
    });
  };

  const paths = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 },
    { lat: 24.774, lng: -80.19 },
    { lat: 23.774, lng: -80.19 },
  ];

  const options = {
    fillColor: 'lightblue',
    fillOpacity: 1,
    strokeColor: 'red',
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1,
  };

  const onLoad = (polygon) => {
    console.log('polygon: ', polygon);
  };
  //********************************************** */
  
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


           <Titles>Yangi filial qo’shish</Titles>

           <Form>

                <Content>
                     <Label>Filial nomi uz</Label>
                     <Inputs1 placeholder='Xadra' />
                </Content>
              

              <Content>
                   <Label>Filial nomi ru</Label>
                   <Inputs1 placeholder='Xadra' />
              </Content>

              <Content>
                    <Label>Qo’shimcha ma’lumot</Label>
                   <Inputs1 placeholder='Katta burgur, 2 karra pishloq bor' />
              </Content>

              <Content>
                  <Label>Ish vaqti</Label>
                   <InputWrapers1>
                         <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
                               <LineInput styled={{margin:'0px 5px'}}></LineInput>
                         <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
                   </InputWrapers1>
             </Content>

             <Content>
                 <Label>Filial mo’ljal</Label>
                 <Inputs1 placeholder='Filial mo’ljal' />
            </Content>

            <Maps>

            {isLoaded && (
              <GoogleMap  
                id='fastfood'
                zoom={12}
                center={center}
                mapContainerStyle={{
                  width: '329.82px',
                  height: '174.83px',
                  position:'relative'
                }}
              >
           
                <Marker position={center} />
                <Polygon onLoad={onLoad} paths={paths} options={options} />
              </GoogleMap>
            )}
   
            </Maps>

              <Buttons>Saqlash</Buttons>
           </Form>
       </Drawer>

    </Header>
  );
};

export default Filiallarqoshish;
