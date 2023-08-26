import React, { useState } from "react";
import {
  Novalidate,
  RowForm,
  FormGroup,
  FormLabel,
  FormInput,
} from "../../../StyleComponent/AddProducts";
import { StepperContext} from "../../../Contexts/StepperContext";
import FormSelect from "../FormSelect";
import styled from "styled-components";
import { useContext } from "react";
import { useEffect } from "react";

const FileInput = styled.input`
  display: none;
`;

const ImagePreview = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 3.2em;
  border: 2px solid #ccc;
  margin-bottom: 2em;
`;

const UploadButton = styled.label`
  display: inline-block;
  padding: 10px 20px;
  background-color: #7267e3;
  color: #fff;
  width: 200px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out;
  text-align: center;
  &:hover {
    background-color: #50479f;
  }
`;
export default function Acount() {
  const { userData, setUserData } = useContext(StepperContext)
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    console.log(userData)
  }, [userData])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCategoryChange = (selectedCategory) => {

    setUserData((prevUserData) => ({
      ...prevUserData,
      category: selectedCategory,
    }));
  };

  // Define your dropdown options
  const dropdownOptions = [
    { label: "انگشتر", value: "option1" },
    { label: "گردنبند", value: "option2" },
    { label: "دستبتد", value: "option3" },
  ];

  const handleImageChange =async (e) => {
    console.log(e)
    const file = e.target.files[0];
    setSelectedImage(file);
    console.log(file)

    const formData = new FormData();
  
    formData.append("image", file);

    for (var key of formData.entries()) {
      console.log(key[0] + ', ' + key[1]);
  }

    setUserData((prevUserData) => ({
      ...prevUserData,
      image: file,
    }));

    try {
      const response = await fetch("http://91.107.160.88:3001/v1/upload", {
        method: "POST",

        body: (formData)
      });
  
      if (response.status==200) {
        console.log("Product added successfully!");
       
      } else {
        console.error("Error:", response.status);

      }
    } catch (error) {
      console.error("Error:", error);
    
    }
  
  
    
  };


  return (
    <Novalidate $isFirst>
      <RowForm>
        <FormGroup $isPic>
          <FormLabel></FormLabel>
          {selectedImage ? (
            <ImagePreview src={URL.createObjectURL(selectedImage)} alt="" />
          ) : (
            <ImagePreview src="" alt="" />
          )}
          <UploadButton htmlFor="imageUpload">اپلود عکس</UploadButton>
          <FileInput
            type="file"
            id="imageUpload"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </FormGroup>
      </RowForm>
      <RowForm $isA>
        <FormGroup>
          <FormLabel>عنوان</FormLabel>
          <FormInput
            type="text"
            onChange={handleChange}
            value={userData.title}
            name="title"
            placeholder="عنوان"
          ></FormInput>
        </FormGroup>
        <FormGroup $isDiv>
          <FormLabel>توضیحات</FormLabel>
          <FormInput
            type="text"
            onChange={handleChange}
            value={userData.description}
            name="description"
            placeholder=""
          ></FormInput>
        </FormGroup>
      </RowForm>

      <RowForm $isA>
        <FormGroup>
          <FormLabel>تگ</FormLabel>
          <FormInput
            onChange={handleChange}
            value={userData.tags}
            name="tags"
            type="text"
          ></FormInput>
        </FormGroup>
        <FormGroup $isDiv>
          <FormLabel>کتگوری</FormLabel>
          <FormSelect
            options={dropdownOptions}
            onChange={(selectedOption) =>
              handleCategoryChange(selectedOption.value)
            }
            value={userData.category }
            name="category"
          />
        </FormGroup>
      </RowForm>
    </Novalidate>
  );
}
