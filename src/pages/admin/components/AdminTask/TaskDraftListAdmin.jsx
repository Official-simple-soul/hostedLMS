import React from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../../hooks/useFetch'

const TaskDraftListAdmin = () => {
  let navigate =useNavigate();
  const { data: tasks, isPending, error } = useFetch("http://localhost:8000/tasks")

  return (
    <div>
      <div className="grid grid-cols-8 items-center bg-blue-ribbon-50 py-4 px-5 rounded-xl my-4">
        <p className="text-base text-[#0D6EFD]">Stage</p>
        <p className="text-base text-[#0D6EFD] col-span-2">Task</p>
        <p className="text-base text-[#0D6EFD]">Track</p>
        <p className="text-base text-[#0D6EFD] col-span-2">Due Date</p>
        <p className="text-base text-[#0D6EFD]">Status</p>
        <p className="text-base text-[#0D6EFD]">Graded</p>
      </div>

      {isPending && <div className='text-sm'>Loading.....</div>}
      {error && <div className='text-sm bg-red-500 p-6 '>{ error }</div>}

      <div className="flex flex-col gap-4">
        {tasks && tasks.map((data) => (
            <div
              className="grid grid-cols-8 items-center bg-white py-4 px-5 rounded-xl mt-4"
              onClick={() => navigate(`/admin/task/${data.id}`)}
              key={data.id}
            >
              <p className="text-base text-[#808080]">{data.stage}</p>
              <p className="text-base text-[#808080] col-span-2">{data.taskTitle}</p>
              <p className="text-base text-[#808080]">{data.track}</p>
              <p className="text-base text-[#808080] col-span-2">
                {data.dueDate}
              </p>
              <p className="text-base text-[#808080]">{data.status}</p>
              <p className="text-base text-[#808080]">{data.points}/100</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default TaskDraftListAdmin