import React from 'react'
import { Logo, Dashboard, Profile, Classroom, Task, Curriculum, Support, Settings } from '../../assets'

const Sidebar = () => {
  return (
    <>
    <div className="h-screen hidden lg:block relative w-[236px]">
        <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
            <div className="flex items-center justify-center gap-4 pt-6">
                <img src={Logo} alt="kodecamp-logo" className='w-[36.71px] h-[36px]' />
                <p className="font-bold text-xl text-[#0D6EFD]">Kodecamp LMS</p>
            </div>

            <nav className="mt-[4rem]">
                <div className='relative'>
                    <a className="w-full font-thin uppercase text-[#0D6EFD] flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-[#0d6efd08] border-r-8 border-[#0D6EFD] dark:from-gray-700 dark:to-gray-800 border-r-8 border-[#0D6EFD]" href="#">
                        <span className="text-left">
                            <img src={Dashboard} alt="" />
                        </span>
                        <span className="mx-4 text-sm font-normal">
                            Dashboard
                        </span>
                    </a>

                    <a className="w-full font-thin uppercase text-[#808080] dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                        <span className="text-left">
                            <img src={Profile} alt="" />
                        </span>
                        <span className="mx-4 text-sm font-normal">
                            Profile
                        </span>
                    </a>

                    <a className="w-full font-thin uppercase text-[#808080] dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                        <span className="text-left">
                            <img src={Classroom} alt="" />
                        </span>
                        <span className="mx-4 text-sm font-normal">
                            My Classroom
                        </span>
                    </a>

                    <a className="w-full font-thin uppercase text-[#808080] dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                        <span className="text-left">
                            <img src={Task} alt="" />
                        </span>
                        <span className="mx-4 text-sm font-normal">
                            Task
                        </span>
                    </a>

                    <a className="w-full font-thin uppercase text-[#808080] dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                        <span className="text-left">
                            <img src={Curriculum} alt="" />
                        </span>
                        <span className="mx-4 text-sm font-normal">
                            Curriculum
                        </span>
                    </a>

                    <a className="w-full font-thin uppercase text-[#808080] dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                        <span className="text-left">
                            <img src={Support} alt="" />
                        </span>
                        <span className="mx-4 text-sm font-normal">
                            Support
                        </span>
                    </a>

                    <a className="w-full font-thin uppercase text-[#808080] dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                        <span className="text-left">
                            <img src={Settings} alt="" />
                        </span>
                        <span className="mx-4 text-sm font-normal">
                            Settings
                        </span>
                    </a>
                </div>
            </nav>

            <div className="absolute bottom-4 left-[30%] flex flex-col gap-1 items-center justify-center">
                <p className="text-[#585858] text-[16px]">Student ID</p>
                <p className="text-blue-ribbon-400 text-[16px]">KC0001</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar