import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { Outlet } from 'react-router-dom'

const AdminTask = () => {
    const id = 0;
  
    return (
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-9">
            <NavLink to='/admin/task/tasks' className={( {isActive} ) => isActive ? 'text-xl font-medium text-[#303030] border-b border-[#303030]' : "text-blue-ribbon-500" }>Task</NavLink>
            <NavLink to='/admin/task/draft' className={( {isActive} ) => isActive ? 'text-xl font-medium text-[#303030] border-b border-[#303030]' : "text-blue-ribbon-500" }>Drafts</NavLink>
          </div>
          <Link 
            to={`/admin/task/create-new-task/${id}`}
            className="flex items-center gap-2 bg-blue-ribbon-400 text-white px-4 py-2 rounded-xl text-base"
          >
            <AiOutlinePlus className='text-lg' />
            <p>Add New Task</p>
          </Link>
        </div>
  
        <Outlet />
  
      </div>
    )
}

export default AdminTask