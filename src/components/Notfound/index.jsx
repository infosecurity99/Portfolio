import React from 'react';
import { Result, Button } from 'antd';
import { Container } from './style';

export const Notfound = () => {
  return <Container >
  <Result
  status="404"
  title="404"
  subTitle="Sorry, the page you visited does not exist."
  extra={<Button type="primary">Back Home</Button>}
/>
  </Container>;
};

export default Notfound;





