import React from 'react';
import Mijozlarlar1 from './Mijozlar1/index';
import MijozlarNomi from './MijozlarNomi/index';

import Mijozlarqoshish from './Mijozlarqoshish/index';

const Mijozlar = () => {
  return <div style={{flex:'1'}}>
       <Mijozlarqoshish/>
       <MijozlarNomi style={{flex:'1'}} />
       <Mijozlarlar1 style={{flex:'1'}}/>
  </div>;
};

export default Mijozlar;
