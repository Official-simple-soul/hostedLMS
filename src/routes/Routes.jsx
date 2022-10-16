import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/authentication/Login';
import SIgnUp from '../pages/authentication/SIgnUp';

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sign-up' element={<SIgnUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes