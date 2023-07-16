import React from "react";
import { useNavigate } from 'react-router-dom'
 
const TaskList = ({ tasks }) => {
    let navigate =useNavigate();
  return (
    <div className='overflow-x-scroll md:overflow-x-hidden'>
      <div className="w-[970px] overflow-x-scroll md:w-full md:overflow-x-hidden grid grid-cols-8 items-center bg-[#0d6efd08] py-4 px-5 rounded-xl my-4">
        <p className="text-base text-[#0D6EFD]">Stage</p>
        <p className="text-base text-[#0D6EFD] col-span-2">Task</p>
        <p className="text-base text-[#0D6EFD]">Track</p>
        <p className="text-base text-[#0D6EFD] col-span-2">Due Date</p>
        <p className="text-base text-[#0D6EFD]">Points</p>
        <p className="text-base text-[#0D6EFD]">Status</p>
      </div>

      <div className="flex flex-col gap-4">
        {tasks.map((data) => (
            <div
              className="w-[970px] overflow-x-scroll md:w-full md:overflow-x-hidden grid grid-cols-8 items-center bg-white py-4 px-5 rounded-xl mt-4 cursor-pointer hover:bg-pri"
              onClick={() => navigate(`/student/task/${data.id}`)}
              key={data.id}
            >
              <p className="text-base text-[#808080]">{data.stage}</p>
              <p className="text-base text-[#808080] col-span-2">{data.taskTitle}</p>
              <p className="text-base text-[#808080]">{data.track}</p>
              <p className="text-base text-[#808080] col-span-2">{data.dueDate}</p>
              <p className="text-base text-[#808080]">{data.points}/100</p>
              {data.status === 'Graded' ? <p className="text-base text-green-500">{data.status}</p> : <p className="text-base text-red-500">{data.status}</p>}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TaskList;
