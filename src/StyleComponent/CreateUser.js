import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import '../App.css';
import {AiOutlineUsergroupAdd} from  "react-icons/ai";
export const GlobalStyle = createGlobalStyle`
body {
 padding: 0;
 margin: 0;
 box-sizing: border-box;
 font-family: 'samim';
 background-color: var(--background);
 
  }
`;

export const Container=styled.div`
width: 90%;
margin-right: 3em;
`;
export const Header=styled.div`
display: flex;
direction: rtl;
margin-top: 3.5em;
width: 73%;
margin-right: 4.5em;

`
export const HeaderText=styled.div`
color: var(--yellow);
font-size: 1.3rem;
margin-right: .5em;

`

export const HeaderIcon=styled(AiOutlineUsergroupAdd)`
font-size: 2rem;
color: var(--yellow);

`
export const Main=styled.div`
width: 46%;
height: auto;
background-color: var(--black);
margin-top: 1em;
margin-left: auto;
margin-right: auto;
border-radius: 1em;
`

export const FormField=styled.form`
`
export const FormGroup=styled.div`
display: flex;
flex-direction: row;
direction: rtl;

`
export const FormMain=styled.div`
display: flex;
margin-top: .5em;
flex-direction: column;
`

export const InputText=styled.label`
color: var(--yellow);
font-size: 1.2rem;
margin-top: 1.5em;
direction: rtl;
margin-right: 1.2em;
`

export const Inputs=styled.input`
background-color: var(--black);
border: 1px solid #404656 ;
border-radius: 4px;
padding: 8px;
width: 250px;
margin-top: .2em;
color: white;
font-size:16px;
margin-right: 1.2em;
&:focus{
    outline: none;
  border-color: #454292;
 } 
${props => props.$isAddress && `
 width: 340px;
 padding:22px;

  `}
  ${props => props.$isAge && `
 width: 100px;
 padding:8px;

  `}
  ${props => props.$iswallet && `
 width: 110px;
 padding:8px;


  `}
  ${props => props.$isName && `
 width: 100px;
 padding:10px;

  `}

&:focus{
 outline: none;
 }
 &:focus:required{
  border-color:red;
 }

`

export const Button=styled.button`
width: 120px;
height: 3em;
margin-left: 4em;
background-color: var(--yellow);
border: none;
color:black;
font-size: 14px;
border-radius: .4em;
margin-top: 3em;
margin-bottom: 1.5em;
`;



