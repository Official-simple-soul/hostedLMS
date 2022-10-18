import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/authentication/Login';
import SIgnUp from '../pages/authentication/SIgnUp';
import VerifyEmail from '../pages/authentication/VerifyEmail';

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sign-up' element={<SIgnUp />} />
        <Route path='/sign-up/verify-email' element={<VerifyEmail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes