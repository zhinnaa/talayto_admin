
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import '../App.css'
export const GlobalStyle = createGlobalStyle`
  body {
 padding: 0;
 margin: 0;
 box-sizing: border-box;
 font-family: 'samim';
 
  }
`;


export const Container=styled.div`
width:100%;
 height:54em; 
display:flex;

`;
 export const AdminImage=styled.img`

 max-width: 100%;
  height: auto;
  margin-top: 11em;
  margin-left: 4em;
  background-image: url(${props => props.src});
`;

 
export const RightContainer=styled.div`
width: 67%;
background-color:#161D31;
@media (max-width:1217px) {
    width: 62%;
}
@media (max-width:1050px) {
  display: none;
}
`;


export const LeftContainer=styled.div`
width:34%;
background-color:#283046;
display: flex;
/* justify-content: center;
align-items: center; */
flex-direction: column;
@media (max-width:1217px) {
    width: 39%;

}
@media (max-width:1050px) {
  display: block;
  width: 100%;
}
`;

export const LeftForm=styled.div`
padding: 6.5em !important;
margin-top: 5em;
@media (max-width:1050px) {
  
  width: 60%;
margin-left:auto;
margin-right: auto;
}
@media(max-width:480px){
  width: 60%;
}
`;

export const HeaderText=styled.div`
font-size: 1.4rem;
font-weight: 800;
direction: rtl;
color: #D0D2D6;
@media (min-width:992px) {
    font-size: 1.2rem;
}
@media(max-width:480px){
margin-right: 2.5em;

}
`;

export const HeaderIndex=styled.div`
font-size: 1.1rem;
direction: rtl;
color: #D0D2D6;
margin-bottom: 2em;
@media(max-width:480px){
margin-right: 3.2em;
}
`
export const Form=styled.form`
 display: flex;
flex-direction: column;

`;
export const FormHeader=styled.div`

font-size: .8rem;
direction: rtl;
display: flex;
justify-content: space-between;


` 
export const Password=styled.p`
color: #D0D2D6;
font-size: 1.2rem;
`;
export const User=styled.p`
color: #D0D2D6;
font-size: 1.2rem;
`

  export const Forgot=styled.p`
color: #7367F0;
font-size: .8rem;
font-weight: 400;
`;

export const Input=styled.input`
  /* width: 90%;  
margin-left: 2em; */
height: 2rem;
background-color:#283046;
border: 1px solid #B4B7BD;
border-color: #4a536a;
color: #B4B7BD;
 margin-bottom: 1em; 
 border-radius: .3em;
 padding-left: 1em;
 font-size: .8em;

  &:focus{
    outline: none;
  border-color: #7367F0;


 } 
`;
 export const CheckboxContainer = styled.div`
  display:flex;
  justify-content: right;
  /* vertical-align: middle; */
  direction: rtl;

`;

 export const Label = styled.label`
  margin-right: 10px;
  color: #D0D2D6;
  font-size:1.1rem;
`;

 export const InputRemember = styled.input`
  /* display: block; */
  /* margin-top: 10px; */
  /* padding: 10px; */
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color:#283046 ;
`;
export const SigninButton=styled.button`
height: 2.5rem;
width: 100%;
margin-top: 1.2rem;
border-radius: 0.358rem;
color: white;
font-weight: 400;
border-color: #7367F0 !important;
background-color: #7367F0 !important;
border: 1px solid #404656;

`
 export const ErrorMessage = styled.p`
  color: red;
  /* margin-top: 10px; */
  font-size:.8rem;
  margin-left: 1em;
  @media (max-width:1050px) {
  
  font-size: 0.9rem;
  margin-left: 4em;
}
@media (max-width:900px) {
  
  font-size: 0.7rem;
  margin-left: 3em;
}
@media (max-width:480px) {
  font-size: 0.7rem;
  margin-left: 3em;
}
`;
export const error=styled.div`
color: red;
font-size: .8rem; 

`