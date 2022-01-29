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
height: 100%;
padding:0px 20px 20px 20px ;
box-sizing: border-box;
`
export const ContentLeft=styled.div`
flex: 9;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
box-sizing: border-box;
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
background:  ${(props)=>props.active1? "#FFFFFF":" "};
box-shadow: ${(props)=>props.active?"0px 2px 2px rgba(174, 176, 181, 0.314986)":""};
border-radius: ${(props)=>props.active1? "18px":" "} ;
padding:${(props)=>props.active1? "7px 20px":" "} ;
z-index:${(props)=>props.active1? "1":" "} ;
opacity: ${(props)=>props.active1? "0.9":" "};
cursor: pointer;
`
export const CardWrapper=styled.div`
margin-top: 19px;
display: flex;
height: 100%;
flex-wrap: wrap;
overflow-y: scroll;
`
export const Cards=styled.div`
width: 255px;
height: 220px;
background: #FFFFFF;
box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
border-radius: 6px;
margin: 10px;
transition: all .7s ease-in-out;
:hover{
  transform: scale(1.09);
  transition: all .7s ease-in-out;
}
`
export const CardImg=styled.img`
width: 255px;
height: 136.54px;
`
export const CardBody=styled.div`
padding: 10px;
`
export const CardTitles1=styled.div`
font-family: SFProDisplay;
font-size: 13px;
line-height: 16px;
color: #2D3A45;
`
export const CardDesc=styled.div`
font-family: SFProDisplay;
font-size: 10px;
line-height: 16px;
color: #8D9BA8;
`
export const CardPrice=styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
margin-top: 10px;
`
export const Prices=styled.div`
font-family: SFProDisplay;
font-size: 12px;
line-height: 16px;
color: #2D3A45;
`
export const Counters=styled.div`
width: 80px;
height: 24px;
border: 1px solid #EDEFF3;
box-sizing: border-box;
border-radius: 4px;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-between;
`
export const CountMinus=styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`
export const CountResualt=styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
`
export const CountPlus=styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`
export const CardTitleRight=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
`
export const CardrightTitle=styled.div`
font-family: SFProDisplay;
font-size: 16px;
line-height: 18px;
letter-spacing: 0.533333px;
color: #2D3A45;
`
export const RightDeleted=styled.div`
width: 36px;
height: 36px;
background: #EDEFF3;
border-radius: 18px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`
export const RightImg=styled.img``

export const Cards1=styled.div`
width: 100%;
height: 213px;
border: 1px solid #EDEFF3;
box-sizing: border-box;
border-radius: 6px;
margin-top: 12px;
overflow-y: scroll;
`

export const Form=styled.form`
margin-top: 32px;
margin: auto;
`
export const Content1=styled.div`
margin: 16px 0px;
`

export const Label=styled.label`
font-family: SFProDisplay;
font-size: 12px;
line-height: 18px;
letter-spacing: 0.4px;
color: #2D3A45;
mix-blend-mode: normal;
opacity: 0.6;
margin-bottom: 6px;
`
export const Inputs1=styled.input`
border: 1px solid #EDEFF3;
box-sizing: border-box;
border-radius: 6px;
height: 44px;
width:${(props)=>props.kel? '91px':' 338px'};
font-family: SFProDisplay;
font-size: 12px;
line-height: 18px;
letter-spacing: 0.4px;
color: #2D3A45;
text-indent: 6px;
display: ${(props)=>props.kel && 'flex'};
align-items: ${(props)=>props.kel && 'center'};
justify-content: ${(props)=>props.kel && 'center'};
text-indent: ${(props)=>props.kel && "23px"};
`
export const Buttons=styled.div`
font-family: SFProDisplay;
font-size: 14px;
line-height: 18px;
letter-spacing: 0.466667px;
color: #FFFFFF;
background: #20D472;
border-radius: 4px;
width: 118px;
height: 35px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all .8s ease-in-out;
margin-top: 14px;
:hover{
  transform: scale(1.1);
  transition: all .8s ease-in-out;
}
`
