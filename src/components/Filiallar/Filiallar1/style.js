import styled from "styled-components";

export const Container=styled.div`
//padding:0px 65px ;
`
export const Content=styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
`
export const Card=styled.div`
width: 1130px;
height: 60px;
background: #FFFFFF;
border-radius: 6px;
margin-top: 9px;
display: flex;
flex-direction: row;
align-items: center;
margin:auto;
margin-top: 12px;
transition: all 0.8s ease-in-out;
:hover{
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
    transition: all 0.8s ease-in-out;
}
`

export const CardImg=styled.img`
margin: 0px 34px 0px 18px;
`
export const Title=styled.div`
margin-right: 208px;
margin-left: 18px;
font-family: SFProDisplay;
font-size: 13px;
line-height: 15px;
color: #2D3A45;
`
export const Kategoriya=styled.div`
margin-right: 133px;
font-family: SFProDisplay;
font-size: 13px;
line-height: 15px;
color: #2D3A45;
`
export const Price=styled.div`
margin-right: 93px;
font-family: SFProDisplay;
font-size: 13px;
line-height: 15px;
color: #2D3A45;
`
export const OtherName=styled.div`
margin-right: 160px;
font-family: SFProDisplay;
font-size: 13px;
line-height: 15px;
color: #2D3A45;
`
export const Deleted=styled.div`
width: 32px;
height: 32px;
background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.414986);
border-radius: 16px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`
export const Edited=styled.div`
width: 32px;
height: 32px;
background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.414986);
border-radius: 16px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 28px;
cursor: pointer;
`

export const Location=styled.div`
width: 32px;
height: 32px;
background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.414986);
border-radius: 16px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 28px;
cursor: pointer;
`

export const LocationImg=styled.img``

export  const EditedImg=styled.img`

`

export  const DeletedImg=styled.img`
`