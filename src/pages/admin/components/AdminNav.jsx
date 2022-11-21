import React from 'react'
import Search from '../../../assets/icons/search.svg'
import Bell from '../../../assets/icons/bell.svg'
import ProfileImg from '../../../assets/icons/ProfileImg.svg'
import DownArrow from '../../../assets/icons/down-arrow.svg'

const AdminNav = () => {
  return (
    <div className='w-[100%] flex justify-between '>
        <div className='w-[500px] h-[48px] bg-[#FFFFFF] flex items-center rounded-[8px]'  >
            <span className='w-[56px] h-[100%] flex justify-center items-center'><img className='w-[17.49px] h-[17.49px]' src={Search} alt="search" /></span><input className='rounded-[8px] outline outline-[0] border border-[0] pl-[10px] w-[444px] h-[100%]' type="search" placeholder='Search' />
        </div>
        <div className='flex gap-[10px]'>
            <span className='relative after:w-[20px] after:h-[20px] after:absolute after:content-["6"] after:flex after:justify-center after:items-center after:text-[#FFFFFF] after:text-[11px] after:bg-[#FF3F3F] after:top-[0] after:right-[-4px] after:rounded-[50%] w-[48px] h-[48px] bg-[#FFFFFF] flex justify-center items-center '><img className=' w-[15.17px] h-[19.5px]' src={Bell} alt="bell" /></span>
            <div className='w-[88px] h-[48px] flex gap-[14px] items-center bg-[#FFFFFF] rounded-[24px]'>
                <img className='w-[48px] h-[48px] rounded-[50%]' src={ProfileImg} alt="profile" />
                <img src={DownArrow} alt="down arrow" />
            </div>
        </div>
    </div>
  )
}

export default AdminNav