import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { Outlet } from 'react-router-dom'

const TaskTrainer = () => {
  // NAVIGATE to the src/data folder the Run json server in a new terminal with the command below
  // json-server --watch db.json --port 8000

  const id = 0;
  
  return (
    <div>
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex items-center gap-9">
          <NavLink to='/instructor/task/tasks' className={( {isActive} ) => isActive ? 'text-xl font-medium text-[#303030] border-b border-[#303030]' : "text-blue-ribbon-500" }>Task</NavLink>
          <NavLink to='/instructor/task/draft' className={( {isActive} ) => isActive ? 'text-xl font-medium text-[#303030] border-b border-[#303030]' : "text-blue-ribbon-500" }>Drafts</NavLink>
        </div>

        <Link 
          to={`/instructor/task/create-new-task`}
          className="flex items-center gap-2 bg-blue-ribbon-400 text-white w-[176px] px-4 py-2 rounded-xl text-base"
        >
          <AiOutlinePlus className='text-lg' />
          <p>Add New Task</p>
        </Link>
      </div>

      <Outlet />

    </div>
  )
}

export default TaskTrainer