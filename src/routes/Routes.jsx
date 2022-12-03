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
          StudentTask,
          StudentSupport,
          Settings 
        } from '../pages/student/components';

// Instructor imports
import Instructor from '../pages/instructor/Instructor';
import { 
          InstructorDashboard,
          InstructorProfile 
       , ClassroomTrainer } from '../pages/instructor/components';
import NewLesson from '../pages/instructor/components/NewLesson';
import InstructorClassroom from '../pages/instructor/components/InstructorClassroom';
import Stage1Trainer from '../pages/instructor/components/Stage1Trainer';
import AboutTrainer from '../pages/instructor/components/AboutTrainer';

// Admin imports
import Admin from '../pages/admin/Admin';
import { 
        AdminDashboard, 
        AdminProfile, 
        CurriculumAdmin
       } from '../pages/admin/components';
import LiveclassAboutTrainer from '../pages/instructor/components/LiveclassAboutTrainer';
import LiveclassResourceTrainer from '../pages/instructor/components/LiveclassResourceTrainer';



const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Onboarding and Authentication Routes => localhost:3000/~ */}
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/verify-email' element={<VerifyEmail />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='forgot-password/new-password' element={<NewPassword />} />

        {/* Student Routes => localhost:3000/student/~ */}
        <Route path="student" element={<Student />}>
          <Route path="" element={<Navigate replace to="/student/dashboard" />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="tasks" element={<StudentTasks />} />
          <Route path="task" element={<StudentTask />} />
          <Route path="settings" element={<Settings />} />
          <Route path="studentsupport" element={<StudentSupport />} />
        </Route>

        {/* Trainer Routes => localhost:3000/instructor/~ */}
        <Route path="instructor" element={<Instructor />}>
          <Route path="" element={<Navigate replace to="/instructor/dashboard" />} />
          <Route path="dashboard" element={<InstructorDashboard />} />
          <Route path="profile" element={<InstructorProfile />} />
          <Route path="classroom" element={<ClassroomTrainer />} />
          <Route path="newlesson/:id" element={<NewLesson />} />
          <Route path="abouttrainer/:id" element={<AboutTrainer />} />
        </Route>

        {/* Admin Routes => localhost:3000/admin/~ */}
        <Route path="admin" element={<Admin />}>
          <Route path="" element={<Navigate replace to="/admin/dashboard" />} />
          <Route  path="dashboard" element={<AdminDashboard />} />
          <Route  path="profile" element={<AdminProfile />} />
          <Route  path="curriculum" element={<CurriculumAdmin />} />
        </Route>

        {/* Error 404 Page */}
        <Route path="*" element={<Error404 />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes