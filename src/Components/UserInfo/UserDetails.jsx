
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "../Axios";
import {
  AdminImage,
  Button,
  ButtonDelete,
  ButtonDetails,
  ButtonText,
  Container,
  GlobalStyle,
  Head,
  Headers,
  RightContainer,
  UserInfo,
  UserInfoInput,
  UserInfoLabel,
  Wrapper,
  Wrapper1,
} from "../../StyleComponent/UserDetails";
import photo from "../../Image/Profile Interface-rafiki.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function UserDetails() {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [edit, setEditing] = useState(false);

  useEffect(() => {
    axios
      .get(`/admin/user/${userId}`, {})

      .then((response) => {
        setUserDetails(response.data);
      })

      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, [userId]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }
  const handleClickEdit = () => {
    setEditing(true);
  };
  const handleApiEdit = () => {

    const payload = {
        "walletBalance": userDetails.walletBalance,
        "firstName": userDetails.firstName,
        "lastName": userDetails.lastName,
        "password": userDetails.password,
        "phoneNumber": userDetails.phoneNumber
      };
    axios
      .put(`/admin/user/${userId}`, payload, {
        headers: {
          "access-token": "your-access-token",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setUserDetails(response.data);
        setEditing(false);
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
      .catch((error) => {
        console.error("Error updating user details:", error);
      });
  };

  return (
    <>
    <ToastContainer/>
    <Container>
      <GlobalStyle />
      <RightContainer>
        <AdminImage src={photo}></AdminImage>
      </RightContainer>
      <Wrapper>
        <Head>
          <ButtonDelete to="/Users">
            <ButtonText>بازگشت به صفحه اصلی</ButtonText>
          </ButtonDelete>
          <Headers>اطلاعات یوزر</Headers>
        </Head>

        <Wrapper1>
          <UserInfo>
            <UserInfoLabel> نام خانوادگی</UserInfoLabel>
            <UserInfoInput
              value={userDetails.lastName}
              onChange={(event) =>
                setUserDetails({ ...userDetails, lastName: event.target.value })
              }
            ></UserInfoInput>
          </UserInfo>
          <UserInfo>
            <UserInfoLabel>نام</UserInfoLabel>
            <UserInfoInput
              value={userDetails.firstName}
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  firstName: event.target.value,
                })
              }
            ></UserInfoInput>
          </UserInfo>
        </Wrapper1>
        <Wrapper1>
          <UserInfo>
            <UserInfoLabel>سن</UserInfoLabel>
            <UserInfoInput
              value={userDetails.age}
              onChange={(event) =>
                setUserDetails({ ...userDetails, age: event.target.value })
              }
            ></UserInfoInput>
          </UserInfo>
          <UserInfo>
            <UserInfoLabel>شماره تلفن</UserInfoLabel>
            <UserInfoInput
              value={userDetails.phoneNumber}
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  phoneNumber: event.target.value,
                })
              }
            ></UserInfoInput>
          </UserInfo>
        </Wrapper1>

        <Wrapper1>
          <UserInfo>
            <UserInfoLabel>موجودی طلا</UserInfoLabel>
            <UserInfoInput
              value={userDetails.goldBalance}
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  goldBalance: event.target.value,
                })
              }
            ></UserInfoInput>
          </UserInfo>
          <UserInfo>
            <UserInfoLabel>موجودی حساب</UserInfoLabel>
            <UserInfoInput
              value={userDetails.walletBalance}
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  walletBalance: event.target.value,
                })
              }
            ></UserInfoInput>
          </UserInfo>
        </Wrapper1>
        <Wrapper1>
        <UserInfo>
            <UserInfoLabel>تایید پسورد</UserInfoLabel>
            <UserInfoInput
            type="password"
              value={userDetails.password}
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  password: event.target.value,
                })
              }
            ></UserInfoInput>
          </UserInfo>
        <UserInfo>
            <UserInfoLabel>پسورد</UserInfoLabel>
            <UserInfoInput
            type="password"
              value={userDetails.password}
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  password: event.target.value,
                })
              }
            ></UserInfoInput>
          </UserInfo>
         
        </Wrapper1>
        {edit ? (
          <Button>
            <ButtonDetails onClick={handleApiEdit}>ذخیره</ButtonDetails>
            <ButtonDetails onClick={() => setEditing(false)}>
              انصراف
            </ButtonDetails>
          </Button>
        ) : (
          <Button>
            <ButtonDetails onClick={handleClickEdit}>ویرایش</ButtonDetails>
          </Button>
        )}
      </Wrapper>
    </Container>
    </>
    // <div>
    //   <h2>User Details</h2>
    //   <p>Name: {userDetails.firstName} {userDetails.lastName}</p>
    //   <p>Phone Number: {userDetails.phoneNumber}</p>
    //   {/* Display other user details as needed */}
    // </div>
  );
}

export default UserDetails;
