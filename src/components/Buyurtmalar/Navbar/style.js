import styled from 'styled-components';
import { ReactComponent as plus } from '../../../assets/icons/plus.svg';
import { ReactComponent as menuH } from '../../../assets/icons/menuH.svg';
import { ReactComponent as menuV } from '../../../assets/icons/menuV.svg';

const getOrder = ({ order }) => {
  switch (order) {
    case '1':
      return 1;
    case '2':
      return 3;
    case '3':
      return 2;
    default:
      return 1;
  }
};
export const Container = styled.div`
  display: flex;
  flex-direction: column;
 // width: 100%;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

export const Header = styled.div`
  display: flex;
  background: white;
  width: 100%;
  @media (max-width: 1400px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: ${({ center }) => (center ? '100%' : '300px')};
  height: 90px;
  align-items: center;
  border: 1px solid #e5e5e5;
  padding: 10px;
  @media (max-width: 1440px) {
    order: ${getOrder};
    display: ${({ order }) => order === '3' && 'none'};
    width: 100%;
  }
`;

export const Add = styled.div`
  display: flex;
`;

Add.Plus = styled(plus)`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  background: #20d472;
  padding: 11px;
  border-radius: 50%;
  cursor: pointer;
`;

Add.Title = styled.div`
  font-family: SFProDisplay bold;
  font-size: 12px;
  line-height: 16px;
  color: #2d3a45;
  margin-left: 14px;
  cursor: pointer;
  font-weight: bold;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background: #edeff3;
  border-radius: 24px;
  height: 60px;
`;

Tab.Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  border-radius: 18px;
  background: ${({ active }) => (active ? 'white' : 'transparent')};
  color: #b7bcc0;
  cursor: pointer;
  transition: all 0.3s;
`;

export const Toggle = styled.div`
  width: 100px;
  justify-content: space-between;
  align-items: center;
  display: ${({ toggle }) => (toggle ? 'none' : 'flex')};
  background: #edeff3;
  border-radius: 24px;
  height: 50px;
  padding: 0 6px;
  @media (max-width: 1440px) {
    display: flex;
    margin-left: auto;
  }
`;
export const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  background: ${({ active }) => active && 'white'};
  padding: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
`;
export const MenuH = styled(menuH)`
  width: 16px;
  height: 16px;
  fill: ${({ active }) => active && '#8D9BA8'};
`;
export const MenuV = styled(menuV)`
  width: 16px;
  height: 16px;
  fill: ${({ active }) => (active ? '#8D9BA8' : 'transparent')};
`;

export const Content=styled.div`
height: 100%;
width: 100%;
display: flex;
`

export const ContentRight=styled.div`
flex: 5;
border: 1px solid black;
height: 100%;
`

export const ContentLeft=styled.div`
flex: 7;
border: 1px solid white;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`
export const LeftTitle=styled.div`
height: 18px;
font-family: SFProDisplay;
font-size: 16px;
line-height: 18px;
letter-spacing: 0.533333px;
color: #2D3A45;
margin-bottom: 20px;
`

export const ContentLefterTabs=styled.div`
width: 539px;
height: 48px;
background: #EDEFF3;
border-radius: 24px;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
padding: 0px 27px;
`
export const ContentLefterTab=styled.div`
font-family: SFProDisplay;
font-size: 13px;
line-height: 16px;
color: #2D3A45;
mix-blend-mode: normal;
opacity: 0.35;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
width: ${(props)=>props.active1? "99px":" "};
height: ${(props)=>props.active1? "30":" "};
background:  ${(props)=>props.active1? "#FFF":" "};
box-shadow: ${(props)=>props.active?"0px 2px 2px rgba(174, 176, 181, 0.314986)":""};
border-radius: ${(props)=>props.active1? "18px":" "} ;
padding:${(props)=>props.active1? "7px 20px":" "} ;
z-index:${(props)=>props.active1? "1":" "} ;
cursor: pointer;
`

export const CardWrapper=styled.div`
margin-top: 19px;
border: 1px solid black;
display: flex;
height: 100%;
flex-wrap: wrap;

`
export const Cards=styled.div`
width: 255px;
height: 210px;
background: #FFFFFF;
box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
border-radius: 6px;
margin: 14px;
`

export const CardImg=styled.img`
width: 255px;
height: 136.54px;
`