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

} from "../StyleComponent/LoginUi";

const Login = ({onLogin}) => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  // const handleSubmit = async (e) => {
  //   console.log("Form submitted!");
  //   e.preventDefault();
  //   if (!email) {
  //     setEmailError("ایمیل خود را وارد کنید");
  //   } else if (!isValidEmail(email)) {
  //     setEmailError("ایمیل را به درستی وارد کنید");
  //   }

  //   if (!password) {
  //     setPasswordError("پسورد خود را وارد کنید");
  //   }

  //   if (!email || !isValidEmail(email) || !password) {
  //     return;
  //   }

  //   try {
  //     const response = await fetch(server);
  //     const server = await response.json();

  //     const { users } = server;
  //     const user = users.find(
  //       (user) => user.email === email && user.password === password
  //     );
  //     if (user) {
  //     } else {
  //       setError("ایمیل یا پسورد نادرست است");
  //     }
  //   } catch (error) {
  //     setError("An error occurred. Please try again later.");
  //   }
  // };
  // const isValidEmail = (email) => {
  //   // Simple email validation regex
  //   const regex = /^\S+@\S+\.\S+$/;
  //   return regex.test(email);
  // };

  // const submitButton = () => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     username: email,
  //     password: password,
  //   });

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch("http://31.7.75.16:3001/v1/admin/login", requestOptions)
  //   .then((response) => response.json())
  //   .then((result) => {
  //     if (result.success) {
  //       // Login successful, set isLoggedIn to true
  //       onLogin();
  //     } else {
  //       // Handle login failure, show error message, etc.
  //     }
  //   })
     

  //     .catch((errors) => {
       
       
  //     }

  //     );
  // };
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
            <h2>خوش آمدید</h2>
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
              placeholder="***"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
           
            ></Input>
           
          
            <CheckboxContainer>
              <InputRemember type="checkbox" />
              <Label htmlFor="remember-me">مرا بخاطر بسپار</Label>
            
            </CheckboxContainer>
            <SigninButton  onClick={handleSubmit} >ورود</SigninButton>
    
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
