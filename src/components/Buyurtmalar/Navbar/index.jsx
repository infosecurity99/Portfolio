import React, { useState } from 'react';
import Bitmap from '../../../assets/imgs/Bitmap.png'
import trash from '../../../assets/imgs/trash.png'
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  Autocomplete,
  Polygon,
} from '@react-google-maps/api';

import {
  Add,Content,Cards,CardTitles1,Prices,Buttons,
  Header,ContentLeft,CardDesc,CardTitleRight,
  MenuH,LeftTitle,CardImg,CountMinus,Cards1,
  MenuV,CardWrapper,CardPrice,CardrightTitle,
  Tab,ContentRight,CardBody,CountResualt,Label,
  Toggle,ContentLefterTab,CountPlus,RightImg,
  Wrapper,ContentLefterTabs,RightDeleted,Form,Content1,
  IconWrapper,Counters,Inputs1} from './style';
import { Drawer, Button, Space, Card } from 'antd';
const libraries = ['places'];

export const Navbar = ({ onClick , location}) => {
/**************************** */
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
/******************************************************* */

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
                        <CardBody>
                          <CardTitles1>Kortofel fri (150g)</CardTitles1>
                          <CardDesc>Картофель фри, специи</CardDesc>
                          <CardPrice>
                              <Prices>5,000 UZS</Prices>
                               <Counters>
                                  <CountMinus>-</CountMinus>
                                  <CountResualt>2</CountResualt>
                                  <CountPlus>+</CountPlus>
                               </Counters>
                          </CardPrice>
                        </CardBody>
                     </Cards>
                     <Cards>
                     <CardImg  src={Bitmap}/>
                     <CardBody>
                       <CardTitles1>Kortofel fri (150g)</CardTitles1>
                       <CardDesc>Картофель фри, специи</CardDesc>
                       <CardPrice>
                           <Prices>5,000 UZS</Prices>
                            <Counters>
                               <CountMinus>-</CountMinus>
                               <CountResualt>2</CountResualt>
                               <CountPlus>+</CountPlus>
                            </Counters>
                       </CardPrice>
                     </CardBody>
                     </Cards>
                     <Cards>
                     <CardImg  src={Bitmap}/>
                     <CardBody>
                       <CardTitles1>Kortofel fri (150g)</CardTitles1>
                       <CardDesc>Картофель фри, специи</CardDesc>
                       <CardPrice>
                           <Prices>5,000 UZS</Prices>
                            <Counters>
                               <CountMinus>-</CountMinus>
                               <CountResualt>2</CountResualt>
                               <CountPlus>+</CountPlus>
                            </Counters>
                       </CardPrice>
                     </CardBody>
                     </Cards>
                     <Cards>
                     <CardImg  src={Bitmap}/>
                     <CardBody>
                       <CardTitles1>Kortofel fri (150g)</CardTitles1>
                       <CardDesc>Картофель фри, специи</CardDesc>
                       <CardPrice>
                           <Prices>5,000 UZS</Prices>
                            <Counters>
                               <CountMinus>-</CountMinus>
                               <CountResualt>2</CountResualt>
                               <CountPlus>+</CountPlus>
                            </Counters>
                       </CardPrice>
                     </CardBody>
                  </Cards>
                  <Cards>
                  <CardImg  src={Bitmap}/>
                  <CardBody>
                    <CardTitles1>Kortofel fri (150g)</CardTitles1>
                    <CardDesc>Картофель фри, специи</CardDesc>
                    <CardPrice>
                        <Prices>5,000 UZS</Prices>
                         <Counters>
                            <CountMinus>-</CountMinus>
                            <CountResualt>2</CountResualt>
                            <CountPlus>+</CountPlus>
                         </Counters>
                    </CardPrice>
                  </CardBody>
                  </Cards>
                  <Cards>
                  <CardImg  src={Bitmap}/>
                  <CardBody>
                    <CardTitles1>Kortofel fri (150g)</CardTitles1>
                    <CardDesc>Картофель фри, специи</CardDesc>
                    <CardPrice>
                        <Prices>5,000 UZS</Prices>
                         <Counters>
                            <CountMinus>-</CountMinus>
                            <CountResualt>2</CountResualt>
                            <CountPlus>+</CountPlus>
                         </Counters>
                    </CardPrice>
                  </CardBody>
                  </Cards>
                </CardWrapper>
                
         </ContentLeft>

         <ContentRight>

           <CardTitleRight>
              <CardrightTitle>Buyurtma ro’yxati</CardrightTitle>
              <RightDeleted><RightImg src={trash}/> </RightDeleted>
           </CardTitleRight>
      
           <Cards1></Cards1>

           <Form>
           <Content1>

                <Label>Mijoz ismi</Label>
                <Inputs1 placeholder='Muhammad Jumayev' />
           </Content1>
         
         <Content1>
              <Label>Telefon raqam</Label>
              <Inputs1 placeholder='(+99 893) 461-41-88' />
         </Content1>

         <Content1>
               <Label>Manzil</Label>
              <Inputs1 placeholder='Yunusobod t., Bog’ishamol 12, 34' />
         </Content1>

         <div  style={{margin:'auto'}}>
         {isLoaded && (
           <GoogleMap  
             id='fastfood'
             zoom={12}
             center={center}
             mapContainerStyle={{
               width: '238pxpx',
               height: '159px',
               position:'relative'
             }}
           >
        
             <Marker position={center} />
             <Polygon onLoad={onLoad} paths={paths} options={options} />
           </GoogleMap>
         )}
       </div>

         <Buttons>Saqlash</Buttons>
      </Form>


         </ContentRight>

      </Content>
    </Drawer>
    </Header>
  );
};

export default Navbar;
