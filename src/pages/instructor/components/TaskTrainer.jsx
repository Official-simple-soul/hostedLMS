import React from 'react'
import TaskListTrainer from '../../../components/instructor/TaskListTrainer'
import useFetch from '../../../hooks/useFetch'

const TaskTrainer = () => {
  // NAVIGATE to the src/data folder the Run json server in a new terminal with the command below
  // json-server --watch db.json --port 8000
  const { data: tasks, isPending, error } = useFetch("http://localhost:8000/tasks")
  
  return (
    <div>
      <h2 className='text-xl font-medium text-[#303030]'>Tasks</h2>
      {isPending && <div className='text-sm'>Loading.....</div>}
      {error && <div className='text-sm bg-red-500 p-6 '>{ error }</div>}
      {tasks && <TaskListTrainer tasks={tasks} />}
    </div>
  )
}

export default TaskTrainer