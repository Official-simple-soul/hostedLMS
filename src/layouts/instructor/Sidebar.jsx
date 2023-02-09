import React from 'react'
import { Logo, Dashboard, Profile, Student, Classroom, Task, Curriculum, Support, Settings } from '../../assets'
import { NavLink } from 'react-router-dom'

const Sidebar = ({showSide, setShowSide}) => {

    const handleNav = () => {
        setShowSide(false)
    }

    return (
        <>
            <div className={`${showSide?'fixed left-0 h-sreen':'absolute -left-[200%] md:left-0'} overflow-hidden w-[206px] md:w-[236px] transition-all ease-in-out duration-500 top-16 z-40 md:fixed`}>
                <div className="bg-white h-full">
                    <div className="flex items-center ml-3 md:md-0 md:justify-center gap-4 pt-6">
                        <img src={Logo} alt="kodecamp-logo" className='w-[36.71px] h-[36px]' />
                        <p className="font-bold md:text-xl text-[#0D6EFD]">Kodecamp LMS</p>
                    </div>

                    <nav className="mtx-6 md:py-3">
                        <div className='relative'>
                            <NavLink to='/instructor/dashboard' onClick={handleNav} className={({ isActive }) => isActive ? "w-full font-thin  text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin  text-[#808080] flex items-center gap-3 md:px-4 md:py-3 py-3 px-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                                <span className="text-left">
                                    <img src={Dashboard} alt="" className='w-[15px] md:w-[22px]' />
                                </span>
                                <span className="text-sm md:text-lg font-normal">
                                    Dashboard
                                </span>
                            </NavLink>

                            <NavLink to='/instructor/profile' onClick={handleNav} className={({ isActive }) => isActive ? "w-full font-thin  text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin  text-[#808080] flex items-center gap-3 md:px-4 md:py-3 py-3 px-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                                <span className="text-left">
                                    <img src={Profile} alt="" className='w-[15px] md:w-[22px]' />
                                </span>
                                <span className="text-sm md:text-lg font-normal">
                                    Profile
                                </span>
                            </NavLink>

                            <NavLink to='/instructor/student' onClick={handleNav} className={({ isActive }) => isActive ? "w-full font-thin  text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin  text-[#808080] flex items-center gap-3 md:px-4 md:py-3 py-3 px-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                                <span className="text-left">
                                    <img src={Student} alt="" className='w-[15px] md:w-[22px]' />
                                </span>
                                <span className="text-sm md:text-lg font-normal">
                                    Student
                                </span>
                            </NavLink>

                            <NavLink to='/instructor/classroom' onClick={handleNav} className={({ isActive }) => isActive ? "w-full font-thin  text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin  text-[#808080] flex items-center gap-3 md:px-4 md:py-3 py-3 px-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                                <span className="text-left">
                                    <img src={Classroom} alt="" className='w-[15px] md:w-[22px]' />
                                </span>
                                <span className="text-sm md:text-lg font-normal">
                                    Classroom
                                </span>
                            </NavLink>

                            <NavLink to='/instructor/task' onClick={handleNav} className={({ isActive }) => isActive ? "w-full font-thin  text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin  text-[#808080] flex items-center gap-3 md:px-4 md:py-3 py-3 px-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                                <span className="text-left">
                                    <img src={Task} alt="" className='w-[15px] md:w-[22px]' />
                                </span>
                                <span className="text-sm md:text-lg font-normal">
                                    Task
                                </span>
                            </NavLink>

                            <NavLink to='/instructor/curriculum' onClick={handleNav} className={({ isActive }) => isActive ? "w-full font-thin  text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin  text-[#808080] flex items-center gap-3 md:px-4 md:py-3 py-3 px-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                                <span className="text-left">
                                    <img src={Curriculum} alt="" className='w-[15px] md:w-[22px]' />
                                </span>
                                <span className="text-sm md:text-lg font-normal">
                                    Curriculum
                                </span>
                            </NavLink>

                            <NavLink to='/instructor/support' onClick={handleNav} className={({ isActive }) => isActive ? "w-full font-thin  text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin  text-[#808080] flex items-center gap-3 md:px-4 md:py-3 py-3 px-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                                <span className="text-left">
                                    <img src={Support} alt="" className='w-[15px] md:w-[22px]' />
                                </span>
                                <span className="text-sm md:text-lg font-normal">
                                    Support
                                </span>
                            </NavLink>

                            <NavLink to='/instructor/settings' onClick={handleNav} className={({ isActive }) => isActive ? "w-full font-thin text-[#0D6EFD] flex items-center gap-3 p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD]" : "w-full font-thin text-[#808080] flex items-center gap-3 md:px-4 md:py-3 py-3 px-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 hover:bg-[#0d6efd08]"}>
                                <span className="text-left">
                                    <img src={Settings} alt="" className='w-[15px] md:w-[22px]' />
                                </span>
                                <span className="text-sm md:text-lg font-normal">
                                    Settings
                                </span>
                            </NavLink>
                        </div>
                    </nav>

                    <div className="md:mt-5 pb-4 flex flex-col gap-1 items-center justify-center"> 
                        <p className="text-[#585858] text-sm md:text-[16px]">Trainer ID</p>
                        <p className="text-blue-ribbon-400 text-sm md:text-[16px]">KC0001</p>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default Sidebar