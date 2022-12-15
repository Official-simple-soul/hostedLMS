import React from 'react'
import { Outlet } from 'react-router-dom';
import AdminPageWrapper from '../../layouts/admin/AdminPageWrapper';

const Admin = () => {
  return (
    <div>
      {/* <AdminPageWrapper> */}
        <Outlet />
      {/* </AdminPageWrapper> */}
    </div>
  )
}

export default Admin
