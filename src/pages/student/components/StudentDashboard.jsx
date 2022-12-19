import React from 'react'
import Progress from '../../../components/student/Progress'
import useFetch from '../../../hooks/useFetch';
import TaskList from './TaskList';

const StudentDashboard = () => {
    const { data: tasks } = useFetch("http://localhost:8000/tasks")

  return (
    <> 
      <h1 className='font-medium text-2xl'>Dashboard</h1>
      <div className="grid lg:grid-cols-5 gap-4 mt-5">
        <div className="col-span-3">
          <Progress 
            title="Learning Progress"
            trackWeek="UX Design - Week 4"
            percentage="33%"
            pointsOverall="Points - Overall"  
            point="160 / 200"
            stagesCompleted="Stages Completed"
            stage="3 / 8"
          />
        </div>

        <div className="bg-white p-4 col-span-2 rounded-xl">
          <h1>Calendar</h1>
        </div>
      </div>

      <div className="bg-white mt-6 rounded-xl">
        <h1 className='text-lg pt-4 px-4'>Recent Task</h1>
        {tasks && <TaskList tasks={tasks} />}
      </div>
    </>
  )
}

export default StudentDashboard