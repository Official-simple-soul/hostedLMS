import React from 'react'
import TaskListTrainer from '../../../components/instructor/TaskListTrainer'
import useFetch from '../../../hooks/useFetch'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'

const TaskTrainer = () => {
  // NAVIGATE to the src/data folder the Run json server in a new terminal with the command below
  // json-server --watch db.json --port 8000
  const { data: tasks, isPending, error } = useFetch("http://localhost:8000/tasks")

  const id = 0;
  
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className='text-xl font-medium text-[#303030]'>Tasks</h2>
        <Link 
          to={`/instructor/task/create-new-task/${id}`}
          className="flex items-center gap-2 bg-blue-ribbon-400 text-white px-4 py-2 rounded-xl text-base"
        >
          <AiOutlinePlus className='text-lg' />
          <p>Add New Task</p>
        </Link>
      </div>

      {isPending && <div className='text-sm'>Loading.....</div>}
      {error && <div className='text-sm bg-red-500 p-6 '>{ error }</div>}
      {tasks && <TaskListTrainer tasks={tasks} />}
    </div>
  )
}

export default TaskTrainer