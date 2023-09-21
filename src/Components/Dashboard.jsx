import React from "react";
import {
  GlobalStyle,
  Container,
  DashboardHeader,
  DashboardHeaderTitle,
  DashboardHeaderMenu,
  UpperContainer,
  TopSales,
  DownContainer,
  TopIncomes,
  MarketCamparison,
  TotalHeader,
  VisitHeader,
  TopSalesUp,
  TotalSalesUp,
  TopSalesDown,
  TotalSalesView,
  TotalSalesVisitor,
  SalesIcon1,
  SalesIcon2,
  SalesIcon3,
  DollarIcon,
  DollarIcon2,
  TotalSalesUp3,
  TotalSalesUp2,
  TotalSalesUp1,
  SalesInput,
  SalesInputNum,
  SalesInputText,UlList,LiList,ListName,ListPrice, DashboardHeaderIcon, LiHeader, LiHeaderText
} from "../StyleComponent/Dashboard";
import NavBars from './NavBar';
import TopProducts from "./TopProducts";
import Calendar from './BasicDateRangeCalendar'
export default function Dashboard() {
 
  return (
   
    <Container>
    <NavBars/>
      <GlobalStyle />
    
     
      <UpperContainer>
        {/* <TotalSales>
          <TotalHeader>۱.فروش کل</TotalHeader>
          <Data>
            <CChart />
          </Data>
        </TotalSales> */}
 
         <TopSales>
          <TopSalesUp>
            <TotalSalesUp>
              <SalesIcon1>
                <DollarIcon></DollarIcon>
              </SalesIcon1>
              <SalesInput>
                <SalesInputText>فروش ۲۴ ساعت اخیر</SalesInputText>
                <SalesInputNum>۳۵ میلیون تومان</SalesInputNum>
              </SalesInput>
            </TotalSalesUp>

            <TotalSalesView>
              <SalesIcon2>
              <DollarIcon></DollarIcon>
              </SalesIcon2>
              <SalesInput>
                <SalesInputText>فروش یک هفته اخیر</SalesInputText>
                <SalesInputNum>۱۰۰ میلیون تومان</SalesInputNum>
              </SalesInput>
            </TotalSalesView>
            <TotalSalesVisitor>
              <SalesIcon3>
              <DollarIcon></DollarIcon>
              </SalesIcon3>
              <SalesInput>
                <SalesInputText>فروش یک ماه اخیر</SalesInputText>
                <SalesInputNum>۵۰۰ میلیون تومان</SalesInputNum>
              </SalesInput>
            </TotalSalesVisitor>
            
          </TopSalesUp>
          <TopSalesDown>
            <TotalSalesUp3>
              <SalesIcon3 $isBuy3>
                <DollarIcon2></DollarIcon2>
              </SalesIcon3 >
              <SalesInput>
                <SalesInputText>خرید ۲۴ ساعت اخیر</SalesInputText>
                <SalesInputNum>۳۵ میلیون تومان</SalesInputNum>
              </SalesInput>
            </TotalSalesUp3>

            <TotalSalesUp1>
              <SalesIcon3 $isBuy1>
              <DollarIcon2></DollarIcon2>
              </SalesIcon3>
              <SalesInput>
                <SalesInputText>خرید یک هفته اخیر</SalesInputText>
                <SalesInputNum>۱۰۰ میلیون تومان</SalesInputNum>
              </SalesInput>
            </TotalSalesUp1>
            <TotalSalesUp2>
              <SalesIcon3 $isBuy2>
              <DollarIcon2></DollarIcon2>
              </SalesIcon3>
              <SalesInput>
                <SalesInputText>خرید یک ماه اخیر</SalesInputText>
                <SalesInputNum>۵۰۰ میلیون تومان</SalesInputNum>
              </SalesInput>
            </TotalSalesUp2>
            
          </TopSalesDown>


          {/* <TopSalesDown>
            

            
          </TopSalesDown> */}

         {/* <Calendar/> */}
        </TopSales> 
      </UpperContainer>
      <DownContainer>
      <Calendar/>
       <TopProducts/>

            
      </DownContainer>
    </Container>
  )
}
