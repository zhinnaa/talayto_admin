
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "../../Axios";
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
} from "../../../StyleComponent/UserDetails";
import photo from "../../../Image/Profile Interface-rafiki.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function UserDetails() {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [edit, setEditing] = useState(false);

  useEffect(() => {
    axios
      .get(`/product/${userId}`, {})

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
        "title": userDetails.title,
        "description": userDetails.description,
        "weight": userDetails.weight,
        "weightUnit": userDetails.weightUnit,
        "wage": userDetails.wage,
        "quantity": userDetails.quantity,
        "discount": userDetails.discount,
       
      };
    axios
      .put(`/product/${userId}`, payload, {
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
          <ButtonDelete to="/productDetail">
            <ButtonText>بازگشت به صفحه اصلی</ButtonText>
          </ButtonDelete>
          <Headers>اطلاعات محصول</Headers>
        </Head>

        <Wrapper1>
          <UserInfo>
            <UserInfoLabel>عنوان</UserInfoLabel>
            <UserInfoInput
              value={userDetails.title}
              onChange={(event) =>
                setUserDetails({ ...userDetails, title: event.target.value })
              }
            ></UserInfoInput>
          </UserInfo>
          <UserInfo>
            <UserInfoLabel>توضیحات</UserInfoLabel>
            <UserInfoInput
              value={userDetails.description}
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  description: event.target.value,
                })
              }
            ></UserInfoInput>
          </UserInfo>
        </Wrapper1>
        <Wrapper1>
          <UserInfo>
            <UserInfoLabel>وزن</UserInfoLabel>
            <UserInfoInput
              value={userDetails.weight}
              onChange={(event) =>
                setUserDetails({ ...userDetails, weight: event.target.value })
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
