import React from 'react'
import AdminNav from './AdminNav'
import CurriculumAdmin from './CurriculumAdmin'
import Sidebar from './Sidebar'

const AdminDashboard = () => {
  return (
    <div className='bg-[#F5F5F5] flex '>
      <Sidebar/>
     <div className='flex items-center ml-[24px] mr-[24px] mt-[12px] flex-col w-[100%]'>
       <AdminNav/>
       <CurriculumAdmin/>
     </div>
    </div>
// import AdminPageWrapper from '../../../layouts/admin/AdminPageWrapper'

// const AdminDashboard = () => {
//   return (
//     <AdminPageWrapper>AdminDashboard</AdminPageWrapper>
  )
}

export default AdminDashboard