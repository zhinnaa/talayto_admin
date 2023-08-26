
import { Button } from "@mui/base";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React,{useState,useEffect} from "react";
import {
  Container,
  GlobalStyle,
  Header,
  HeaderIcon,
  HeaderText,HeaderField,
  HeaderButton,
  Menu,
  MenuItems,
  MenuHeader,
  MenuHeaderText,
  MenuHeaderIcon
  ,MenuItemsText,
  MenuItemsInput,
  Buttons,
  SubmitButton,CancleButton
} from "../../StyleComponent/AddCategory";

import NavBar from "../NavBar";
const columns = [
  { id: 'category', label: 'کتگوری', minWidth: 50,align:'center' },
  { id: 'slug', label: 'اسلاگ', minWidth: 50,align:'center' },
  { id: 'parent', label: 'دسته', minWidth: 50,align:'center' },
  { id: 'delete', label: 'delete', minWidth:50, align:"center"}

];



export default function AddCategory() {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const fetchData = () => {
    axios
      .get("/category?size=50&page=1")
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
  const[name,setName]=useState('');
  const[category,setCategory]=useState('');
  const[parent,setParent]=useState('');
  const[slug,setSlug]=useState('');

  const handleApiCategory=(e)=>{
    e.preventDefault();

    axios.post('http://api.talayto.com/v1/category',{
      name:name,
      category:category,
      parent:parent,
      slug:slug
    })
    .then(function(response){
      console.log("response:",response);
      if(response.status==200){
        toast.success("کتگوری با موفقیت اضافه شد", {
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
     })
    

  }
  const handleButtonClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDelete = (categoryId) => {
    axios.delete(`/category/${categoryId}`)
      .then(function(response){
        console.log("Deleted successfully:", response);
        const newData = data.filter(item => item.id !== categoryId);
        setData(newData);
  
        toast.success("کتگوری با موفقیت حذف شد", {
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
      .catch(function(error){
        console.error("Error:", error);
        if (error.response) {
          console.log("Response data:", error.response.data);
          console.log("Response status:", error.response.status);
        }
      });
  }
  
   
  
  
 
  
  return (
    <>
    <ToastContainer/>
    <Container>
      <GlobalStyle />
      <NavBar />
      <Header>
        <HeaderField>
          <HeaderIcon></HeaderIcon>
          <HeaderText>کتگوری ها </HeaderText>
        </HeaderField>
        <HeaderButton onClick={handleButtonClick}>اضافه کردن کتگوری</HeaderButton>
      </Header>


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
                  Delete
                </Button>
              </TableCell>
            );
           
          }
          const value = row[column.id];
          return (
            <TableCell key={column.id} align={column.align} style={{ color: '#B4B7BD', borderColor: '#161e31' }}>
              {column.format && typeof value === 'number' ? column.format(value) : value }
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
      <Menu menuOpen={menuOpen}>
        <MenuHeader>
        <MenuHeaderText>اضافه کردن کتگوری</MenuHeaderText>
        <MenuHeaderIcon></MenuHeaderIcon>
        </MenuHeader>
        <MenuItems>
        <MenuItemsText>اسم</MenuItemsText>
        <MenuItemsInput  type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        ></MenuItemsInput>
        </MenuItems>
        <MenuItems>
        <MenuItemsText>کتگوری</MenuItemsText>
        <MenuItemsInput type="text"
         value={category}
         onChange={(e)=>setCategory(e.target.value)}
        ></MenuItemsInput>
        </MenuItems>
        <MenuItems>
        <MenuItemsText>دسته</MenuItemsText>
        <MenuItemsInput type="text"
        value={parent}
        onChange={(e)=>setParent(e.target.value)}
        ></MenuItemsInput>
        </MenuItems>
        <MenuItems>
        <MenuItemsText>اسلاگ</MenuItemsText>
        <MenuItemsInput type="text"
        value={slug}
        onChange={(e)=>setSlug(e.target.value)}
        ></MenuItemsInput>
        </MenuItems>
      <Buttons>
        <SubmitButton  onClick={handleApiCategory}>Submit</SubmitButton>
        <CancleButton onClick={handleButtonClick}>Cancle</CancleButton>
      </Buttons>
      </Menu>
    </Container>
    </>
  );
}
