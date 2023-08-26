import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  /* Add your custom styling here */
  width: 90%;
  height: 2.7em;
border: none;
background-color: #283046;
border: 1px solid #DCDCDC;
border-color: #404656;
border-radius: .4em;
padding-right: .8em;
color: white;
margin-top: .5em;
&:focus{
    outline: none;
  border-color: #454292;


 } 
`;

const FormSelect = ({ options, onChange, value, name }) => {
  return (
    <StyledSelect
      onChange={(e) => onChange({ name, value: e.target.value })}
      value={value}
      name={name}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default FormSelect;

