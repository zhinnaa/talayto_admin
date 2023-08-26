import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import '../App.css';
import {AiOutlineUsergroupAdd} from  "react-icons/ai";
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
width: 100%;

`;
export const HeaderConst=styled.div`
display: flex;
justify-content: space-between;
width: 75%;
margin-top: 2em;
margin-left: 3em;
direction: rtl;
/* border-bottom: 1px solid #a4b2bc; */
`;
export const HeaderConstRight=styled.div`
display: flex;
direction: rtl;
padding-top: 2.5em;
padding-right:1em;
padding-bottom: .7em;

`;
export const HeaderConstIcons=styled(AiOutlineUsergroupAdd)`
font-size:2rem;
color: var(--yellow);

`
export const AddUserButton=styled(NavLink)`
width: 100px;
height: 3em;
background-color:#2b2b2b ;
border-radius: .4em;
margin-top: 2em;
border: none;
background-color: var(--yellow);
text-decoration: none;

`;
export const AddUserText=styled.div`
margin-right: .5em;
margin-top: 1em;
`
export const HeaderConstText=styled.div`
color:var(--yellow);
margin-right: 1em;
margin-top: .1em;
font-size: 1.2rem;


`

export const MainPage=styled.div`
width: 75%;
height:30em ;
margin-left: 3em;
background-color: var(--black);
`;
export const MainUserPage=styled.div`

`;
