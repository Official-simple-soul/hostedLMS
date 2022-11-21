import React from 'react'
import Sidebar from './Sidebar'
import { Notification, Avatar, ArrowDown } from '../../assets'

const AdminPageWrapper = ({children}) => {
  return (
    <>
    <div className="flex items-stretch mt-0">
        <div>
            <div id="sidebar">
                <Sidebar />
            </div>
        </div>

        <div className="main-content bg-[#F5F5F5] w-full h-full">
            <nav className='h-[72px] bg-[#F5F5F5] flex items-center justify-between px-5 mt-1.5'>
                <div>Search bar if any</div>

                <div className="flex gap-4 items-center">
                <div className="relative bg-white h-[48px] w-[48px] rounded-lg flex justify-center">
                    <img src={Notification} alt="" className='w-[18px]' />
                    <div className="absolute top-[-10px] right-[-10px] w-[24px]">
                    <p className='bg-[#FF3F3F] p-1 text-white rounded-full text-xs font-bold flex justify-center'>
                        <span>6</span>
                    </p>
                    </div>
                </div>

                <div className="relative bg-white h-[48px] w-[88px] rounded-[24px] flex gap-2 px-3">
                    <img src={Avatar} alt="" className='absolute top-0 left-0' />
                    <img src={ArrowDown} alt="" className='w-[12px] absolute top-[40%] right-3' />
                </div>

                </div>
            </nav>

            <div className='m-6'>
                {children}
            </div>
        </div>
    </div>
    </>
  )
}

export default AdminPageWrapper