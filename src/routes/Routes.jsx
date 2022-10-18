import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/authentication/Login';
import NewPassword from '../pages/authentication/NewPassword';
import SIgnUp from '../pages/authentication/SIgnUp';
import VerifyEmail from '../pages/authentication/VerifyEmail';

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sign-up' element={<SIgnUp />} />
        <Route path='/verify-email' element={<VerifyEmail />} />
        <Route path='forgot-password/new-password' element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes