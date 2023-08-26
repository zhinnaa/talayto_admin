import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import "../App.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { MdProductionQuantityLimits } from "react-icons/md";
import {AiOutlinePieChart} from 'react-icons/ai'
import {AiOutlineUsergroupAdd} from  "react-icons/ai";
import {FiUsers} from "react-icons/fi";
import {FiLogOut} from  "react-icons/fi";
import {BiCategoryAlt} from  "react-icons/bi";
import {RiAdminLine} from "react-icons/ri"
export const GlobalStyle = createGlobalStyle`
  body {
 padding: 0;
 margin: 0;
 box-sizing: border-box;
 font-family: 'samim';

  }
  
`;


export const Container = styled.div`
  display: flex;
  height: auto;
  background-color: var(--background);
`;

export const Navbars = styled.nav`
  width: ${(props) => (props.showmenu ? "18%" : "50px")};
  background-color: var(--black);
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
  transition: 0.5s ease-in-out;
  height: 54em;
 @media (max-width:1050px){
  width: 12%;
 }
`;
export const AdminHeader = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 3em;
`;
export const AdminText = styled.span`
  color: var(--text);
  font-weight: 600;
  font-size: 1.6rem;
  display: ${(props) => (props.showmenu ? "block" : "none")};

`;
export const Logoarm = styled(AiOutlineMenu)`
  width: 80px;
  height: 1.5em;
  color: var(--text);
`;

export const NavLinks = styled.ul`
  list-style: none;
  position: relative;
  direction: rtl;
  width: 15rem;
  transition: width 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5em;
`;

export const NavItems = styled.li`
  position: absolute;
`;
export const StyledNavLink = styled(NavLink)`
  display: block;
  width: ${(props) => (props.showmenu ? "12.8rem" : "3.125")};
  margin-left: ${(props) => (props.showmenu ? "0" : "2.5em")};
  text-decoration: none;
  padding: 10px 10px;
  color: #dcdcdc;
  font-size: 1.3rem;
  margin-top: 1.3em;
  cursor: pointer;
  transition: 0.4s ease-in-out;

  &.active {
    background: linear-gradient(to left, #8478ff, #8478ff, #877edb, #958fd2);
    border-radius: 0.2em;
    box-shadow: 0 10px 20px -8px rgba(109, 110, 107, 0.55);
  }

  &:hover {
    padding-right: 20px;
    padding-left: 5px;
    transition: all 0.5s linear ease-in-out;
  }
`;
export const NavLinkText = styled.span`
  padding-right: 1em;
`;
export const NavLinkAddIcon = styled(AiOutlineAppstoreAdd)`
  font-size: 20px;
  position: absolute;
  right: ${(props) => (props.showmenu ? "1px" : "90%")};
`;
export const Dashboard =styled(AiOutlinePieChart)`
  font-size: 20px;
  position: absolute;
  right: ${(props) => (props.showmenu ? "1px" : "90%")};
`
export const NavLinkProduct = styled(MdProductionQuantityLimits)`
  font-size: 20px;
  position: absolute;
  right: ${(props) => (props.showmenu ? "1px" : "90%")};
`;

export const NavLinkUser = styled(FiUsers)`
  font-size: 20px;
  position: absolute;
  right: ${(props) => (props.showmenu ? "0px" : "90%")};
`;
export const NavLinkAddUser = styled(AiOutlineUsergroupAdd)`
  font-size: 20px;
  position: absolute;
  right: ${(props) => (props.showmenu ? "0px" : "90%")};
`;
export const NavLinkLogout = styled(FiLogOut)`
  font-size: 20px;
  position: absolute;
  right: ${(props) => (props.showmenu ? "0px" : "90%")};
`;

export const NavLinkAddCategory = styled(BiCategoryAlt)`
  font-size: 20px;
  position: absolute;
  right: ${(props) => (props.showmenu ? "0px" : "90%")};
`;
export const NavLinkAddAdmin=styled(RiAdminLine)`
    font-size: 20px;
  position: absolute;
  right: ${(props) => (props.showmenu ? "0px" : "90%")};
`