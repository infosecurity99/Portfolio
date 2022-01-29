import React from 'react';
import Filiallar1 from './Filiallar1/index';
import FiliallarNomi from './FiliallarNomi/index';

import Filiallarqoshish from './Filiallarqoshish/index';

const Filiallar = () => {
  return <div style={{flex:'1'}}>
       <Filiallarqoshish/>
       <FiliallarNomi style={{flex:'1'}} />
       <Filiallar1 style={{flex:'1'}}/>
  </div>;
};

export default Filiallar;
