import styled from 'styled-components';
import { ReactComponent as save } from '../../assets/icons/save.svg';
import { ReactComponent as clock } from '../../assets/icons/clock.svg';
import { ReactComponent as user } from '../../assets/icons/user.svg';
import { ReactComponent as phone } from '../../assets/icons/phone.svg';
import { ReactComponent as truck } from '../../assets/icons/truck.svg';
import { ReactComponent as clipboard } from '../../assets/icons/clipboard.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 6px;
  transition: all 0.3s;
  margin-bottom: 10px;
  :hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }
 
`;

export const Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: ${({ flex }) => flex && 'column'};
  flex: ${({ first }) => (first ? 1 : 2)};
  padding: 15px 25px;
  border-right: ${({ last }) => !last && '1px solid #d9d7d7'}; ;
`;

export const Info = styled.div`
  display: flex;
  margin-left: ${({ end }) => end && 'auto'};
  align-items: center;
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

Info.Truck = styled(truck)`
  width: 24px;
  height: 24px;
  margin-right: 22px;
`;

Info.Clipboard = styled(clipboard)`
  width: 24px;
  height: 24px;
  margin-right: 22px;
`;
Info.Phone = styled(phone)`
  width: 24px;
  height: 24px;
  margin-right: 22px;
  /* margin-top: 20px; */
`;

export const Timer = styled.div`
  display: flex;
  /* margin-left: auto; */
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
  margin: 25px 0 20px 0;
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

