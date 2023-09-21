import {
  GlobalStyle,
  Container,
  Header,
  HeaderText,
  HeaderIcon,
  Main,
  InputText,
  Inputs,
  FormField,
  FormGroup,
  FormMain,
  Button,
} from "../../StyleComponent/CreateUser";
import NavBar from "../NavBar";
import * as React from "react";
import axios from "../Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";

export default function CreateUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [phonenum, setPhone] = useState("");
  const [walletBalance, setwalletBalance] = useState("");
  const [goldBalance, setgoldBalance] = useState("");
  const [password, setPassword] = useState("");


  const [userData, setUserData] = useState({
    province: "",
    city: "",
    address: "",
    postalCode: "",
    plaque: "",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [id]: value,
    }));
  };

  const handleAPICall = (e) => {
    e.preventDefault();

    axios
      .post("/admin/user", {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phonenum,
        age: age,
        addresses: [userData], 
        password: password,
        walletBalance: walletBalance,
      })
      .then(function (response) {
        console.log("response:", response);
        
          toast.success("یوزر با موفقیت اضافه شد", {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            rtl: true,
          });
       
        
       
        
      })
      .catch(function (error) {
        toast.error("خطایی رخ داده است ", {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          rtl: true,
        });
  
      });
  };

  return (
    <>
     <ToastContainer/>
      <Container>
        <NavBar />
        <GlobalStyle />

        <Header>
          <HeaderIcon></HeaderIcon>
          <HeaderText>اضافه کردن کاربر</HeaderText>
        </Header>
        <Main>
          <FormField>
            <FormGroup>
              <FormMain>
                <InputText>نام</InputText>
                <Inputs
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormMain>

              <FormMain>
                <InputText>نام خانوادگی</InputText>
                <Inputs
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormMain>
            </FormGroup>

            <FormGroup>
              <FormMain>
                <InputText>سن</InputText>
                <Inputs value={age} onChange={(e) => setAge(e.target.value)} />
              </FormMain>

              <FormMain>
                <InputText>شماره تلفن</InputText>
                <Inputs
                  type="tel"
                  value={phonenum}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormMain>
            </FormGroup>
            <FormGroup>
              <FormMain>
                <InputText>موجودی حساب</InputText>
                <Inputs
                  value={walletBalance}
                  onChange={(e) => setwalletBalance(e.target.value)}
                />
              </FormMain>
              <FormMain>
                <InputText>موجودی طلا</InputText>
                <Inputs
                  value={goldBalance}
                  onChange={(e) => setgoldBalance(e.target.value)}
                />
              </FormMain>
            </FormGroup>
            <FormGroup>
              <FormMain>
                <InputText>پسورد</InputText>
                <Inputs
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormMain>
              <FormMain>
                <InputText>استان</InputText>
                <Inputs
                  required
                  type="text"
                  id="province"
                  value={userData.province}
                  onChange={handleInputChange}
                />
              </FormMain>
            </FormGroup>
          
              <FormGroup >
               
                <FormMain>
                  <InputText>شهر</InputText>
                  <Inputs
                  
                    id="city"
                    value={userData.city}
                    onChange={handleInputChange}
                  />
                </FormMain>
                <FormMain>
                  <InputText>ادرس</InputText>
                  <Inputs
                   id="address"
                    value={userData.address}
                    onChange={handleInputChange}
                  />
                </FormMain>
              </FormGroup>
              <FormGroup >
               
                <FormMain>
                  <InputText>پلاک</InputText>
                  <Inputs
                   id="plaque"
                    value={userData.plaque}
                    onChange={handleInputChange}
                  />
                </FormMain>
                <FormMain>
                  <InputText>کد پستی</InputText>
                  <Inputs
                   id="postalCode"
                    value={userData.postalCode}
                    onChange={handleInputChange}
                  />
                </FormMain>
              </FormGroup>
         

            <Button onClick={handleAPICall}> ثبت اطلاعات</Button>
          </FormField>
        </Main>
      </Container>
    </>
  );
}
