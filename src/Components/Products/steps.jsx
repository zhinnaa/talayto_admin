import {Novalidate,RowForm,FormGroup,FormLabel,FormInput} from '../../StyleComponent/AddProducts'

const steps = [
    {
      title: "1",
    
      content:(
        <Novalidate>
        <RowForm>
            <FormGroup>
                <FormLabel>نام کاربری</FormLabel>
                <FormInput type="text" placeholder='zhina' ></FormInput>
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
      ),
    },
    {
      title: "2",
     
      content:(
        <Novalidate>
        <RowForm>
            <FormGroup>
                <FormLabel>نام کاربری</FormLabel>
                <FormInput type="text" placeholder='zhina' ></FormInput>
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
      ),
    },
 
  

  ];
  
  export default steps;
  