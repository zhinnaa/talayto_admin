import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import '../App.css';
import { CChart } from '@coreui/react-chartjs'
import {HiCurrencyDollar} from 'react-icons/hi'
import {AiFillSignal} from 'react-icons/ai'
import{FaUserAlt}from 'react-icons/fa'
import {FaShareAltSquare} from 'react-icons/fa'
import {BsFillCalendar2RangeFill} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
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
background: -webkit-linear-gradient(to top,#696969,#7D7D7D,yellow);
width: 100%;



`
export const DashboardHeader=styled.div`
width: 80%;
height: 2em;
display: flex;
direction: rtl;

@media (max-width:1050px ){
  width: 92%;
}
`
export const DashboardHeaderTitle=styled.div`
font-size: 1.7rem;
color: var(--yellow);
margin-right: .5em;

`
export const DashboardHeaderIcon=styled(AiOutlinePieChart)`
font-size: 2rem;
color: var(--yellow);
`
export const DashboardHeaderMenu=styled.div`
font-size: 1.3rem;
margin-left: 1em;
`
export const DashboardHeaderMenuTitle=styled.div`
color: var(--yellow);
`
export const UpperContainer=styled.div`
width: 76%;
height: 395px;
display: flex;
margin-top: 3em;
@media (max-width:1050px){
  width: 90%;
  display: flex;
  flex-direction: column;
}


`
export const TotalSales=styled.div`
width: 56%;
background-color: var(--black);
margin-left: 2em;
border-radius: 10px;

@media (max-width:1050px){
 
 width: 97%;
 margin-left: 1em;
}
`
export const TotalHeader=styled.div`
color: var(--white);
font-size: 1.4rem;
direction: rtl;
margin-right: 3em;
margin-top: 1.5em;


`
export const Data=styled.div`
display: flex;
`

export const TotalNum=styled.div`
color:#e2c134;
font-size: 2.5rem;
font-weight: 500;
margin-left: 1em;
margin-top: 4.1em;
`

export const TopSales=styled.div`
width: 42%;
border-radius: 4px;
 @media (max-width:1050px){
  width: 95%;
  margin-top: 2em;
 }
`
export const TopSalesUp=styled.div`
width: 100%;
height: 90px;
display: flex;
padding-left: 1em;

`
export const TotalSalesUp=styled.div`
width: 50%;
background-color: var(--black);
display: flex;
border-radius: .2em;
`
export const SalesIcon1=styled.div`
width: 45%;
background-color:#58af59;
height: 90px;
border-radius: .2em;
`
export const DollarIcon=styled(HiCurrencyDollar)`
color: var(--black);
font-size: 3rem;
font-weight: 900;
margin-top: .4em;
margin-left: .4em;
`
export const SalesInput=styled.div`
display: flex;
flex-direction: column;
text-align: center;
width: 60%;
margin-top: .6em;
margin-left: .5em;
direction: rtl;

`
export const SalesInputText=styled.div`
font-size: 1.2rem;
color: white;
margin-top: .7em;
`
export const SalesInputNum=styled.div`
font-size: 1.1rem;
margin-top: .5em;
color: #616161;
`
export const TotalSalesView=styled.div`
width: 50%;
height: 90px;
background-color: var(--black);
margin-left: 1em;
display: flex;
border-radius: .2em;

`
export const SalesIcon2=styled.div`
width: 45%;
background-color:#d14f4d;
height: 90px;
border-radius: .2em;
`
export const DollarIcon2=styled(AiFillSignal)`
color: var(--black);
font-size: 2.3rem;
font-weight: 900;
margin-top: .7em;
margin-left: .65em;
`
export const TopSalesDown=styled.div`
width: 100%;
height: 100px;
display: flex;
padding-left: 1em;
margin-top: 1em;

`

export const TotalSalesVisitor=styled.div`
width: 50%;
height: 90px;
background-color: var(--black);
display: flex;
border-radius: .2em;
`
export const SalesIcon3=styled.div`
width: 45%;
background-color:#e49d30;
height: 90px;
border-radius: .2em;
`
export const DollarIcon3=styled(FaUserAlt)`
color: var(--black);
font-size: 2.2rem;
font-weight: 900;
margin-top: .7em;
margin-left: .8em;
`
export const TotalSalesShare=styled.div`
width: 50%;
height: 90px;
background-color: var(--black);
margin-left: 1em;
display: flex;
border-radius: .2em;
`
export const SalesIcon4=styled.div`
width: 45%;
background-color:#07a6e7;
height: 90px;
border-radius: .2em;
`
export const DollarIcon4=styled(FaShareAltSquare)`
color: var(--black);
font-size: 2.8rem;
font-weight: 900;
margin-top: .5em;
margin-left: .49em;
`
export const Calendar=styled.div`
background-color: var(--black);
width: 100%;
height: 120px;
margin-top: 1.5em;
margin-left: 1em;
color: white;
display: flex;
border-radius: 1em;

align-items: center;


`
export const CalendarIcon=styled(BsFillCalendar2RangeFill)`
font-size: 2.5rem;
margin-left:  0.2em;


`
 export const CalendarPart=styled.div`
width:27% ;
height: 120px;
margin-top: 1.8em;
margin-left: .5em;
` 

export const CalendarMain=styled.div`
display: flex;
flex-direction: column;
width: 70%;
height: 120px;


`
export const DayCalendar=styled.div`

color: white;
font-size: 1.7rem;
margin-left: .7em;

`

export const MonthCalendar=styled.div`
font-size: 2rem;
color: white;
margin-top: .3em;
`
export const CalendarLine=styled.div`
width: 240px;
height: 6px;
background-color: #ffb347;
`




export const TopHeader=styled.div`
color: var(--white);
font-size: 1.2rem;
direction: rtl;
margin-right: 1em;
margin-top: .6em;
`

export const TotalVisit=styled.div`
width:12%;
height: 300px;
background-color: var(--black);
margin-left: 2em;
border-radius: 7px;

`
export const VisitHeader=styled.div`
color: var(--white);
font-size: 1.2rem;
direction: rtl;
margin-right: 1em;
margin-top: .6em;
`


export const DownContainer=styled.div`
width: 87%;
height: 300px;
display: flex;
margin-top: 2%;
@media (max-width:1050px){
  width: 90%;
  display: flex;
  flex-direction: column;
}
`

export const TopIncomes=styled.div`
width: 47%;
background-color: var(--black);
margin-left: 2em;
border-radius: 7px;
`
export const MarketCamparison=styled.div`
width: 40%;
background-color: var(--black);
margin-left: .5em;
border-radius: 7px;
@media (max-width:1050px){
  width: 90%;
margin-top: 15em;
margin-left: 2em;
}
`
export const ProgressBar=styled.div`
width:200px;
`

export const CCharts=styled(CChart)`
margin-left: 1em;
width: 520px;

`
export const UlList=styled.ul`
width: 100%;
overflow: hidden;

`
export const LiList=styled.li`
width: 85%;
height: 25px;
display: flex;
justify-content:space-around ;
border-top: 1px solid gray;

margin-top: 1em;
padding-top:1em ;
font-size: 1.1rem;

`
export const ListNum=styled.span`
color: var(--white);
`
export const ListName=styled.span`
color: var(--white);

`
export const ListPrice=styled.span`
color: var(--white);

`
export const LiHeader=styled.div`
display: flex;
justify-content: space-between;
width: 74%;
margin-top: 2em;
`
export const LiHeaderText=styled.div`
color: wheat;
margin-left: 6em;
`