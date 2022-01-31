import styled from 'styled-components';
import { ReactComponent as save } from '../../assets/icons/save.svg';
import { ReactComponent as clock } from '../../assets/icons/clock.svg';
import { ReactComponent as user } from '../../assets/icons/user.svg';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 6px;
  width: 100%;
  min-height: 400px;
  max-height: fit-content;
  padding: 0 20px 20px 20px;
  margin-bottom: 8px;
  transition: all 0.3s;
  :hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }
 
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => flex && 'column'};
  width: 100%;
  padding-bottom: ${({ last }) => !last && '25px'};

  padding-top: 25px;
  border-bottom: ${({ last }) => !last && '1px solid #d9d7d7'}; 
`;
export const Info = styled.div`
  display: flex;
  margin-left: ${({ end }) => end && 'auto'};
  align-items: ${({ center }) => center && 'center'};
`;
Info.OrderID = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  max-width: fit-content;
  height: 36px;

  background: #20d472;
  border-radius: 18px;

  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.466667px;
  color: #ffffff;
  margin-right: 25px;
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #edeff3;
  border-radius: 18px;
`;
Info.Save = styled(save)`
  width: 14px;
  height: 16px;
`;
Info.Clock = styled(clock)`
  display: flex;
  margin-right: 10px;
  width: 24px;
  height: 24px;
`;
Info.Text = styled.div`
  display: flex;
  font-family: SFProDisplay;
  font-size: 22px;
  line-height: 16px;
  color: #2d3a45;
`;
Info.User = styled(user)`
  width: 24px;
  height: 24px;
  margin-right: 22px;
`;
export const Timer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;
Info.Name = styled.div`
  font-family: SFProDisplay;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.533333px;
  color: #2d3a45;
`;
Info.Nuber = styled.div`
  font-family: SFProDisplay;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.4px;

  color: #2d3a45;

  mix-blend-mode: normal;
  opacity: 0.7;
  margin: 5px 0 20px 0;
`;
Info.Total = styled.div`
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.366667px;
  color: #8d9ba8;
  margin-top: ${({ top }) => top && '20px'};
  margin-bottom: 5px;
`;
Info.Price = styled.div`
  font-family: SFProDisplay bold;
  font-size: 24px;
  line-height: 18px;
  letter-spacing: 0.666667px;

  color: #2d3a45;
`;
Info.PaymeIcon = styled.div`
  display: flex;
  margin-left: auto;
  width: 14px;
  height: 14px;
  background: #14e5e4;
  border-radius: 50%;
`;
Info.Payme = styled.div`
  display: flex;
  font-family: SFProDisplay;
  font-size: 16px;
  line-height: 18px;
  margin-left: 12px;
  letter-spacing: 0.466667px;
  color: #2d3a45;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
`;
export const Dispatched=styled.div`
width: 333px;
height: 93px;
background: #EDEFF3;
mix-blend-mode: normal;
opacity: 0.5;
border-radius: 6px;
padding: 22px 30px 22px 0px;
`
export const Diskret=styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding-bottom: 10px;
`
export const Dispatched1=styled.div`
`
export const Dispatched2=styled.div`
width: 333px;
height: 30px;
background: #EDEFF3;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 14px;
`
export const Dispatched2Left=styled.div`
font-family: SFProDisplay;
font-size: 10px;
line-height: 18px;
letter-spacing: 0.333333px;
color: #8D9BA8;
`
export const Dispatched2Right=styled.div`
font-family: SFProDisplay;
font-size: 10px;
line-height: 18px;
letter-spacing: 0.333333px;
text-transform: uppercase;
color: #8D9BA8;
`
export const Dispatched3=styled.div`
width: 333px;
display: flex;
justify-content: space-between;
`
export const Dispatched3Left=styled.div``
export const Dispatched3Right=styled.div``
export const Texts=styled.div`
font-family: SFProDisplay;
font-size: 14px;
line-height: 18px;
letter-spacing: 0.466667px;
color: #2D3A45;
margin: 12px 0px;
`
export const Dispatched4=styled.div`
width: 333px;
height: 120px;
background: #EDEFF3;
mix-blend-mode: normal;
opacity: 0.5;
border-radius: 6px;
padding: 0px 35px 0px 21px;
`
Dispatched4.Infos=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 27px 0px;
`
Dispatched4.Con=styled.div`
display: flex;
`
Dispatched4.Text=styled.div`
font-family: SFProDisplay;
font-size: 14px;
line-height: 18px;
letter-spacing: 0.466667px;
color: #2D3A45;
margin-left: 14.4px;
`
Info.PaymeIcons=styled.img`


`