import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";
import "../App.css";
import { NavLink } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  body {
 padding: 0;
 margin: 0;
 box-sizing: border-box;
 font-family: 'samim';
 background-color: var(--background)
  }
`;

export const Container = styled.div`
  display: flex;
  height: 900px;
`;
export const AdminImage = styled.img`
  width: 60%;
  margin-top: 11em;
  margin-left: 8em;
  background-image: url(${(props) => props.src});
`;
export const RightContainer = styled.div`
  width: 50%;
  background-color: #161d31;
  @media (max-width: 1217px) {
    width: 62%;
  }
  @media (max-width: 1050px) {
    display: none;
  }
`;
export const Wrapper = styled.div`
  background-color: var(--black);
  width: 40%;
  height: 700px;
  border-radius: 13px;
  margin-top: 1em;
`;
export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5em;
`;
export const Wrapper1 = styled.div`
  display: flex;
  margin-top: 2em;
  
  justify-content: space-around;
`;
export const UserInfo = styled.div`
  display: flex;
  direction: rtl;
  margin-top: 0.5em;

`;
export const UserInfoLabel = styled.label`
  color: white;
  direction: rtl;
  font-size: 1.15rem;
  margin-top: 0.4em;
  ${(props) =>
    props.$isTitle && `
margin-top:.5em;
  `}
    ${(props) =>
    props.$isCategory && `
margin-top:.5em;
  `}
`;
export const UserInfoInput = styled.input`
  background-color: var(--black);
  border: none;
  width: 100px;
  margin-right: 0.9em;
  color: white;
  font-size: 16px;
margin-top: .6em;
  &:focus {
    outline: none;
    border-color: ${(props) => (props.edit ? "blue" : "#454292")};
  }
  ${(props) =>
    props.edit &&
    css`
      border: 1px solid #404656;
      padding: 8px;
    `}
  ${(props) =>
    props.$isTitle &&
    `
color: white;
font-size:22px;
width:100px;
margin-top:.3em;

  `}

${(props) =>
    props.$isDescription &&
    `
height: 100px;
width:390px;
      display: block;
      resize: vertical;
      overflow: auto;
    


  `}
`;

export const Headers = styled.div`
  color: var(--yellow);
  font-size: 1.5rem;
  direction: rtl;
  margin-right: 2em;
  margin-top: 2em;
`;
export const ButtonDetails = styled.button`
  width: 90px;
  height: 2.5em;
  margin-left: 2.2em;
  background-color: var(--yellow);
  border: none;
  color: black;
  font-size: 16px;
  border-radius: 0.4em;
  margin-top: 2em;
  margin-bottom: 1.5em;
  margin-right: 2.5em;
`;
export const ButtonDelete = styled(NavLink)`
  width: 156px;
  height: 3.3em;
  background-color: var(--yellow);
  border: none;
  color: black;
  border-radius: 0.4em;
  margin-top: 2em;
  margin-bottom: 1.5em;
  margin-left: 3em;
  text-decoration: none;
`;

export const Button = styled.div`
  display: flex;
  margin-top: 2em;
  justify-content: space-between;
`;
export const ButtonText = styled.div`
  color: black;
  margin-top: 1em;
  margin-left: .6em;
 

`;
