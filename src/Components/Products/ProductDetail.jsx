
import {  Container,GlobalStyle,HeaderConst,HeaderConstIcons,HeaderConstRight,HeaderConstText,AddUserText } from '../../StyleComponent/UserInfo'
import { useEffect } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import * as React from "react";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import NavBar from '../NavBar';
import axios from '../Axios';
import { Toast } from "../Toast";
import { Button } from "@mui/base";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';


const columns = [
  { id: 'title', label: 'عنوان', minWidth: 50,align:'center' },
  { id: 'description', label: 'توضیحات', minWidth: 50,align:'center' },
  { id: 'quantity', label: 'تعداد', minWidth: 50,align:'center' },
  { id: 'discount', label: 'تخفیف', minWidth: 50,align:'center' },
  { id: 'weightUnit', label: 'وزن واحد', minWidth: 50,align:'center'  },
  { id: 'wage', label: 'اجرت', minWidth: 50,align:'right'  },
  { id: 'addresses', label: 'ادرس', minWidth: 50, align: 'center' },
  { id: 'delete', label: 'delete', minWidth:50, align:"center"}
];






export default function ProductDetail() {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();
  const [selectedUserId, setSelectedUserId] = React.useState(null);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const fetchData = () => {
    axios
      .get("/product?size=20&page=1")
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
  

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
    <ToastContainer/>
   <Container>
    <GlobalStyle/>
    <NavBar/>
    <HeaderConst>
     <HeaderConstRight>
      <HeaderConstIcons></HeaderConstIcons>
      <HeaderConstText>نشان دادن محصولات</HeaderConstText>
     </HeaderConstRight>
  
    </HeaderConst>

    <Paper sx={{ width: '77%', overflow: 'hidden',marginTop:'3.3em',marginLeft:'1.5em',backgroundColor:'#283046'}}>
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
      

      const handleRowClick = () => {
        setSelectedUserId(row.id); 
        navigate(`/user/${row.id}`); 
      };
      return (
        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
        {columns.map((column) => {
          if (column.id === 'delete') {
            return (
              <TableCell key={column.id} align={column.align}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDelete(row.id)}
                >
                  Delete
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

   </Container>
   </>
  )
}
