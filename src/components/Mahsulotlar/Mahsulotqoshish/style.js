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
   
    default:
      return 3;
  }
};
export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
    display: ${({ order }) => order === '2' && 'none'};
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
  cursor: pointer;
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

export const InputWraper=styled.div`
width: 360px;
height: 54px;
background: #EDEFF3;
display: flex;
align-items: center;
justify-content: space-evenly;
border-radius: 24px;
margin-left: 50px;
margin-right: 28px;
`
export const Input=styled.input`
width: 290px;
height: 48px;
background: #EDEFF3;
border-radius: 24px;
outline: none;
text-indent: 22px;
border: none;
`

export const Search=styled.img`
width: 16px;
height: 16px;
`
export const Sort=styled.div`
width: 48px;
height: 48px;
background: #EDEFF3;
border-radius: 24px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

export const SortContent=styled.div`
width: 36px;
height: 36px;
background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 18px;
display: flex;
align-items: center;
justify-content: center;
`

export const SortImg=styled.img`
width: 16px;
height: 14.4px;
`


export const InputCkeckBox=styled.input`
width: 16px;
height: 16px;
border: 1px solid #EDEFF3;
box-sizing: border-box;
border-radius: 2px;
outline: none;
`
export const Ul=styled.div`

`
export const Li=styled.div`
display: flex;
align-items: center;
margin-top: 9px;
`
export const TextLi=styled.div`
width: 202px;
height: 18px;
font-family: SFProDisplay;
font-size: 12px;
line-height: 18px;
letter-spacing: 0.4px;
color: #2D3A45;
margin-left: 12px;
`