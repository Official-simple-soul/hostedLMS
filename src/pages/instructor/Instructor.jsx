import React from 'react'
import { Outlet } from 'react-router-dom';
import InstructorPageWrapper from '../../layouts/instructor/InstructorPageWrapper';

const Instructor = () => {
  return (
    <div>
      {/* <InstructorPageWrapper> */}
        <Outlet />
      {/* </InstructorPageWrapper> */}
    </div>
  )
}

export default Instructor