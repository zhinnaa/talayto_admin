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
import {MdProductionQuantityLimits} from 'react-icons/md'
export const GlobalStyle = createGlobalStyle`
  body {
 padding: 0;
 font-family:estedad ;
 margin: 0;
 box-sizing: border-box;

 background-color: var(--background);
  }
`;
export const Container=styled.div`
background: -webkit-linear-gradient(to top,#696969,#7D7D7D,yellow);
width: 100%;



`
export const DashboardHeader=styled.div`
width: 76%;
height: 2em;
display: flex;
direction: rtl;

@media (max-width:1050px ){
  width: 82%;
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
height: 300px;
display: flex;
margin-left: 2em;

margin-top: 4em;
@media (max-width:1050px){
  width: 80%;
  display: flex;
  flex-direction: column;
}
@media (max-width:400px){
  width: 75%;

}


`


export const TotalNum=styled.div`
color:#e2c134;
font-size: 2.5rem;
font-weight: 500;
margin-left: 1em;
margin-top: 4.1em;
`

export const TopSales=styled.div`
width: 95%;

border-radius: 4px;
font-size: 10px;

 @media (max-width:1050px){
  width: 94%;
  margin-top: 2em;

 }
 @media (max-width:400px){
  width: 95%;

}
`
export const TopSalesUp=styled.div`
width: 100%;
height: 50%;
display: flex;
padding-left: 1em;
font-family: estedad;
@media (max-width:1050px){
  width: 98%;
  margin-top: 2em;
  height: 76%;
  margin-right: 3em;
 }
 @media (max-width:1150px){
  width: 99%;
  margin-top: 2em;
  height: 52%;
  margin-right: 3em;
 }
 @media (max-width:850px){

  height: 46%;

 }
@media (max-width:500px){
  width: 100%;
  display: flex;
  flex-direction:column;
height: 70%;
}
`

export const TopSalesDown=styled.div`
width: 100%;
height: 50%;
display: flex;
margin-top: 2.2em;
padding-left: 1em;
@media (max-width:1050px){
  width: 98%;
  margin-top: 4em;
  height: 65%;
  margin-right: 3em;
 }
 @media (max-width:1150px){
  width: 99%;
  margin-top: 2em;
  height: 52%;
  margin-right: 3em;
 }
 @media (max-width:500px){
  width: 100%;
  display: flex;
  flex-direction:column;
height: 70%;

}
 
`
export const TotalSalesView=styled.div`
width: 60%;
background-color:#616A6B;
margin-left: 3em;
display: flex;
border: none;
border-radius:1em;
@media (max-width:1250px){
  width: 65%; 
  margin-left:.5em;

 }
 @media (max-width:500px){
  width: 80%;
  display: flex;
margin-right:1em;
height:25%;
margin-top: 2em;
}

`
export const TotalSalesVisitor=styled.div`
width: 60%;
background-color:#B9770E  ;
display: flex;
border-radius:1em;
margin-left: 3em;
font-family: estedad;
@media (max-width:1250px){
  width: 65%;
  margin-left:.5em;

 }
 @media (max-width:500px){
  width: 80%;
  display: flex;
margin-right:1em;
height:25%;
margin-top: 2em;
}

`
export const TotalSalesUp=styled.div`
width: 60%;

background-color:#138D75 ;
display: flex;
border-radius:1em;
margin-left: 3em;
font-family: estedad;
${props=>props.$isBuy3 &&`
background-color:#F1C40F
`}
 @media (max-width:1250px){
  width: 65%;
  margin-left:.5em;


 }
@media (max-width:500px){
  width: 80%;
  display: flex;
margin-right:1em;
height:25%;
}
`

export const TotalSalesUp3=styled.div`
width: 60%;
background-color:#B7950B ;
display: flex;
border-radius:1em;
margin-left: 3em;
font-family: estedad;
${props=>props.$isBuy3 &&`
background-color:#F1C40F
`}
 @media (max-width:1250px){
  width: 65%;
  margin-left:.5em;

 }
 @media (max-width:500px){
  width: 80%;
  display: flex;
margin-right:1em;
height:25%;
margin-top:2em;
}
`
export const TotalSalesUp2=styled.div`
width: 60%;
background-color:#6C3483;
display: flex;
font-family: estedad;

border-radius:1em;
margin-left: 3em;
@media (max-width:1250px){
  width: 65%;
  margin-left:.5em;

 }
 @media (max-width:500px){
  width: 80%;
  display: flex;
margin-right:1em;
height:25%;
margin-top:2em;
}
`
export const TotalSalesUp1=styled.div`
width: 60%;
background-color:#1F618D;
display: flex;
border-radius: 1em;
margin-left: 3em;
font-family: estedad;
${props=>props.$isBuy3 &&`
background-color:#F1C40F
`}
 @media (max-width:1250px){
  width: 65%;
  margin-left:.5em;

 }

@media (max-width:500px){
  width: 80%;
  display: flex;
margin-right:1em;
height:25%;
margin-top:2em;
}
`

export const SalesIcon1=styled.div`
width: 40%;
background-color:#16A085;
height: 100%;
border-radius:1em;
@media (max-width:850px){
  width: 27%;

 }
 @media (max-width:500px){
  width: 27%;
height: 100%;
 }
`
export const DollarIcon=styled(HiCurrencyDollar)`
color: var(--black);
font-size: 4rem;
font-weight: 900;
margin-top: .67em;
margin-left: .39em;
@media (max-width:950px){
  font-size: 2.5rem;
  margin-top: 1.4em;
  margin-left: .2em;
}
@media (max-width:1050px){
  font-size: 2.8rem;
  margin-top: 1.1em;
  margin-left: .5em;
}
@media (max-width:850px){
  font-size: 2rem;
margin-top: 1.5em;
margin-left: .3em;
 }
`
export const DollarIcon2=styled(MdProductionQuantityLimits)`
color: var(--black);
font-size: 2.6rem;
font-weight: 900;
margin-top: 1.2em;

margin-left: .87em;
@media (max-width:950px){
  font-size: 2.5rem;
  margin-top: 1.3em;
  margin-left: .35em;
}
@media (max-width:850px){
  font-size: 2.3rem;
  margin-left: .1em;

 }
`
export const SalesInput=styled.div`
display: flex;
flex-direction: column;
text-align: center;
width: 60%;
margin-top: .6em;
margin-left: .5em;
direction: rtl;
@media (max-width:850px){
  
  width: 75%;
 }
 @media (max-width:500px){
  
  width: 65%;
height: 70%;
 }
`
export const SalesInputText=styled.div`
font-size: 1.2rem;
color: white;
margin-top: .7em;
@media (max-width:1050px){
  font-size: 1.1rem;
 }
`
export const SalesInputNum=styled.div`
font-size: 1.3rem;
margin-top: 1.5em;
color: rgb(220, 220, 220);
@media (max-width:1050px){
  font-size: 1.2rem;
  margin-top: 1.2em;
 }
 @media (max-width:500px){
  font-size: 1.2rem;
  margin-top: 2.5em;
 }
`

export const SalesIcon2=styled.div`
width: 40%;
background-color:#707B7C;
height: 100%;
border-radius: 1em;
@media (max-width:850px){
  width: 27%;

 }
`




export const SalesIcon3=styled.div`
width: 40%;
background-color:#D68910;
height: 100%;
border-radius:1em;
@media (max-width:850px){
  width: 20%;

 }
${props=>props.$isBuy1 &&`
background-color:#2E86C1
`}
${props=>props.$isBuy2 &&`
background-color:#7D3C98
`}
${props=>props.$isBuy3 &&`
background-color:#D4AC0D 
`}

`

export const TotalSalesShare=styled.div`
width: 50%;
height: 40%;
background-color: var(--black);
margin-left: 1em;
display: flex;
border-radius: .2em;
`
export const SalesIcon4=styled.div`
width: 45%;
background-color:#07a6e7;
height: 40%;
border-radius:1em;
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
width: 84%;
height: 400px;
display: flex;
justify-content: space-evenly;
margin-top: 10%;
@media (max-width:1050px){
  width: 80%;
  display: flex;
justify-content: space-between;
margin-left: 2%;
  margin-top: 16%;

}
@media (max-width:950px){
  width: 80%;
  display: flex;
justify-content: space-between;
margin-left: 2%;
  margin-top: 17%;

}
@media (max-width:600px){

  margin-top:23%;
}
@media (max-width:500px){

margin-top:65em;
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
@media (max-width:500px){
margin-top: 100%;
width: 100%;
}
`





