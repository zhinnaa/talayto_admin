import React from 'react'
import {Novalidate,RowForm,FormGroup,FormLabel,FormInput} from '../../../StyleComponent/AddProducts'
export default function Final() {
  return (
    <Novalidate>
    <RowForm>
        <FormGroup>
            <FormLabel>کمیت</FormLabel>
            <FormInput type="text" placeholder='' ></FormInput>
        </FormGroup>
        <FormGroup>
            <FormLabel>ایمیل</FormLabel>
            <FormInput type="text" placeholder='zhina.ramezani@gmail.com' ></FormInput>
        </FormGroup>
    </RowForm>
    <RowForm>
        <FormGroup>
            <FormLabel>پسورد</FormLabel>
            <FormInput type="password" placeholder='****' ></FormInput>
        </FormGroup>
        <FormGroup>
            <FormLabel>تایید پسورد</FormLabel>
            <FormInput type="password" placeholder='****' ></FormInput>
        </FormGroup>
    </RowForm>
</Novalidate>
  )
}
