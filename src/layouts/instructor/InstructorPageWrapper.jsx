import React, {useState} from 'react'
import Sidebar from './Sidebar'
import { Notification, Avatar, ArrowDown } from '../../assets'

const InstructorPageWrapper = ({children}) => {
    const [menu, setMenu] = useState(false)
  return (
    <>
        <div className="flex items-stretch mt-0">
        <div className={`${!menu? 'hidden': 'block'} opacity-50 fixed top-0 bottom-0 left-0 right-0 bg-black z-20`}></div>
            <div>
                <div id="sidebar">
                    <Sidebar 
                    menu={menu}
                    setMenu={setMenu}
                    />
                </div>
            </div>
            <div className="md:hidden absolute top-5 left-5 z-50" onClick={()=>setMenu(!menu)}>
                <i class={`fa-solid ${menu?'fa-times': 'fa-bars'} text-2xl opacity-80`}></i>
            </div>

            <div className="main-content bg-[#F5F5F5] w-full h-full">
            <nav className='h-[72px] bg-[#F5F5F5] flex items-center justify-between px-5 mt-1.5'>
                <div>
                {/* <p>Search bar if any</p> */}
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

export default InstructorPageWrapper