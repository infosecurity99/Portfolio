import React from 'react';
import Hodimlar1 from './Hodimlar1/index';
import HodimlarNomi from './KategoriyaNomi/index';
import Hodimlarqoshish from './Hodimlarqoshish/index';

const Hodimlar = () => {
  return <div style={{flex:'1'}}>
       <Hodimlarqoshish/>
       <HodimlarNomi style={{flex:'1'}} />
       <Hodimlar1 style={{flex:'1'}}/>
  </div>;
};

export default Hodimlar;
