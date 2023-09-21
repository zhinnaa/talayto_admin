
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
} from "../../../StyleComponent/ProductDetail";

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
        thumbnailImage:"",
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
        <AdminImage src={userDetails.thumbnailImage}></AdminImage>
      </RightContainer>
      <Wrapper>
        <Head>
          <ButtonDelete to="/productDetail">
            <ButtonText>بازگشت به صفحه اصلی</ButtonText>
          </ButtonDelete>
          <Headers>اطلاعات محصول</Headers>
        </Head>

        <Wrapper1>
        <UserInfo $isSecond>
            <UserInfoLabel $isCategory>کتگوری</UserInfoLabel>
            <UserInfoInput
             edit={edit}
              value={userDetails.category}
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  category: event.target.value,
                })
              }
            ></UserInfoInput>
          </UserInfo>
          <UserInfo>
            <UserInfoLabel $isTitle>نام محصول</UserInfoLabel>
            <UserInfoInput $isTitle
             edit={edit}
              value={userDetails.title}
              onChange={(event) =>
                setUserDetails({ ...userDetails, title: event.target.value })
              }
            ></UserInfoInput>
          </UserInfo>
         
        </Wrapper1>
        <Wrapper1>
         
          <UserInfo>
            <UserInfoLabel>توضیحات</UserInfoLabel>
            <UserInfoInput $isDescription 
      as="textarea" // Render as a textarea element
      rows={userDetails.description.split('\n').length + 1} // Adjust rows based on content
      value={userDetails.description}
      onChange={event =>
        setUserDetails({ ...userDetails, description: event.target.value })
      }
      edit={edit}
      // Apply larger height styling
    />
          </UserInfo>
         
        </Wrapper1>

        <Wrapper1>
        <UserInfo>
            <UserInfoLabel>تعداد</UserInfoLabel>
            <UserInfoInput
             edit={edit}
              value={userDetails.quantity}
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  quantity: event.target.value,
                })
              }
            ></UserInfoInput>
          </UserInfo>
          
          <UserInfo>
            <UserInfoLabel>وزن واحد</UserInfoLabel>
            <UserInfoInput
             edit={edit}
              value={userDetails.weightUnit}
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  weightUnit: event.target.value,
                })
              }
            ></UserInfoInput>
          </UserInfo>
        </Wrapper1>
        <Wrapper1>
        <UserInfo>
            <UserInfoLabel>اجرت</UserInfoLabel>
            <UserInfoInput
             edit={edit}
              value={userDetails.wage}
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  wage: event.target.value,
                })
              }
            ></UserInfoInput>
          </UserInfo>
        <UserInfo>
            <UserInfoLabel>تخفیف</UserInfoLabel>
            <UserInfoInput
            edit={edit}
              value={userDetails.discount}
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  discount: event.target.value,
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
