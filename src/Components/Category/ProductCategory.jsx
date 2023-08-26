import React from 'react'
import {GlobalStyle,Container,Wrapper,Header,HeaderItemName,AddItemButton,Table,Row,Cell,EditCol,FillDelete,FillEdit, Headers, HeaderText, HeaderIcon} from '../../StyleComponent/productCategory'
import NavBar from '../NavBar'
export default function form() {

  return (
    <Container>
       <NavBar/>
    <GlobalStyle/>
    <Headers>
  <HeaderIcon></HeaderIcon>
    <HeaderText>دسته بندی محصولات</HeaderText>
    </Headers>
 <Wrapper>

  
 
        <Header>
        <AddItemButton>اضافه کردن محصول</AddItemButton>
            <HeaderItemName>دسته بندی محصولات</HeaderItemName>
        </Header>
        <Table>

        <Row>
          <Cell>نام محصول </Cell>
          <Cell>توضیحات</Cell>
          <Cell>کتگوری</Cell>
          <Cell>وزن</Cell>
          <Cell>وزن واحد</Cell>
          <Cell>اجرت</Cell>
          <Cell>عکس</Cell>
          <Cell>حذف و ادیت</Cell>
        </Row>

        <Row>
            <Cell>گردنبند طلایی</Cell>
            <Cell>نگین های فراوان و براق</Cell>
            <Cell>گردنبند</Cell>
            <Cell>۱gr</Cell>
            <Cell>18عیار</Cell>
            <Cell>۱</Cell>
            <Cell><EditCol><FillDelete></FillDelete><FillEdit></FillEdit></EditCol></Cell>
            <Cell><EditCol><FillDelete></FillDelete><FillEdit></FillEdit></EditCol></Cell>
        </Row>

        <Row>
        <Cell>گردنبند طلایی</Cell>
            <Cell>نگین های فراوان و براق</Cell>
            <Cell>گردنبند</Cell>
            <Cell>۱gr</Cell>
            <Cell>18عیار</Cell>
            <Cell>۱</Cell>
            <Cell><EditCol><FillDelete></FillDelete><FillEdit></FillEdit></EditCol></Cell>
            <Cell><EditCol><FillDelete></FillDelete><FillEdit></FillEdit></EditCol></Cell>
        </Row>

        <Row>
        <Cell>گردنبند طلایی</Cell>
            <Cell>نگین های فراوان و براق</Cell>
            <Cell>گردنبند</Cell>
            <Cell>۱gr</Cell>
            <Cell>18عیار</Cell>
            <Cell>۱</Cell>
            <Cell><EditCol><FillDelete></FillDelete><FillEdit></FillEdit></EditCol></Cell>
            <Cell><EditCol><FillDelete></FillDelete><FillEdit></FillEdit></EditCol></Cell>
        </Row>

        <Row>
        <Cell>گردنبند طلایی</Cell>
            <Cell>نگین های فراوان و براق</Cell>
            <Cell>گردنبند</Cell>
            <Cell>۱gr</Cell>
            <Cell>18عیار</Cell>
            <Cell>۱</Cell>
            <Cell><EditCol><FillDelete></FillDelete><FillEdit></FillEdit></EditCol></Cell>
            <Cell><EditCol><FillDelete></FillDelete><FillEdit></FillEdit></EditCol></Cell>
        </Row>

        <Row>
        <Cell>گردنبند طلایی</Cell>
            <Cell>نگین های فراوان و براق</Cell>
            <Cell>گردنبند</Cell>
            <Cell>۱gr</Cell>
            <Cell>18عیار</Cell>
            <Cell>۱</Cell>
            <Cell><EditCol><FillDelete></FillDelete><FillEdit></FillEdit></EditCol></Cell>
            <Cell><EditCol><FillDelete></FillDelete><FillEdit></FillEdit></EditCol></Cell>
        </Row>
     
    </Table>
    
      </Wrapper>
      

</Container>
  )
}
