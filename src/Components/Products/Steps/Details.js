import React,{useState} from 'react';
import { useContext } from 'react';
import { StepperContext } from '../../../Contexts/StepperContext';
import { Novalidate, RowForm, FormGroup, FormLabel, FormInput, Label } from '../../../StyleComponent/AddProducts';

import FormSelect from '../FormSelect';


export default function Details() {
  const { userData, setUserData } = useContext(StepperContext);
  const [selectedOption, setSelectedOption] = useState("yes");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };


  const handleWeightChange = (selectedWeight) => {

    setUserData((prevUserData) => ({
      ...prevUserData,
      weight: selectedWeight,
    }));
  };
 

  const dropdownOptionsWeight = [
    { label:'0.1gr', value: ".1" },
    { label: '0.2gr', value: ".2" },
    { label: '0.3gr', value: ".3" },
    { label:  '0.4gr', value: ".4" },
    { label:  '0.5gr', value: ".5" },
    { label:  '0.6gr', value: ".6" },
    { label:  '0.7gr', value: ".7" },

  ];
  const handleWeightUnitChange = (selectedWeightUnit) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      weightUnit: selectedWeightUnit,
    }));
  };


  const dropdownOptionsWeightUnit = [
    { label: "۱۸ گرم", value: "option 1" },
    { label: "۲۴ گرم", value: "option 2" },
 

  ];

  const handleWageChange = (selectedWage) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      wage: selectedWage,
    }));
  };


  const dropdownOptionsWage = [
    { label: "1.", value: ".1" },
    { label: "2.", value: ".2" },
    { label: "3.", value: ".3" },
    { label: "4.", value: ".4" },
    { label: "5.", value: ".5" },
    { label: "6.", value: ".6" },
    { label: "7.", value: ".7" },

  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleInstallmentChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      installment: {
        ...prevData.installment,
        [name]: value,
      },
    }));
  };

  return (
    <Novalidate>
   
      <RowForm>
      <FormGroup>
          <FormLabel>وزن</FormLabel>
          <FormSelect
          options={dropdownOptionsWeight}
          onChange={(selectedOption) => handleWeightChange(selectedOption.value)}
          value={userData.weight }
          name="weight"
        />
        </FormGroup>
        <FormGroup>
          <FormLabel>وزن واحد</FormLabel>
          <FormSelect
          options={dropdownOptionsWeightUnit}
          onChange={(selectedOption) => handleWeightUnitChange(selectedOption.value)}
          value={userData.weightUnit}
          name="weightUnit"
        />
        </FormGroup>
        <FormGroup>
          <FormLabel>اجرت</FormLabel>
          <FormSelect
          options={dropdownOptionsWage}
          onChange={(selectedOption) => handleWageChange(selectedOption.value)}
          value={userData.wage }
          name="wage"
        />
        </FormGroup>
       
      </RowForm>
      <RowForm $isDiv>
      <FormGroup $isDivs>
          <FormLabel>تعداد</FormLabel>
          <FormInput $isDivs type="text"
            onChange={handleChange}
            value={userData.quantity }
            name="quantity"
            placeholder="" />
        </FormGroup>
        <FormGroup  $isDivs>
          <FormLabel>تخفیف</FormLabel>
          <FormInput $isDivs  type="text"
            onChange={handleChange}
            value={userData.discount }
            name="discount"
            placeholder="" />
        </FormGroup>
       
       

       
      </RowForm>
      <RowForm>
      <Label>محصول قسطی است؟</Label>
        <FormGroup $isInstallment>
        <FormLabel $isInstallment>بله</FormLabel>
        <FormInput $isInstallment type="radio"
          name="installment.available"
          value="yes"
          checked={selectedOption === "yes"}
          onChange={handleOptionChange}
            />
        
        </FormGroup>
        <FormGroup $isInstallment>
        <FormLabel $isInstallment>خیر</FormLabel>
        <FormInput $isInstallment type="radio"
          name="installment.available"
          value="no"
          checked={selectedOption === "no"}
          onChange={handleOptionChange}
             />
        </FormGroup>
      {selectedOption=== "yes" && (
        
        <FormGroup $isSecond>
          <FormLabel $isSecond> حداقل وزن قسط اول 
            <FormInput
              type="number"
              name="installment.minWeight"
              value={userData.installment.minWeight}
              onChange={handleInstallmentChange}
            />
         </FormLabel>
          
        
          <FormLabel $isSeconds>Deadline:
            <FormInput
              type="number"
              name="installment.deadLine"
              value={userData.installment.deadLine}
              onChange={handleInstallmentChange}
            />
          </FormLabel>
        </FormGroup>
      )}
      </RowForm>
      
    </Novalidate>
  );
}
