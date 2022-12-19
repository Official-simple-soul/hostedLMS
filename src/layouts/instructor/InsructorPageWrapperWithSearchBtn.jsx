import React from 'react'
import Sidebar from './Sidebar'
import { Notification, Avatar, ArrowDown } from '../../assets';
import search_icon from '../../assets/icons/classroom-search-icon.svg';

const InsructorPageWrapperWithSearchBtn = ({children}) => {
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
                    <div className=''>
                        <div className='flex flex-row  items-center relative bg-[#FFFFFF] rounded-lg w-[500px] h-[48px] '>
                            <img src={search_icon} alt="search-icon"  className='w-[17.49px] h-[17.49px] absolute left-5'/>
                            <input type="search" name="search" id="" placeholder='Search' className='text-base text-[color: #808080] tracking-[0.1px] font-normal text-opacity-50 outline-none pl-12 w-full pr-3' />
                        </div>
                    </div>
    
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

export default InsructorPageWrapperWithSearchBtn;