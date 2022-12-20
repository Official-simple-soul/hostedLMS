import React from 'react'
import { Logo, Dashboard, Profile, Student, Classroom, Task, Curriculum, Support, Settings } from '../../assets'
import { NavLink } from 'react-router-dom'

const Sidebar = ({menu}) => {
    return (
        <>
            <div className={`h-screen ${!menu? 'left-[-100%]':'left-0'} transition-all ease-in-out duration-500 top-14 lg:block absolute lg:static z-50 w-[236px]`}>
                <div className="bg-white h-full">
                    <div className="flex items-center justify-center gap-4 pt-6">
                        <img src={Logo} alt="kodecamp-logo" className='w-[36.71px] h-[36px]' />
                        <p className="font-bold text-xl text-[#0D6EFD]">Kodecamp LMS</p>
                    </div>

                    <nav className="md:mt-[4rem]">
                        <div className='relative'>
                            <NavLink to='/instructor/dashboard' className={({ isActive }) => isActive ? "w-full font-thin  text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin  text-[#808080] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                                <span className="text-left">
                                    <img src={Dashboard} alt="" className='w-[15px] md:w-[22px]' />
                                </span>
                                <span className="md:text-lg font-normal">
                                    Dashboard
                                </span>
                            </NavLink>

                            <NavLink to='/instructor/profile' className={({ isActive }) => isActive ? "w-full font-thin  text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin  text-[#808080] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                                <span className="text-left">
                                    <img src={Profile} alt="" className='w-[15px] md:w-[22px]' />
                                </span>
                                <span className="md:text-lg font-normal">
                                    Profile
                                </span>
                            </NavLink>

                            <NavLink to='/instructor/profile' className={({ isActive }) => isActive ? "w-full font-thin  text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin  text-[#808080] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                                <span className="text-left">
                                    <img src={Student} alt="" className='w-[15px] md:w-[22px]' />
                                </span>
                                <span className="md:text-lg font-normal">
                                    Student
                                </span>
                            </NavLink>

                            <NavLink to='/instructor/classroom' className={({ isActive }) => isActive ? "w-full font-thin  text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin  text-[#808080] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                                <span className="text-left">
                                    <img src={Classroom} alt="" className='w-[15px] md:w-[22px]' />
                                </span>
                                <span className="md:text-lg font-normal">
                                    Classroom
                                </span>
                            </NavLink>

                            <NavLink to='/instructor/task' className={({ isActive }) => isActive ? "w-full font-thin  text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin  text-[#808080] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                                <span className="text-left">
                                    <img src={Task} alt="" className='w-[15px] md:w-[22px]' />
                                </span>
                                <span className="md:text-lg font-normal">
                                    Task
                                </span>
                            </NavLink>

                            <NavLink to='/instructor/curriculum' className={({ isActive }) => isActive ? "w-full font-thin  text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin  text-[#808080] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                                <span className="text-left">
                                    <img src={Curriculum} alt="" className='w-[15px] md:w-[22px]' />
                                </span>
                                <span className="md:text-lg font-normal">
                                    Curriculum
                                </span>
                            </NavLink>

                            <NavLink to='/instructor/support' className={({ isActive }) => isActive ? "w-full font-thin  text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin uppercase text-[#808080] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                                <span className="text-left">
                                    <img src={Support} alt="" className='w-[15px] md:w-[22px]' />
                                </span>
                                <span className="md:text-lg font-normal">
                                    Support
                                </span>
                            </NavLink>

                            <NavLink to='/instructor/settings' className={({ isActive }) => isActive ? "w-full font-thin uppercase text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin uppercase text-[#808080] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                                <span className="text-left">
                                    <img src={Settings} alt="" className='w-[15px] md:w-[22px]' />
                                </span>
                                <span className="md:text-lg font-normal">
                                    Settings
                                </span>
                            </NavLink>
                        </div>
                    </nav>

                    <div className="md:mt-5 pb-4 flex flex-col gap-1 items-center justify-center"> 
                        <p className="text-[#585858] text-[16px]">Trainer ID</p>
                        <p className="text-blue-ribbon-400 text-[16px]">KC0001</p>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default Sidebar