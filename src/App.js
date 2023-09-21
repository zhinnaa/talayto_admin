import React, { useState } from 'react';
import DataTables from './Components/Products/AddProducts';
import Dashboard from './Components/Dashboard';
import User from './Components/UserInfo/UserInformation';
import AddUser from './Components/UserInfo/CreateUser'
import Logins from './Components/Login';
import AddCategory from './Components/Category/AddCategory';
import UserDetails from './Components/UserInfo/UserDetails';
import AddAdmin from './Components/Admin/AddAdmin';
import Logout from './Components/Logout'
import GetOrders from './Components/GetOrders';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { UseContextProvider } from './Contexts/StepperContext';
import ProductDetail from './Components/Products/ReadProducts/ProductLists';
import ReadProduct from './Components/Products/ReadProducts/ReadProduct'
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UseContextProvider>
      <BrowserRouter>

            <Routes>
              {isLoggedIn ? (
                <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/GetOrders" element={<GetOrders />} />
              <Route path="/productDetail" element={<ProductDetail />} />
              <Route path="product/:userId" element={<ReadProduct />} />
              <Route path="/FormWizard" element={<DataTables />} />
              <Route path="/Users" element={<User />} />
              <Route path="/AddUser" element={<AddUser />} />
              <Route path="/AddAdmin" element={<AddAdmin />} />
              <Route path="/AddCategory" element={<AddCategory />} />
              <Route path="user/:userId" element={<UserDetails />} />
              <Route path="/datatable" />
              <Route path="/dashboard2" />
              <Route path="/Logout" element={<Logout/>} />
                </>
              ) : (
                <>
                <Route path="/" element={<Logins onLogin={() => setIsLoggedIn(true)} />}/>
                </>
              )}

            </Routes>
          </BrowserRouter>
    </UseContextProvider>
    
  );
}
