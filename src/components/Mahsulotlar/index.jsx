import React from 'react';
import Mahsulotlar1 from './Mahsulotlar1';
import MahsulotNomi from './MahsulotNomi';

import Mahsulotqoshish from './Mahsulotqoshish';

const Mahsulotlar = () => {
  return <div style={{flex:'1'}}>
       <Mahsulotqoshish/>
       <MahsulotNomi style={{flex:'1'}} />
       <Mahsulotlar1 style={{flex:'1'}}/>
  </div>;
};

export default Mahsulotlar;
