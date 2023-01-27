import React from 'react'
import { Logo, Dashboard, Profile, Classroom, Task, Curriculum, Support, Settings } from '../../assets'
import { NavLink } from 'react-router-dom'

const Sidebar = ({menu}) => {
  return (
    <>
    <div className={`h-screen ${!menu? '-left-[2000px]':'left-0'} transition-all ease-in-out duration-500 top-14 lg:block absolute lg:static z-20 w-[236px]`}>
        <div className="h-full md:static bg-white">
            <div className="flex items-center justify-center gap-4 pt-6">
                <img src={Logo} alt="kodecamp-logo" className='w-[36.71px] h-[36px]' />
                <p className="font-bold text-xl text-[#0D6EFD]">Kodecamp LMS</p>
            </div>

            <nav className="md:mt-[4rem]">
                <div className='relative'>
                    <NavLink to='/student/dashboard' className={({ isActive }) => isActive ? "w-full font-thin text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin text-[#808080] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                        <span className="text-left">
                            <img src={Dashboard} alt="" className='w-[22px]' />
                        </span>
                        <span className="text-lg font-normal">
                            Dashboard
                        </span>
                    </NavLink>

                    <NavLink to='/student/profile' className={({ isActive }) => isActive ? "w-full font-thin text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin text-[#808080] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                        <span className="text-left">
                            <img src={Profile} alt="" className='w-[22px]' />
                        </span>
                        <span className="text-lg font-normal">
                            Profile
                        </span>
                    </NavLink>

                    <NavLink to='/student/studentclassroom' className={({ isActive }) => isActive ? "w-full font-thin text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin text-[#808080] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                        <span className="text-left">
                            <img src={Classroom} alt="" className='w-[22px]' />
                        </span>
                        <span className="text-lg font-normal">
                            My Classroom
                        </span>
                    </NavLink>

                    <NavLink to='/student/task' className={({ isActive }) => isActive ? "w-full font-thin text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin text-[#808080] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                        <span className="text-left">
                            <img src={Task} alt="" className='w-[22px]' />
                        </span>
                        <span className="text-lg font-normal">
                            Task
                        </span>
                    </NavLink>

                    <NavLink to='/student/studentcurriculum' className={({ isActive }) => isActive ? "w-full font-thin text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin text-[#808080] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                        <span className="text-left">
                            <img src={Curriculum} alt="" className='w-[22px]' />
                        </span>
                        <span className="text-lg font-normal">
                            Curriculum
                        </span>
                    </NavLink>

                    <NavLink to='/student/support' className={({ isActive }) => isActive ? "w-full font-thin text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin text-[#808080] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                        <span className="text-left">
                            <img src={Support} alt="" className='w-[22px]' />
                        </span>
                        <span className="text-lg font-normal">
                            Support
                        </span>
                    </NavLink>

                    <NavLink to='/student/settings' className={({ isActive }) => isActive ? "w-full font-thin text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin text-[#808080] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                        <span className="text-left">
                            <img src={Settings} alt="" className='w-[22px]' />
                        </span>
                        <span className="text-lg font-normal">
                            Settings
                        </span>
                    </NavLink>
                </div>
            </nav>

            <div className="mt-5 pb-4 flex flex-col gap-1 items-center justify-center"> 
                <p className="text-[#585858] text-[16px]">Student ID</p>
                <p className="text-blue-ribbon-400 text-[16px]">KC0001</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar