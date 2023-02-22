import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
// import { Avatar, DueDate, Calender } from '../../assets'
import { NavLink, Link, Outlet } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
// import fileIcon from '../../assets/icons/file2024.svg'
// import cancelIcon from '../../assets/icons/cancel2025.svg'

const TaskDetailsAdmin = () => {
    const { id } = useParams();
    const {
        data: task,
        isPending,
        error,
    } = useFetch("http://localhost:8000/tasks/" + id);
    const { data: submissions } = useFetch("http://localhost:8000/submissions");
    // const [edit, setEdit] = useState();
    // const [isFilePicked, setIsFilePicked] = useState(false);
    // //   const [dd, setDd] = useState(task.taskDesc)
    // const [isSubmitted, setIsSubmitted] = useState(false);
    // const ref = useRef(null);

    //   console.log(task.taskDesc)

    const setData = (data) => {
        // console.log(data);
        let { id, stage, taskTitle, taskDesc, track, dueDate, points, status, level, submission } = data;
        localStorage.setItem('id', id);
        localStorage.setItem('stage', stage);
        localStorage.setItem('taskTitle', taskTitle);
        localStorage.setItem('taskDesc', taskDesc);
        localStorage.setItem('track', track);
        localStorage.setItem('dueDate', dueDate);
        localStorage.setItem('points', points);
        localStorage.setItem('status', status);
        localStorage.setItem('level', level);
        localStorage.setItem('submission', submission);
    } 

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
    
              <div className="flex flex-col gap-6 md:flex-row md:items-center justify-between">
                <div className="flex items-center gap-9 mt-3">
                  <NavLink
                    to={`/admin/task/${task.id}/tasks`}
                    className={({ isActive }) =>
                      isActive
                        ? "text-2xl font-medium text-[#303030] border-b border-[#303030]"
                        : "text-blue-ribbon-500 text-xl"
                    }
                  >
                    Task
                  </NavLink>
    
                  <div className="flex items-center gap-5">
                    <NavLink
                      to={`/admin/task/${task.id}/submissions`}
                      className={({ isActive }) =>
                        isActive
                          ? "text-2xl font-medium text-[#303030] border-b border-[#303030] flex items-center gap-2"
                          : "text-blue-ribbon-500 flex items-center gap-2 text-xl"
                      }
                    >
                      <span>Submissions</span>
                      <span className="bg-blue-ribbon px-1 py-[2px] rounded-xl flex justify-center items-center right-[-15px] top-[-7px]">
                        <p className="text-white font-medium text-sm">
                          {submissions && submissions.length}
                        </p>
                      </span>
                    </NavLink>
                  </div>
    
                </div>
    
                <Link
                  to={`/admin/task/edit-task/${task.id}`}
                  className="flex items-center w-[135px] gap-2 bg-white text-blue-ribbon border border-blue-ribbon px-4 py-2 rounded-xl text-base"
                  onClick={() => setData(task)}
                >
                  <RiPencilFill className="text-lg" />
                  <p>Edit Task</p>
                </Link>
              </div>
    
              <Outlet />
            </div>
          )}
        </div>
      );
}

export default TaskDetailsAdmin