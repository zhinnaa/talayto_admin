import React, { useState } from "react";
import {
  Novalidate,
  RowForm,
  FormGroup,
  FormLabel,
  FormInput,wrapper
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
  width: 80px;
  height: 120px;
  display: flex;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 3.2em;
  border: 2px solid #ccc;
  margin-bottom: 2em;
`;
const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
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
  margin-top: 8em;
  margin-right: 2em;
  &:hover {
    background-color: #50479f;
  }
`;
export default function Acount({ setHasImages }) {
  const { userData, setUserData } = useContext(StepperContext)
  const [selectedImages, setSelectedImages] = useState([]);


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


  const dropdownOptions = [
    { label: "انگشتر", value: "انگشتر" },
    { label: "گردنبند", value: "گردنبند" },
    { label: "دستبتد", value: "دستبند" },
  ];

  const handleImageChange =async (e) => {
   
    const files = e.target.files;
    const newSelectedImages = [...selectedImages];

    for (const file of files) {
      newSelectedImages.push(file);
    }
    
    setSelectedImages(newSelectedImages);
    setHasImages(true);
    const formData = new FormData();
    for (const image of newSelectedImages) {
      formData.append("image", image, image.name);
    }

 

    try {
      const requestOptions = {
        method: "POST",
        body: formData,
        redirect: "follow",
      };
  
      const response = await fetch("http://91.107.160.88:3001/v1/upload", requestOptions);
  
      if (response.ok) {
        console.log("Images uploaded successfully!");
        const result = await response.text();
        console.log(result);
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
        <FormGroup>
          <FormLabel></FormLabel>
        </FormGroup>
      </RowForm>
      <RowForm>
      <FormGroup $isPic>
  <FormLabel></FormLabel>
  <FlexContainer>
    {selectedImages.map((image, index) => (
      <ImagePreview key={index} src={URL.createObjectURL(image)} alt="" />
    ))}
  </FlexContainer>
  <UploadButton htmlFor="imageUpload">اپلود عکس</UploadButton>
  <FileInput
    type="file"
    id="imageUpload"
    name="image"
    accept="image/*"
    multiple
    onChange={handleImageChange}
  />
</FormGroup>


      </RowForm>
     
       
    </Novalidate>
  );
}
