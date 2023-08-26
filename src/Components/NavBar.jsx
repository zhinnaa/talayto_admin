import React from 'react'
import { useState } from 'react';
import "../App.css";

import { GlobalStyle, Navbars,Container,AdminHeader,AdminText,Logoarm,NavLinks, NavItems, StyledNavLink,NavLinkText,NavLinkAddIcon,NavLinkProduct,NavLinkUser,NavLinkAddUser, Dashboard,NavLinkLogout,NavLinkAddCategory,NavLinkAddAdmin } from '../StyleComponent/NavBar';
export default function NavBar() {
  const [showmenu, setShowMenu] = useState('true');
  
  const toggleMenu = () => {
    setShowMenu(!showmenu);
  }
  
  return (
    <Container>
        <GlobalStyle/>
 <Navbars showmenu={showmenu}>
 <AdminHeader><AdminText showmenu={showmenu}>پنل ادمین</AdminText> <Logoarm onClick={toggleMenu}></Logoarm></AdminHeader> 
<NavLinks  >
    <NavItems>
    <StyledNavLink showmenu={showmenu} to="/"> < Dashboard showmenu={showmenu}></Dashboard>  <NavLinkText>داشبورد</NavLinkText></StyledNavLink>
        <StyledNavLink showmenu={showmenu} to="/ProductDetail"> < NavLinkProduct showmenu={showmenu}></NavLinkProduct>  <NavLinkText>دسته بندی محصولات</NavLinkText></StyledNavLink>
        <StyledNavLink  showmenu={showmenu}  to="/AddCategory"><NavLinkAddCategory showmenu={showmenu}></NavLinkAddCategory> <NavLinkText>اضافه کردن کتگوری</NavLinkText> </StyledNavLink>
        <StyledNavLink  showmenu={showmenu}  to="/FormWizard"><NavLinkAddIcon showmenu={showmenu}></NavLinkAddIcon> <NavLinkText></NavLinkText>اضافه کردن محصول  </StyledNavLink>
        <StyledNavLink  showmenu={showmenu}  to="/Users"><NavLinkUser showmenu={showmenu}></NavLinkUser> <NavLinkText></NavLinkText>اطلاعات کاربران</StyledNavLink>
        <StyledNavLink  showmenu={showmenu}  to="/AddUser"><NavLinkAddUser showmenu={showmenu}></NavLinkAddUser> <NavLinkText>اضافه کردن کاربر</NavLinkText> </StyledNavLink>
        <StyledNavLink  showmenu={showmenu}  to="/AddAdmin"><NavLinkAddAdmin showmenu={showmenu}></NavLinkAddAdmin> <NavLinkText>اضافه کردن ادمین</NavLinkText> </StyledNavLink>
        <StyledNavLink  showmenu={showmenu}  to="/Logout"><NavLinkLogout showmenu={showmenu}></NavLinkLogout> <NavLinkText>خروج از صفحه</NavLinkText> </StyledNavLink>
        
    </NavItems>
 </NavLinks>
 </Navbars>
    </Container>
   

   )
}
