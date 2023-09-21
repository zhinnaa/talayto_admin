
import {  Container,GlobalStyle,HeaderConst,HeaderConstIcons,HeaderConstRight,HeaderConstText,AddUserText } from '../StyleComponent/TopProduct'
import { useEffect,useState } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import * as React from "react";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from '../Components/Axios';
import { Toast } from "../Components/Toast";
import { Button } from "@mui/base";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const columns = [
  { id: 'title', label: 'نام محصول', minWidth: 50,align:'center' },
  { id: 'weight', label: 'وزن', minWidth: 50,align:'center'  },
  { id: 'totalPrice', label: 'قیمت کل', minWidth: 50,align:'center'  },
  { id: 'finalPrice', label: 'قیمت نهایی', minWidth: 50,align:'center'  },


];


export default function TopProducts() {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(0);
 
  const [size, setSize] = useState("10000");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();
  const [selectedUserId, setSelectedUserId] = React.useState(null);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  useEffect(() => {
    axios
      .get(`/filter?sell=true`)
      .then(function (response) {
        console.log("Fetched data:", response.data);
        
        setData(response.data);
      })
      .catch(function (error) {
        console.error("Error:", error);
        Toast(error.response.data.errorMessage, false);
      });
  }, [size]);

        
    
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
    <ToastContainer/>
   <Container>
    <GlobalStyle/>
   <HeaderConst>
    <HeaderConstText>پرفروش ترین محصولات</HeaderConstText>
   </HeaderConst>

    <Paper sx={{ width: '87%', overflow: 'hidden',marginTop:"1em",backgroundColor:'#283046'}}>
      <TableContainer sx={{ maxHeight: 370 }}>
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
          <TableBody style={{ color: 'white' }}>
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
                    
                    style={{ backgroundColor: '#b31b1b', color: 'white', border: 'none' }}
                  >
                    حذف
                  </Button>
                </TableCell>
              );
            } else if (column.id === 'thumbnailImage') {
              return (
                <TableCell key={column.id} align={column.align}>
                {column.format(row.thumbnailImage)}
              </TableCell>
              );
            } else {
              const value = row[column.id];
              return (
                <TableCell key={column.id} align={column.align} style={{ color: '#B4B7BD', borderColor: '#161e31' }}>
                  {column.format && typeof value === 'number' ? column.format(value) : value}
                </TableCell>
              );
            }
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
