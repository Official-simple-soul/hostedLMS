import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../../hooks/useFetch'
import Pagination from '../../../../components/instructor/Pagination'

const TaskListAdmin = () => {
  let navigate =useNavigate();
  const [ currentPage, setCurrentPage ] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [ filterData, setFilterData ] = useState('All')
  const { data: tasks, isPending, error } = useFetch("http://localhost:8000/tasks")

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = tasks && tasks.slice(firstPostIndex, lastPostIndex)

  const filterlabel = ["All", "UI/UX", "Frontend", "Backend", "Android", "Project Management", "CAD", "Digital Marketing"]

  return (
    <div>
      <div className="my-6 flex items-center gap-4 text-blue-500 overflow-x-auto md:w-full md:overflow-x-hidden">
        {filterlabel.map((label, i) => <p className="text-base cursor-pointer" key={i} onClick={(e) => setFilterData(e.target.innerText)}>{label}</p>)}
      </div>

      <p className='text-base text-center font-normal'>Showing {currentPage}-{lastPostIndex} of {tasks && tasks.length} submissions</p>

      <div className='overflow-x-scroll md:overflow-x-hidden'>
        <div className="w-[1050px] grid grid-cols-9 items-center bg-blue-ribbon-50 py-4 px-5 rounded-xl my-4">
          <p className="text-base text-[#0D6EFD]">Stage</p>
          <p className="text-base text-[#0D6EFD] col-span-2">Task</p> 
          <p className="text-base text-[#0D6EFD]">Track</p>
          <p className="text-base text-[#0D6EFD]">Level</p>
          <p className="text-base text-[#0D6EFD] col-span-2">Due Date</p>
          <p className="text-base text-[#0D6EFD]">Status</p>
          <p className="text-base text-[#0D6EFD]">Graded</p>
        </div>

        {isPending && <div className='text-sm'>Loading.....</div>}
        {error && <div className='text-sm bg-red-500 p-6 '>{ error }</div>}

        <div className="w-[1050px] flex flex-col gap-4">
          {currentPosts && currentPosts.filter((data) => {
            if(filterData === "All") {
              return data
            } else if ( data.track.toLowerCase().includes(filterData.toLowerCase())) {
              return data
            }
          }).map((data) => (
              <div
                className="grid grid-cols-9 items-center bg-white py-4 px-5 rounded-xl mt-4"
                onClick={() => navigate(`/admin/task/${data.id}`)}
                key={data.id}
              >
                <p className="text-base text-[#808080]">{data.stage}</p>
                <p className="text-base text-[#808080] col-span-2">{data.taskTitle}</p>
                <p className="text-base text-[#808080]">{data.track}</p>
                <p className="text-base text-[#808080]">{data.level}</p>
                <p className="text-base text-[#808080] col-span-2">{data.dueDate}</p>
                <p className="text-base text-[#808080]">{data.status}</p>
                <p className="text-base text-[#808080]">{data.points}/100</p>
              </div>
            ))}
        </div>
      </div>


      <Pagination 
        totalPosts={tasks && tasks.length} 
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setPostsPerPage={setPostsPerPage}
      />
    </div>
  )
}

export default TaskListAdmin