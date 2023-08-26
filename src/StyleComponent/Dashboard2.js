import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import '../App.css';
import {HiCurrencyDollar} from 'react-icons/hi'
import {AiFillSignal} from 'react-icons/ai'
import{FaUserAlt}from 'react-icons/fa'
import {FaShareAltSquare} from 'react-icons/fa'


export const GlobalStyle = createGlobalStyle`
  body {
 padding: 0;
 margin: 0;
 box-sizing: border-box;
 font-family: 'samim';
 background-color: #1f2528;
  }
`;
export const Container=styled.div`
display: flex;
background: -webkit-linear-gradient(to top,#696969,#7D7D7D,yellow);
    position: relative;
    margin-top: 3em;
    `

export const DashboardHeader=styled.div`
font-size: 1.5rem;
    `



export const SalesContainer=styled.div`
width: 90%;
height: 70px;
display: flex;
padding-left: 1em;

`

export const SalesIcon1=styled.div`
width: 30%;
background-color:#58af59;
height: 70px;
border-radius: .8em;
`
export const DollarIcon=styled(HiCurrencyDollar)`
color: var(--black);
font-size: 2.4rem;
font-weight: 900;
margin-top: .4em;
margin-left: .35em;
`
export const SalesInput=styled.div`
display: flex;
flex-direction: column;
text-align: center;
width: 30%;
margin-top: .6em;
margin-left: .5em;
direction: rtl;

`
export const SalesInputText=styled.div`
font-size: .99rem;
color: #3b3b3b;
`
export const SalesInputNum=styled.div`
font-size: .99rem;
margin-top: .2em;
color: #616161;
`
export const TotalSalesView=styled.div`
width: 50%;
background-color: var(--black);
margin-left: 1em;
display: flex;
border-radius: .8em;

`
export const SalesIcon2=styled.div`
width: 35%;
background-color:#d14f4d;
height: 70px;
border-radius: .8em;
`
export const DollarIcon2=styled(AiFillSignal)`
color: var(--black);
font-size: 2rem;
font-weight: 900;
margin-top: .6em;
margin-left: .53em;
`
export const DollarIcon3=styled(FaUserAlt)`
color: var(--black);
font-size: 2rem;
font-weight: 900;
margin-top: .6em;
margin-left: .53em;
`
export const DollarIcon4=styled(FaShareAltSquare)`
color: var(--black);
font-size: 2rem;
font-weight: 900;
margin-top: .6em;
margin-left: .53em;
`


