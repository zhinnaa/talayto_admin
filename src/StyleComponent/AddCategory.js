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
  width: 85%;
}
`;
export const Header=styled.div`
display: flex;
direction: rtl;
width: 90%;
margin-top:5.5em;
height: 88px;
margin-right: 2em;
justify-content: space-between;
@media (max-width:1050px){
  width: 80%;
  display: flex;
 
}
`
export const HeaderField=styled.div`
display: flex;
`
export const HeaderText=styled.div`
color: var(--yellow);
font-size: 1.5rem;
margin-right: 1em;
margin-top: 1.8em;
`

export const HeaderIcon=styled(BiCategoryAlt)`
font-size: 2rem;
color: var(--yellow);
margin-top: 1.2em;
`

export const HeaderButton=styled.button`
width: 100px;
height: 3.2em;
background-color:#2b2b2b ;
border-radius: .4em;
margin-top: 2em;
border: none;
background-color: var(--yellow);
margin-left: 40%;

`

export const Menu=styled.div`
position: absolute;
left: 0;
top: 0;
background-color: #283046;
height: 55em;
width: 22em;
display: ${props => (props.menuOpen ? 'block' : 'none')}; 
 transform: translateX(0) ;
transition: transform 0.8s ease-in-out;
transition: width .7s ease-in;
/* opacity: ${props => (props.menuOpen ? 1 : 0)};
  transform: translateX(${props => (props.isOpen ? '0' : '-10px')});
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out; */
  box-shadow: 0 5px 20px 0 rgba(34, 41, 47, 0.1);
  @media (max-width:1050px){
   display: none;
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
`
export const MenuItemsInput=styled.input`
border: 1px solid #404656 ;
border-radius: 2px;
padding: 4px;
width: 85%;
height: 22px;
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
height: 60px;
width: 100%;
background-color: #1C243C;
display: flex;
direction: rtl;
`
export const MenuHeaderText=styled.div`
color: white;
font-size: 1.2rem;
margin-right: 1em;
margin-top: 1em;
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


`