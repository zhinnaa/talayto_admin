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
  width: 160px;
  height: 130px;
  display: flex;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 4em;
  margin-top: 1em;
  border: 2px solid #ccc;

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
  margin-top: 5.5em;
  margin-right: 2em;
  &:hover {
    background-color: #50479f;
  }
`;
export default function Acount({ setHasImages }) {
  const { userData, setUserData } = useContext(StepperContext)
  const [selectedImage, setSelectedImage] = useState("");
  const [attributes, setAttributes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
const [inputTag, setInputTag] = useState("");
const handleTagInputChange = (e) => {
  setInputTag(e.target.value);
};
const handleTagInputKeyPress = (e) => {
  if (e.key === "Enter" && inputTag.trim() !== "") {
    e.preventDefault();
    setTags([...tags, inputTag.trim()]);
    setInputTag("");
  }
};
const removeTag = (index) => {
  const updatedTags = [...tags];
  updatedTags.splice(index, 1);
  setTags(updatedTags);
};



  useEffect(() => {
    console.log(userData)
  }, [userData])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputKeyPress = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault(); // Prevent adding the Enter or comma character
      const newAttribute = inputValue.trim();
      if (newAttribute !== "") {
        setAttributes([...attributes, newAttribute]);
        setInputValue("");
      }
    }
  };
  const removeAttribute = (index) => {
    const updatedAttributes = [...attributes];
    updatedAttributes.splice(index, 1);
    setAttributes(updatedAttributes);
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

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
  
    const formData = new FormData();
    formData.append("image", file);
  console.log(formData);
    try {
      const response = await fetch("http://91.107.160.88:3001/v1/upload", {
        method: "POST",
        body: formData,
      });
  
      if (response.status === 200) {
        const responseData = await response.text(); // Read the response as plain text
  
        // Assuming responseData is a comma-separated list of image URLs
        const image = responseData.split(',');
  
        // Store the image URLs in your userData state or take any other action you require
        console.log("Image URLs:", image);
  
        setUserData((prevUserData) => ({
          ...prevUserData,
          image: image, // Store the image URLs in your userData
        }));
      } 
      else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  
    setSelectedImage(file);
  };
  
     


  return (
    <Novalidate $isFirst>
      <RowForm $isAa>
      <FormGroup $isPic>
          <FormLabel></FormLabel>
          {selectedImage ? (
            <ImagePreview src={URL.createObjectURL(selectedImage)} alt="" />
          ) : (
            <ImagePreview src="" alt="" />
          )}
          <UploadButton htmlFor="imageUpload">آپلود عکس اصلی</UploadButton>
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
        <FormGroup $isDivss>
          <FormLabel>توضیحات</FormLabel>
          <FormInput $isDivss
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
      type="text"
      name="tags"
      value={inputTag}
      onChange={handleTagInputChange}
      onKeyDown={handleTagInputKeyPress}
      placeholder="تگها را وارد کنید و اینتر را بزنید"
    />
  <div className="tags-container" style={{display:"flex",  justifyContent: "space-evenly",color:"white", marginTop:".5em"}}>
    {tags.map((tag, index) => (
      <div key={index} className="tag">
        {tag}
        <button
          className="remove-tag-button" style={{color:"red"}}
          onClick={() => removeTag(index)}
        >
          &times;
        </button>
      </div>
    ))}
   
  </div>
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
