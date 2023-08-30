
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
export default function Final() {
    const { userData, setUserData } = useContext(StepperContext);
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
  return (
    <Novalidate>
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
  )
}
