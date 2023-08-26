import React from "react";
import {
  GlobalStyle,
  Container,
  DashboardHeader,
  DashboardHeaderTitle,
  DashboardHeaderMenu,
  UpperContainer,
  TotalSales,
  TopSales,
  DownContainer,
  TopIncomes,
  MarketCamparison,
  TotalHeader,
  VisitHeader,
  Data,
  TopSalesUp,
  TotalSalesUp,
  TotalSalesShare,
  TopSalesDown,
  TotalSalesView,
  TotalSalesVisitor,
  SalesIcon1,
  SalesIcon2,
  SalesIcon3,
  SalesIcon4,
  DollarIcon,
  DollarIcon2,
  DollarIcon3,
  DollarIcon4,
  SalesInput,
  SalesInputNum,
  SalesInputText,UlList,LiList,ListName,ListPrice, DashboardHeaderIcon, LiHeader, LiHeaderText
} from "../StyleComponent/Dashboard";
import CChart from "./Charts/AreaCharts";
import  Calendar  from "./Dashboarditem/MyCalendar";
import NavBars from './NavBar';
export default function Dashboard() {
 
  return (
   
    <Container>
    <NavBars/>
      <GlobalStyle />
    
      <DashboardHeader>
        <DashboardHeaderMenu></DashboardHeaderMenu>
        <DashboardHeaderIcon></DashboardHeaderIcon>
        <DashboardHeaderTitle>داشبورد</DashboardHeaderTitle>
       
      </DashboardHeader>
      <UpperContainer>
        <TotalSales>
          <TotalHeader>۱.فروش کل</TotalHeader>
          <Data>
            <CChart />
            {/* <TotalNum>250$</TotalNum> */}
          </Data>
        </TotalSales>
 
         <TopSales>
          <TopSalesUp>
            <TotalSalesUp>
              <SalesIcon1>
                <DollarIcon></DollarIcon>
              </SalesIcon1>
              <SalesInput>
                <SalesInputText>فروش کل</SalesInputText>
                <SalesInputNum>35.543</SalesInputNum>
              </SalesInput>
            </TotalSalesUp>

            <TotalSalesView>
              <SalesIcon2>
                <DollarIcon2></DollarIcon2>
              </SalesIcon2>
              <SalesInput>
                <SalesInputText> ویو پیج </SalesInputText>
                <SalesInputNum>120</SalesInputNum>
              </SalesInput>
            </TotalSalesView>
          </TopSalesUp>

          <TopSalesDown>
            <TotalSalesVisitor>
              <SalesIcon3>
                <DollarIcon3></DollarIcon3>
              </SalesIcon3>
              <SalesInput>
                <SalesInputText>کاربر های فعال </SalesInputText>
                <SalesInputNum>1020</SalesInputNum>
              </SalesInput>
            </TotalSalesVisitor>

            <TotalSalesShare>
              <SalesIcon4>
                <DollarIcon4></DollarIcon4>
              </SalesIcon4>

              <SalesInput>
                <SalesInputText>اشتراک </SalesInputText>
                <SalesInputNum>100</SalesInputNum>
              </SalesInput>
            </TotalSalesShare>
          </TopSalesDown>

         <Calendar/>
        </TopSales> 
        
      </UpperContainer>
      <DownContainer>
        <TopIncomes></TopIncomes>
        <MarketCamparison>
          <VisitHeader> </VisitHeader>
          <TotalHeader>۴.پرفروش ترین محصولات </TotalHeader>
          <UlList>
            <LiHeader>
              <LiHeaderText>محصول</LiHeaderText>
              <LiHeaderText>گرم محصول</LiHeaderText>
            </LiHeader>
            <LiList>
              
              <ListName>گردنبند کارتیر</ListName>
              <ListPrice>4gr</ListPrice>
            </LiList>

            <LiList>
             
              <ListName>گوشواره طلایی</ListName>
              <ListPrice>1gr</ListPrice>
            </LiList>

            <LiList>
              <ListName> دستبند کارتیر</ListName>
              <ListPrice>2gr</ListPrice>
            </LiList>
           
          </UlList>
        </MarketCamparison>
      </DownContainer>
    </Container>
  )
}
