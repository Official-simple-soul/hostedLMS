import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from "react-router-dom"; 

// Auth imports
import ForgotPassword from '../pages/authentication/ForgotPassword';
import Login from '../pages/authentication/Login';
import NewPassword from '../pages/authentication/NewPassword';
import SignUp from '../pages/authentication/SIgnUp'
import VerifyEmail from '../pages/authentication/VerifyEmail';
import Error404 from '../pages/error/Error404';

// Student imports
import Student from '../pages/student/Student';

import { 
          StudentProfile,
          StudentDashboard,
          StudentTasks,
          Task,
          StudentSupport,
          TaskDetails,
          Settings,
          StudentClassroom,
          SavedBookmarks,
          AboutStudent,
          Calender,
          StudentCurriculum
        } from '../pages/student/components';

// Instructor imports
import Instructor from '../pages/instructor/Instructor';
import { 
          InstructorDashboard,
          InstructorProfile, 
          ClassroomTrainer,
          TaskTrainer,
          TaskDetailsTrainer, 
          CreateNewTask,
          CurriculumTrainer,
          TaskDraftList,
          TaskListTrainer,
          TaskDetailsTrainerTask,
          TaskSubmissionLink,
          InstructorStudent,
          EditTask
        } from '../pages/instructor/components';

import NewLesson from '../pages/instructor/components/NewLesson';
import AboutTrainer from '../pages/instructor/components/AboutTrainer';


// Admin imports
import Admin from '../pages/admin/Admin';
import { 
        AdminDashboard, 
        AdminProfile, 
        CurriculumAdmin,
        AdminClassroom,
        AdminNewLesson,
        AboutAdmin,
        AdminStudentList,
        AdminTrainerList,
        TrainerProfile,
        AdminSupport,
        AdminSettings,
        MoreCalendar,
        AdminTask,
        TaskListAdmin,
        TaskDraftListAdmin,
        TaskDetailsAdmin,
        TaskDetailsAdminTask,
        CreateNewTaskAdmin,
        EditTaskAdmin,
        TaskSubmissionAdmin
       } from '../pages/admin/components';




const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Onboarding and Authentication Routes => localhost:3000/~ */}
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/verify-email' element={<VerifyEmail />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='forgot-password/new-password' element={<NewPassword />} />

        {/* Student Routes => localhost:3000/student/~ */}
        <Route path="student" element={<Student />}>
          <Route path="" element={<Navigate replace to="/student/dashboard" />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="tasks" element={<StudentTasks />} />
          <Route path="task" element={<Task />} />
          <Route path="task/:id" element={<TaskDetails />} />
          <Route path="settings" element={<Settings />} />
          <Route path="support" element={<StudentSupport />} />
          <Route path="calender" element={<Calender />} />
          <Route path="studentclassroom" element={<StudentClassroom />} />
          <Route path="studentclassroom/savedbookmarks" element={<SavedBookmarks />} />
          <Route path="aboutstudent/:id" element={<AboutStudent />} />
          <Route path="studentcurriculum" element={<StudentCurriculum />} />
        </Route>

        {/* Trainer Routes => localhost:3000/instructor/~ */}
        <Route path="instructor" element={<Instructor />}>
          <Route path="" element={<Navigate replace to="/instructor/dashboard" />} />
          <Route path="dashboard" element={<InstructorDashboard />} />
          <Route path="profile" element={<InstructorProfile />} />
          <Route path="classroom" element={<ClassroomTrainer />} />
          <Route path="newlesson/:id" element={<NewLesson />} />
          <Route path="abouttrainer/:id" element={<AboutTrainer />} />
          <Route path="task" element={<TaskTrainer />} >
            <Route path="" element={<Navigate replace to="tasks" />} />
            <Route path="tasks" element={<TaskListTrainer />} />
            <Route path="draft" element={<TaskDraftList />} />
          </Route>
          <Route path="task/:id" element={<TaskDetailsTrainer />}>
            <Route path="" element={<Navigate replace to="tasks" />} />
            <Route path="tasks" element={<TaskDetailsTrainerTask />} />
            <Route path="submissions" element={<TaskSubmissionLink />} />
          </Route>
          <Route path="task/create-new-task/:id" element={<CreateNewTask />} />
          <Route path="task/edit-task/:id" element={<EditTask />} />
          <Route path='curriculum' element={<CurriculumTrainer />} />
          <Route path="settings" element={<Settings />} />
          <Route path="support" element={<StudentSupport />} />
          <Route path="student" element={<InstructorStudent />} />
        </Route>

        {/* Admin Routes => localhost:3000/admin/~ */}
        <Route path="admin" element={<Admin />}>
          <Route path="" element={<Navigate replace to="/admin/dashboard" />} />
          <Route  path="dashboard" element={<AdminDashboard />} />
          <Route  path="dashboard/morecalendar" element={<MoreCalendar />} />
          <Route  path="profile" element={<AdminProfile />} />
          <Route  path="curriculum" element={<CurriculumAdmin />} />
          <Route  path="adminclassroom" element={<AdminClassroom />} />
          <Route  path="adminnewlesson/:id" element={<AdminNewLesson />} />
          <Route path="aboutadmin/:id" element={<AboutAdmin />} />
          <Route path="student-list" element={<AdminStudentList />} />
          <Route path="admin-trainer" element={<AdminTrainerList />} />
          <Route path="admin-trainer/:id" element={<TrainerProfile />} />
          <Route path="task" element={<AdminTask />}>
            <Route path="" element={<Navigate replace to="tasks" />} />
            <Route path="tasks" element={<TaskListAdmin />} />
            <Route path="draft" element={<TaskDraftListAdmin />} />
          </Route>
          <Route path="task/:id" element={<TaskDetailsAdmin />}>
            <Route path="" element={<Navigate replace to="tasks" />} />
            <Route path="tasks" element={<TaskDetailsAdminTask />} />
            <Route path="submissions" element={<TaskSubmissionAdmin />} />
          </Route>
          <Route path="task/create-new-task/:id" element={<CreateNewTaskAdmin />} />
          <Route path="task/edit-task/:id" element={<EditTaskAdmin />} />
          <Route path="admin-support" element={<AdminSupport />} />
          <Route path="admin-settings" element={<AdminSettings />} />
        </Route>

        {/* Error 404 Page */}
        <Route path="*" element={<Error404 />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes