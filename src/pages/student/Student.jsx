import React from 'react'
import { Outlet } from 'react-router-dom';
import StudentPageWrapper from '../../layouts/student/StudentPageWrapper'

const Student = () => {
  return (
    <div>
      <StudentPageWrapper>
        <Outlet />
      </StudentPageWrapper>
    </div>
  )
}

export default Student