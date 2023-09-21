import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import '../App.css';
import {BiCategoryAlt} from  "react-icons/bi";
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
width: 80%;

@media (max-width:1050px){
  width: 70%;
}
`;
export const Header=styled.div`
display: flex;
direction: rtl;
width: 93%;
margin-top:5.5em;
height: 88px;
margin-right: 1em;
justify-content: space-between;
@media (max-width:1050px){
  width: 95%;
  display: flex;
 
}
@media (max-width:750px){
  width: 100%;
  margin-right: .1em;
  display: flex;

  }
`
export const HeaderField=styled.div`
display: flex;
`
export const HeaderText=styled.div`
color: var(--yellow);
font-size: 1.3rem;
margin-right: 1em;
margin-top: 2.15em;
@media (max-width:750px){
  font-size: 1.1rem;
margin-right: .5em;
margin-top: 2.7em;
  }
  @media (max-width:450px){
  font-size: 1rem;
margin-right: .1em;
margin-top: 2.9em;
  }
`

export const HeaderIcon=styled(BiCategoryAlt)`
font-size: 2rem;
color: var(--yellow);
margin-top: 1.4em;
display: flex;
@media (max-width:750px){
  font-size: 1.65rem;
  margin-top: 1.8em;
  display: none;
  }
`

export const HeaderButton=styled.button`
width: 140px;
height: 3.2em;
background-color:#2b2b2b ;
border-radius: .4em;
margin-top: 2em;
border: none;
background-color: var(--yellow);
margin-left: 36%;
@media (max-width:750px){
  width: 100px;
height: 3.2em;

  }
`
export const HeaderThing=styled.div`
color:black;
font-size: 1rem;
@media (max-width:750px){
  font-size: .8rem;

  }

`



export const Menu=styled.div`
position: absolute;
left: 0;
top: 0;
background-color: #283046;
height: 55em;
width: 20%;
display: ${props => (props.menuOpen ? 'block' : 'none')}; 
 transform: translateX(0) ;
transition: transform 0.8s ease-in-out;
transition: width .7s ease-in;
  box-shadow: 0 5px 20px 0 rgba(34, 41, 47, 0.1);
  @media (max-width:1050px){
 top:80%;
 height: 35em;
 left:24%;
 width: 41%;

  }
  @media (max-width:1050px){
 top:70%;
 height: 35em;
 left:24%;
 width: 41%;

  }
;

`
export const MenuItems=styled.div`

`
export const MenuItemsText=styled.div`
color: white;
margin-top: 2em;
direction: rtl;
margin-right: 1.5em;
font-size: 1.1rem;
@media (max-width:650px){
  margin-right: 1em;
  font-size: 1rem;
  }
`
export const MenuItemsInput=styled.input`
border: 1px solid #404656 ;
border-radius: 2px;

width: 85%;
height: 35px;
margin-top: .2em;
color: wheat;
direction: rtl;
font-size:16px;
margin-left: 1.5em;
background-color: #283046;
&:focus{
  outline: none;
  border-color: #454292;

 } 
`
export const MenuHeader=styled.div`
height: 80px;
width: 100%;
background-color: #1C243C;
display: flex;
direction: rtl;
`
export const MenuHeaderText=styled.div`
color: white;
font-size: 1.2rem;
margin-right: 1em;
margin-top: 1.3em;
`


export const MenuHeaderIcon=styled.div`

`
export const Buttons=styled.div`
display: flex;
background-color:#283046 ;
margin-top: 2em;
justify-content: space-around;

`
export const SubmitButton=styled.button`
width: 100px;
height: 40px;

background-color: var(--yellow);
border: none;
color:black;
font-size: 14px;
border-radius: .4em;
margin-top: 3em;
margin-bottom: 1.5em;
@media (max-width:650px){
  width: 70px;
  height: 30px;
margin-left: .8em;
margin-top: 1.5em;
  }
`

export const CancleButton=styled.button`
width: 100px;
height: 40px;

background-color: var(--yellow);
border: none;
color:black;
font-size: 14px;
border-radius: .4em;
margin-top: 3em;
margin-bottom: 1.5em;
margin-left: 2em;
@media (max-width:650px){
  width: 70px;
  height: 30px;
margin-right: .8em;
margin-top: 1.5em;
  }

`