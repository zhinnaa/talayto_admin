import React from "react";
import { useState } from "react";
import x from "../Image/login-v2-dark.svg";
import "../App.css";
import axios from './Axios';
import { Toast } from "./Toast";
import { ToastContainer } from "react-toastify";
import {
  Container,
  LeftContainer,
  RightContainer,
  GlobalStyle,
  AdminImage,
  Form,
  Input,
  HeaderText,
  FormHeader,
  HeaderIndex,
  Password,
  InputRemember,
  CheckboxContainer,
  Label,
  LeftForm,
  SigninButton,
 User,
 Textt,

} from "../StyleComponent/LoginUi";

const Login = ({onLogin}) => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const handleSubmit =  (e) => {
    e.preventDefault();
    axios.post("/admin/login?=", {username:email,password:password})
    .then(function(response){
      console.log("response:",response)
      if(response.status===200){
        localStorage.setItem('access-token', response.data.accessToken);
         localStorage.setItem('refresh-token', response.data.refreshToken); 
         const login= onLogin();
         Toast("you are logged in",true);
      }
    })
    .catch(function(error){
      console.error('Error:',error);
      Toast(error.response.data.message,false);
     
    })
   
   
      
  };
  
if(localStorage.getItem('access-token')){
  const login= onLogin()
}
  return (
    <>
     <ToastContainer/>
    <Container>
      <GlobalStyle />
      <LeftContainer>
        <LeftForm>
          <HeaderText>
            <h1 style={{fontSize:"1.4rem"}}>خوش آمدید</h1>
          </HeaderText>
          <HeaderIndex>به اکانت خود وارد شوید</HeaderIndex>
          <Form onSubmit={handleSubmit}>
            <FormHeader>
            
              <User>یوزرنیم</User>
            </FormHeader>
            <Input
              type="text"
              placeholder=""
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></Input>
      
            <FormHeader>
              <Password>کلمه عبور</Password>
            </FormHeader>
            <Input
              type="password"
              placeholder="****"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
           
            ></Input>
           
          

            <SigninButton  onClick={handleSubmit} ><Textt>ورود</Textt></SigninButton>
    
          </Form>
        </LeftForm>
      </LeftContainer>
      <RightContainer>
        <AdminImage src={x} />
      </RightContainer>
    </Container>
    </>
  );
};
export default Login;
