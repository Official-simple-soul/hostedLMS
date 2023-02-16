import React from 'react'
import { Logo, Dashboard, Profile, Classroom, Task, Curriculum, Support, Settings } from '../../assets'
import { NavLink } from 'react-router-dom'

const Sidebar = ({showSide, setShowSide}) => {

    const handleNavSide = () => setShowSide(false)
    
  return (
    <>
    <div className={`${showSide?'fixed left-0 h-screen':'h-screen absolute -left-[200%] md:left-0'} overflow-hidden w-[206px] md:w-[236px] transition-all ease-in-out duration-500 top-16 md:top-0 bottom-0 z-40 md:fixed`}>
        <div className="bg-white h-full">
            <div className="flex items-center ml-3 md:justify-center gap-4 pt-6">
                <img src={Logo} alt="kodecamp-logo" className='w-[36.71px] h-[36px]' />
                <p className="font-bold md:text-xl text-[#0D6EFD]">Kodecamp LMS</p>
            </div>

            <nav className="mt-6 md:mt-10">
                <div className='relative'>
                    <NavLink to='/student/dashboard' onClick={handleNavSide} className={({ isActive }) => isActive ? "w-full font-thin text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin text-[#808080] flex items-center gap-3 p-4 md:my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                        <span className="text-left">
                            <img src={Dashboard} alt="" className='w-[16px] md:w-[22px]' />
                        </span>
                        <span className="text-sm md:text-lg font-normal">
                            Dashboard
                        </span>
                    </NavLink>

                    <NavLink to='/student/profile' onClick={handleNavSide} className={({ isActive }) => isActive ? "w-full font-thin text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin text-[#808080] flex items-center gap-3 p-4 md:my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                        <span className="text-left">
                            <img src={Profile} alt="" className='w-[16px] md:w-[22px]' />
                        </span>
                        <span className="text-sm md:text-lg font-normal">
                            Profile
                        </span>
                    </NavLink>

                    <NavLink to='/student/studentclassroom' onClick={handleNavSide} className={({ isActive }) => isActive ? "w-full font-thin text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin text-[#808080] flex items-center gap-3 p-4 md:my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                        <span className="text-left">
                            <img src={Classroom} alt="" className='w-[16px] md:w-[22px]' />
                        </span>
                        <span className="text-sm md:text-lg font-normal">
                            My Classroom
                        </span>
                    </NavLink>

                    <NavLink to='/student/task' onClick={handleNavSide} className={({ isActive }) => isActive ? "w-full font-thin text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin text-[#808080] flex items-center gap-3 p-4 md:my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                        <span className="text-left">
                            <img src={Task} alt="" className='w-[16px] md:w-[22px]' />
                        </span>
                        <span className="text-sm md:text-lg font-normal">
                            Task
                        </span>
                    </NavLink>

                    <NavLink to='/student/studentcurriculum' onClick={handleNavSide} className={({ isActive }) => isActive ? "w-full font-thin text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin text-[#808080] flex items-center gap-3 p-4 md:my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                        <span className="text-left">
                            <img src={Curriculum} alt="" className='w-[16px] md:w-[22px]' />
                        </span>
                        <span className="text-sm md:text-lg font-normal">
                            Curriculum
                        </span>
                    </NavLink>

                    <NavLink to='/student/support' onClick={handleNavSide} className={({ isActive }) => isActive ? "w-full font-thin text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin text-[#808080] flex items-center gap-3 p-4 md:my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                        <span className="text-left">
                            <img src={Support} alt="" className='w-[16px] md:w-[22px]' />
                        </span>
                        <span className="text-sm md:text-lg font-normal">
                            Support
                        </span>
                    </NavLink>

                    <NavLink to='/student/settings' onClick={handleNavSide} className={({ isActive }) => isActive ? "w-full font-thin text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin text-[#808080] flex items-center gap-3 p-4 md:my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                        <span className="text-left">
                            <img src={Settings} alt="" className='w-[16px] md:w-[22px]' />
                        </span>
                        <span className="text-sm md:text-lg font-normal">
                            Settings
                        </span>
                    </NavLink>
                </div>
            </nav>

            <div className="mt-5 pb-4 flex flex-col gap-1 items-center justify-center"> 
                <p className="text-[#585858] text-sm md:text-[16px]">Student ID</p>
                <p className="text-blue-ribbon-400 text-sm md:text-[16px]">KC0001</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar