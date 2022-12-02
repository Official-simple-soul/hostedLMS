import React from 'react'
// import data from '../../../data/data'
import useFetch from '../../../hooks/useFetch'
import TaskList from './TaskList';

const Task = () => {
    const { data: tasks, isPending, error } = useFetch("http://localhost:8000/tasks")
    // console.log(tasks);
  return (
    <div>
        <h2 className='text-xl font-medium text-[#303030]'>Tasks</h2>
        {isPending && <div className='text-sm'>Loading.....</div>}
        {error && <div className='text-sm bg-red-500 p-6 '>{ error }</div>}
        {tasks && <TaskList tasks={tasks} />}
    </div>
  )
}

export default Task