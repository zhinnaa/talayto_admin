
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import '../App.css';
import {AiFillDelete} from "react-icons/ai";
import {AiOutlineEdit} from  "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
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
    width:80%;
    height:auto; 


    
`

export const Headers=styled.div`
display: flex;
direction: rtl;
margin-top: 2.5em;
width: 84%;

`
export const HeaderText=styled.div`
color: var(--yellow);
font-size: 1.3rem;
margin-right: .5em;
`

export const HeaderIcon=styled(MdProductionQuantityLimits)`
font-size: 2rem;
color: var(--yellow);

`
export const Wrapper=styled.div`
font-family: 'samim';
width: 90%;
height: 30rem;
margin-left: 8em;
margin-top:4em ;


`
export const Header=styled.div`
 width: 80%;
    height: 70px;
    background-color: var(--black);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: .1em;

    @media (max-width:1050px){
    display: none;
    }
  
`
export const HeaderItemName=styled.p`
    color: var(--text);
    font-size:1.1rem;
    margin-right: 2em;
`
export const AddItemButton=styled.button`
    width: 10em;
    height: 3em;
    margin-left: 5em;
    background-color:#2b2b2b ;
border-radius: .4em;
margin-top: .5em;
border: none;
background: linear-gradient(to left, #7267e3, #7267e3, #7267e3, #7267e3);
  border: none;
  color:#DcDc;
  border-radius: .4em;
   
`
 export const Table = styled.div`
  border-collapse: collapse;
  width: 80%;
  direction:rtl;
  background-color: #101315;
 @media (max-width:1050px){
width: 50%;

 }
`;

 export const Row = styled.tr`
  &:nth-child(even) {
    background-color:#1f2536;
  }

`;

 export const Cell = styled.td`

padding: 1.3em 1em;
padding-right: 2em;
color:#DCDCDC;
background-color: #283046;
align-items: center;
border-bottom: 1.5px solid #1f2536;
`;
export const EditCol=styled.td`
    display: flex;
  
`
export const FillDelete=styled(AiFillDelete)`
  color:var(--text) ;
`
export const  FillEdit=styled(AiOutlineEdit)`
    padding-right: 1em;
    color:var(--text) ;
   
`

