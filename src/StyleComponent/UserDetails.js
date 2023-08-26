import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import '../App.css';
import { NavLink } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  body {
 padding: 0;
 margin: 0;
 box-sizing: border-box;
 font-family: 'samim';
 background-color: var(--background)
  }
`;

export const Container=styled.div`
display: flex;
height: 900px;

`;
export const AdminImage=styled.img`

max-width: 70%;
 margin-top: 11em;
 margin-left: 4em;
 background-image: url(${props => props.src});
`;
export const RightContainer=styled.div`
width: 50%;
background-color:#161D31;
@media (max-width:1217px) {
    width: 62%;
}
@media (max-width:1050px) {
  display: none;
}
`;
export const Wrapper=styled.div`
background-color:var(--black);
width: 40%;
height: 700px;
border-radius: 13px;
margin-top: 1em;

`
export const Head=styled.div`
display: flex;
justify-content: space-between;
margin-top: .5em;
`
export const Wrapper1=styled.div`
display: flex;
margin-top: 3em;
justify-content: space-around;
`
export const UserInfo=styled.div`
display: flex;
flex-direction: column;
direction:rtl
`
export const UserInfoLabel=styled.label`
color: white;
direction: rtl;
font-size: 1.15rem;

`
export const UserInfoInput=styled.input`
background-color: var(--black);
border: 1px solid #404656 ;
padding: 8px;
width: 200px;
margin-top: .5em;
color: white;
font-size:16px;


&:focus{
    outline: none;
  border-color: #454292;
 } 
 ${props => props.$isAddress && `
 width: 340px;
 padding:14px;
margin-left:130px

  `}
`

export const Headers=styled.div`
color:var(--yellow) ;
font-size: 1.7rem;
direction: rtl;
margin-right: 1.4em;
margin-top: 1.4em;
`
export const ButtonDetails=styled.button`
width: 90px;
height: 2.5em;
margin-left: 2.2em;
background-color: var(--yellow);
border: none;
color:black;
font-size: 16px;
border-radius: .4em;
margin-top: 2em;
margin-bottom: 1.5em;
margin-right: 2.5em;
`;
export const ButtonDelete=styled(NavLink)`
width: 124px;
height: 2.7em;
background-color:var(--yellow);
border: none;
color:black;
border-radius: .4em;
margin-top: 1.7em;
margin-bottom: 1.5em;
margin-left: 3em;
text-decoration: none;
`

export const Button=styled.div`
display: flex;
margin-top: 2em;
justify-content: space-between;

`
export const ButtonText=styled.div`
color: black;
margin-top:1em;
margin-left:.2em;

`