import React from 'react';
import Kategoriya1 from './Kategoriya1/index';
import KategoriyaNomi from './KategoriyaNomi/index';

import Kategoriyaqoshish from './Kategoriyaqoshish/index';

const Kategoriya = () => {
  return <div style={{flex:'1'}}>
       <Kategoriyaqoshish/>
       <KategoriyaNomi style={{flex:'1'}} />
       <Kategoriya1 style={{flex:'1'}}/>
  </div>;
};

export default Kategoriya;
