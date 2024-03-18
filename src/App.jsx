import { Button } from '@material-tailwind/react'
import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Nopage from './components/pages/nopage/Nopage'
import ProductInfo from './components/pages/productInfo/ProductInfo'
import ScrollTop from './components/scrollTop/ScrollTop'
import CartPage from './components/pages/cart/CartPage'
import AllProduct from './components/pages/allProduct/AllProduct'
import Login from './components/pages/registration/Login'
import Signup from './components/pages/registration/Signup'
import UserDashboard from './components/pages/user/UserDashboard'
import AdminDashboard from './components/pages/admin/AdminDashboard'
import AddProductPage from './components/pages/admin/AddProductPage'
import UpdateProduct from './components/pages/admin/UpdateProduct'
import MyState from './context/myState'


const App = () => {
  return (
    <div>
      <MyState>
        <Router>
          <ScrollTop />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/*' element={<Nopage />}></Route>
            <Route path='/productinfo' element={<ProductInfo />}></Route>
            <Route path='/cart' element={<CartPage />}></Route>
            <Route path='/allproduct' element={<AllProduct />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/user-dashboard' element={<UserDashboard />}></Route>
            <Route path='/admin-dashboard' element={<AdminDashboard />}></Route>
            <Route path='/addproduct' element={<AddProductPage />}></Route>
            <Route path='/updateproduct' element={<UpdateProduct />}></Route>
          </Routes>
        </Router>
      </MyState>
    </div>

  )
}

export default App
