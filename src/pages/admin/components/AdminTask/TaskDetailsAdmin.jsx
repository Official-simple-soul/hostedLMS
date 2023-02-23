import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
// import { Avatar, DueDate, Calender } from '../../assets'
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
// import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from 'react-icons/bs'
import { VscSettings  } from "react-icons/vsc";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { RiPencilFill } from "react-icons/ri";
// import fileIcon from '../../assets/icons/file2024.svg'
// import cancelIcon from '../../assets/icons/cancel2025.svg'

const TaskDetailsAdmin = () => {
    const { id } = useParams();
    const location = useLocation();
    const {
        data: task,
        isPending,
        error,
    } = useFetch("http://localhost:8000/tasks/" + id);
    const { data: submissions } = useFetch("http://localhost:8000/submissions");
    const [ changesDd, setChangesDd ] = useState();
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
            <div className="relative flex items-center gap-3 md:gap-9 mt-3">
              <NavLink
                to={`/admin/task/${task.id}/tasks`}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg md:text-2xl font-medium text-[#303030] border-b border-[#303030]"
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
                      ? "text-xl md:text-2xl font-medium text-[#303030] border-b border-[#303030] flex items-center gap-2"
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
                
              {location.pathname === "/admin/task/" + id + "/submissions" ? (
                <div className="absolute right-2">
                  <div className="flex items-center gap-1 text-white text-base md:hidden">
                      <div className='bg-blue-ribbon-500 px-4 py-2 rounded-lg text-base'>Submit</div>

                      <BsThreeDotsVertical 
                        className="text-3xl text-gray-700"
                        onClick={() => setChangesDd(!changesDd)}
                      />
                  </div>
                </div>

              ) : null }

              { changesDd ? (
                <div className='md:hidden z-10 absolute right-0 top-11 bg-white px-3.5 py-4 rounded-lg text-base text-[#303030] flex flex-col gap-3 shadow'>
                    <div className='flex flex-col gap-3'>
                        <p className="cursor-pointer">Submit grade</p>
                        <p className="cursor-pointer">Submit all graded tasks</p>
                    </div>
                </div>
                )
                : null
              }

            </div>

            {location.pathname === "/admin/task/" + id + "/tasks" ? (
              <Link
                to={`/instructor/task/edit-task/${task.id}`}
                className="flex items-center w-[135px] gap-2 bg-white text-blue-ribbon border border-blue-ribbon px-4 py-2 rounded-xl text-base"
                onClick={() => setData(task)}
              >
                <RiPencilFill className="text-lg" />
                <p>Edit Task</p>
              </Link>
            ) : (
              <div className="relative flex flex-col-reverse md:flex-row md:items-center gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <p className="text-base font-light text-gray-500">Accepting submissions</p>
                    <div className="relative w-[48px] h-[24px] bg-blue-ribbon-200 rounded-xl">
                      <div className="absolute right-0 h-full w-6/12 bg-blue-ribbon-500 rounded-xl overflow-hidden"></div>
                    </div>
                  </div>

                  <VscSettings className='text-3xl text-gray-700 md:hidden' />
                </div>

                <div className="flex md:flex items-center flex-row gap-3 hidden">
                  <p className="text-base font-light text-gray-500">Filter</p>
                  <div className="border border-gray-400 bg-white px-4 py-1.5 flex items-center gap-4 justify-between rounded-lg">
                    <p className="font-light text-base text-gray-400">Not graded</p>
                    <IoIosArrowDown />
                  </div>
                </div>

                <div className="hidden md:flex flex items-center text-white text-base">
                    <div className='bg-blue-ribbon-500 px-4 py-2 rounded-l-lg text-base'>Submit Grade</div>

                    <div 
                        className='bg-blue-ribbon-500 px-3 py-2 rounded-r-lg border-l border-grey-100'
                        onClick={() => setChangesDd(!changesDd)}
                    >
                        {!changesDd ? <IoIosArrowDown className='text-[1.5rem]' /> : <IoIosArrowUp className='text-[1.5rem]' />}
                    </div>
                </div>

                { changesDd ? (
                  <div className='hidden md:block absolute right-0 top-11 bg-white px-3.5 py-4 rounded-lg text-base text-[#303030] flex flex-col gap-3 shadow'>
                      <div className='flex flex-col gap-3'>
                          <p className="cursor-pointer">Submit grade</p>
                          <p className="cursor-pointer">Submit all graded tasks</p>
                      </div>
                  </div>
              )
              : null
            }

              </div>
            )}
           
          </div>

          <Outlet />
        </div>
      )}
    </div>
      );
}

export default TaskDetailsAdmin