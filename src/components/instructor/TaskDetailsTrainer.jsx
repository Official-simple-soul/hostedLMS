import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Avatar, DueDate, Calender } from '../../assets'
import { NavLink, Link, Outlet } from "react-router-dom";
import { AiOutlinePlus } from 'react-icons/ai'
// import fileIcon from '../../assets/icons/file2024.svg'
// import cancelIcon from '../../assets/icons/cancel2025.svg'

const TaskDetailsTrainer = () => {
    const { id } = useParams();
    const {
        data: task,
        isPending,
        error,
    } = useFetch("http://localhost:8000/tasks/" + id);
    // const [selectedFile, setSelectedFile] = useState();
    // const [isFilePicked, setIsFilePicked] = useState(false);
    // //   const [dd, setDd] = useState(task.taskDesc)
    // const [isSubmitted, setIsSubmitted] = useState(false);
    const ref = useRef(null);

    //   console.log(task.taskDesc)

    

  return (
    <div>
      {isPending && <div className="text-sm">Loading.....</div>}
      {error && (
        <div className="text-sm bg-red-500 p-6 text-white mt-5">{error}</div>
      )}

      {task && (
        <div>
          <p className="text-sm text-blue-ribbon">
            Tasks / <span className="text-[#808080]">{task.taskTitle}</span>
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-9">
              <NavLink to={`/instructor/task/${task.id}/tasks`} className={( {isActive} ) => isActive ? 'text-xl font-medium text-[#303030] border-b border-[#303030]' : "text-blue-ribbon-500" }>Task</NavLink>
              <NavLink to={`/instructor/task/${task.id}/submissions`} className={( {isActive} ) => isActive ? 'text-xl font-medium text-[#303030] border-b border-[#303030]' : "text-blue-ribbon-500" }>Submissions</NavLink>
            </div>
            <Link 
              to={`/instructor/task/create-new-task/${id}`}
              className="flex items-center gap-2 bg-white text-blue-ribbon border border-blue-ribbon px-4 py-2 rounded-xl text-base"
            >
              <AiOutlinePlus className='text-lg' />
              <p>Edit Task</p>
            </Link>
          </div>

          <Outlet />

        </div>
      )}
    </div>
  )
}

export default TaskDetailsTrainer