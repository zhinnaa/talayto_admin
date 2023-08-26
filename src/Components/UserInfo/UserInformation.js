
import { AddUserButton, Container,GlobalStyle,HeaderConst,HeaderConstIcons,HeaderConstRight,HeaderConstText,AddUserText } from '../../StyleComponent/UserInfo'
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
import { useNavigate } from 'react-router-dom';
const columns = [
  { id: 'firstName', label: 'نام', minWidth: 50,align:'center' },
  { id: 'lastName', label: 'نام خانوادگی', minWidth: 50,align:'center' },
  { id: 'phoneNumber', label: 'شماره تلفن', minWidth: 50,align:'center' },
  { id: 'age', label: 'سن', minWidth: 50,align:'center' },
  { id: 'walletBalance', label: 'موجودی حساب', minWidth: 50,align:'center'  },
  { id: 'goldBalance', label: 'موجودی طلا', minWidth: 50,align:'right'  },
  { id: 'addresses', label: 'ادرس', minWidth: 50, align: 'center' },
  
];


export default function DataTable() {
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
      .get("/admin/user?size=60&page=1")
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
  return (
   <Container>
    <GlobalStyle/>
    <NavBar/>
    <HeaderConst>
     <HeaderConstRight>
      <HeaderConstIcons></HeaderConstIcons>
      <HeaderConstText>کاربران</HeaderConstText>
     </HeaderConstRight>
      <AddUserButton to="/AddUser"><AddUserText>اضافه کردن کاربر</AddUserText></AddUserButton>
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
        <TableRow hover role="checkbox" tabIndex={-1} key={index} onClick={handleRowClick} >
        {columns.map((column) => {
          if (column.id === 'addresses') {
            const addresses = row[column.id] || [];
            const formattedAddresses = addresses.map((address, index) => (
              <div key={index}>
                <div>{`${address.province}, ${address.city}`}</div>
                <div>{address.address}</div>
                <div>{`کد پستی: ${address.postalCode}, پلاک: ${address.plaque}`}</div>
              </div>
              ));
            return (
              <TableCell key={column.id} align={column.align} style={{ color: '#B4B7BD', borderColor: '#161e31' }}>
                {formattedAddresses}
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
  )
}
