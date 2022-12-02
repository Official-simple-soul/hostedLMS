import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch';

const TaskDetails = () => {
    const { id } = useParams();
    const { data: task, isPending, error } = useFetch("http://localhost:8000/tasks/" + id);

  return (
    <div>
        {isPending && <div className='text-sm'>Loading.....</div>}
        {error && <div className='text-sm bg-red-500 p-6 '>{ error }</div>}
        <h1 className='text-2xl'>TaskDetails {id}</h1>
        
        {task && 
            <div 
                className="grid grid-cols-8 items-center bg-white py-4 px-5 rounded-xl mt-4"
                key={task.id}
            >
                <p className='text-base text-[#808080]'>{task.stage}</p>
                <p className='text-base text-[#808080] col-span-2'>{task.taskTitle}</p>
                <p className='text-base text-[#808080]'>{task.track}</p>
                <p className='text-base text-[#808080] col-span-2'>{task.dueDate}</p>
                <p className='text-base text-[#808080]'>{task.points}/100</p>
                <p className='text-base text-[#808080]'>{task.status}</p>
            </div>
        }

        {task && 
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="col-span-2 text-2xl bg-white rounded-xl p-3">
                    <div className="w-[97%] mx-auto border-b border-grey-400 pb-3 flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg">Redesign KodeCamp Website</h2>
                            <p className="text-sm text-[#808080]">UI/UX Design - Beginner</p>
                        </div>
                        <div className="flex gap-4 items-items">
                            <div className="flex gap-2 items-center">
                                <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                                <p className="text-sm text-[#808080]">Believe</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                                <p className="text-sm text-[#808080]">October 5</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                                <p className="text-sm text-[#808080]">Due in 2 days</p>
                            </div>
                            <p className="text-sm text-[#808080]">100</p>
                        </div>
                    </div>

                    <div className="w-[97%] mx-auto border-b border-grey-400 py-3 flex flex-col gap-2">
                        <p className="text-sm">{task.taskDesc}</p>
                    </div>
                </div>

                <div className="text-2xl bg-white rounded-xl p-3">Hello</div>
            </div>
        }
    </div>
  )
}

export default TaskDetails