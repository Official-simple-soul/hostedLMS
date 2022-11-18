import React from 'react';

import StudentTaskHeader from './StudentTaskHeader';
import StudentTaskTable from './StudentTaskTable';

import './StudentTasks.css';

const StudentTasks = () => {
  return (
    <div className='tasks bg-gray-100 w-[82vw] h-[100vh] ml-60 mr-4'>
        
        <StudentTaskHeader/>
       
       <div className="table">
          <StudentTaskTable/>
       </div>

    </div>
  )
}

export default StudentTasks