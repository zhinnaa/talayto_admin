import React,{useState,useEffect} from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from '../Axios';
import { Toast } from "../Toast";
import { Button } from "@mui/base";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Container,GlobalStyle,Header,
  HeaderIcon,
  HeaderText,
  HeaderField,
  HeaderButton,
  Menu,
  MenuItems,
  MenuHeader,
  MenuHeaderText,
  MenuHeaderIcon,
  MenuItemsText,
  MenuItemsInput,
  Buttons,
  SubmitButton,
  CancleButton,
  Rightt,
  HeaderThing} from '../../StyleComponent/AddAdmin';
  import NavBar from "../NavBar";

const columns = [
  { id: 'username', label: 'یوزرنیم', minWidth: 50,align:'center' },
  { id: 'permissions', label: 'دسترسی ادمین', minWidth: 50,align:'center' },
  { id: 'delete', label: 'حذف', minWidth:50, align:"center"}

];


export default function AddAdmin() {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const[checkedProducts,setCheckedProducts]=useState(false);
  const[checkedUser,setCheckedUser]=useState(false);
  const[checkedCategory,setCheckedCategory]=useState(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  const handleDelete = (categoryId) => {
    axios.delete(`/product/${categoryId}`)
      .then(function(response){
        console.log("Deleted successfully:", response);
        const newData = data.filter(item => item.id !== categoryId);
        setData(newData);
        if(response.status==200){
          toast.success("محصول با موفقیت حذف شد", {
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
        }
  
        
      })
      .catch(function(error){
        console.error("Error:", error);
        if (error.response) {
          console.log("Response data:", error.response.data);
          console.log("Response status:", error.response.status);
        }
      });
  }
 
  const fetchData = () => {
    axios
      .get("/admin?size=6&page=1")
      .then(function (response) {
        console.log("Fetched data:", response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.error("Error:", error);
        Toast(error.response.data.errorMessage, false);
      });
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const[username,setName]=useState('');
  const[permission,setPermission]=useState('');
  const[password,setPassword]=useState('');

  const handleApiCategory = (e) => {
    e.preventDefault();
  
    const permissions = [];
  
    if (checkedProducts) {
      permissions.push({
        action: "create",
        subject: "Product",
      });
    }
  
    if (checkedUser) {
      permissions.push({
        action: "read",
        subject: "User",
      });
      permissions.push({
        action: "update",
        subject: "User",
      });
      permissions.push({
        action: "delete",
        subject: "User",
      });
    }
  
    if (checkedCategory) {
      permissions.push({
        action: "create",
        subject: "Category",
      });
    }
  
    const actionPermissions = permissions.map(permission => permission.split(' ')[0]);

    axios
      .post("http://api.talayto.com/v1/admin", {
        username: username,
        password: password,
        permissions: actionPermissions,
      })
      .then(function (response) {
        console.log("response:", response);
        if (response.status === 200) {
          toast.success("ادمین با موفقیت اضافه شد", {
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
        }
      })
      .catch(function (error) {
        console.error("Error:", error);
        if (error.response) {
          console.log("Response data:", error.response.data);
          console.log("Response status:", error.response.status);
        }
      });
  };
  
  
  const handleButtonClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <ToastContainer/>
    <Container>
      <GlobalStyle />
      <NavBar />
      <Header>
        <HeaderField>
          <HeaderIcon></HeaderIcon>
          <HeaderText>لیست ادمین ها</HeaderText>
        </HeaderField>
        <HeaderButton onClick={handleButtonClick}><HeaderThing>اضافه کردن ادمین</HeaderThing></HeaderButton>
      </Header>

<Rightt>
    <Paper sx={{ width: '60%', overflow: 'hidden',marginTop:'3.3em',marginLeft:'33%',backgroundColor:'#283046'}}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,backgroundColor:'#343d55',color:'#D0D2D6' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody  style={{ color:'white' }} >
  {data
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row, index) => {
      return (
        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
        {columns.map((column) => {
          if (column.id === 'delete') {
            return (
              <TableCell key={column.id} align={column.align} style={{ color: '#B4B7BD', borderColor: '#161e31' }}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleDelete(row.id)}
                style={{ backgroundColor: '#b31b1b', color: 'white',border:'none' }}
              >
                حذف
              </Button>
            </TableCell>
            );
           
          }
          const value = row[column.id];
          return (
            <TableCell key={column.id} align={column.align} style={{ color: '#B4B7BD', borderColor: '#161e31' }}>
              {column.format && typeof value === 'number' ? column.format(value) : value}
            </TableCell>
          );
        })}
      </TableRow>
      );
    })}
</TableBody>

        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{color:'white'}}
      />
    </Paper>
    </Rightt>
      <Menu menuOpen={menuOpen}>
        <MenuHeader>
        <MenuHeaderText>اضافه کردن ادمین</MenuHeaderText>
        <MenuHeaderIcon></MenuHeaderIcon>
        </MenuHeader>
        <MenuItems>
        <MenuItemsText>یوزرنیم</MenuItemsText>
        <MenuItemsInput  type="text"
        value={username}
        onChange={(e)=>setName(e.target.value)}
        ></MenuItemsInput>
        </MenuItems>
        <MenuItems>
        <MenuItemsText>پسورد</MenuItemsText>
        <MenuItemsInput type="password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
        ></MenuItemsInput>
        </MenuItems>
        <MenuItems>
        <MenuItemsText> دسترسی ادمین</MenuItemsText>
        
        </MenuItems>
        <MenuItems $isPermission>
        <MenuItemsText>اضافه کردن محصول</MenuItemsText>
        <MenuItemsInput $isCheckbox
        type="checkbox"
        checked={checkedProducts}
        onChange={(e)=>setCheckedProducts(e.target.value)}
        ></MenuItemsInput>
        </MenuItems>
        <MenuItems  $isPermission >
        <MenuItemsText> دسترسی به یوزر</MenuItemsText>
        <MenuItemsInput  $isCheckbox1
        type="checkbox"
        checked={checkedUser}
        onChange={(e)=>setCheckedUser(e.target.value)}
        ></MenuItemsInput>
        </MenuItems>
        <MenuItems  $isPermission>
        <MenuItemsText $isCheckbox>دسترسی به کتگوری</MenuItemsText>
        <MenuItemsInput  $isCheckbox2
        type="checkbox"
        checked={checkedCategory}
        onChange={(e)=>setCheckedCategory(e.target.value)}
        ></MenuItemsInput>
        </MenuItems>
        <MenuItems  $isPermission >
        <MenuItemsText> دسترسی به ادمین</MenuItemsText>
        <MenuItemsInput  $isCheckbox3
        type="checkbox"
        checked={checkedUser}
        onChange={(e)=>setCheckedUser(e.target.value)}
        ></MenuItemsInput>
        </MenuItems>
      <Buttons>
        <SubmitButton  onClick={handleApiCategory}>ذخیره</SubmitButton>
        <CancleButton onClick={handleButtonClick}>انصراف</CancleButton>
      </Buttons>
      </Menu>
    </Container>
    </>
  );

}