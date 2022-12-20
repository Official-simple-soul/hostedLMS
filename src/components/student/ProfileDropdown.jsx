import React from 'react'
import {BiLogOut} from 'react-icons/bi'
import { BsFillPersonFill, BsDot } from 'react-icons/bs'
import { MdLock } from 'react-icons/md'
import { TiArrowSortedUp } from 'react-icons/ti'

const ProfileDropdown = () => {
  return (
    <div className='bg-white absolute top-[78px] right-4 rounded-lg w-[329px] border'>
      <TiArrowSortedUp className='text-4xl absolute right-0 top-[-20px] text-white' />
      <div className="flex flex-col gap-2 p-5">
        <h3 className='text-blue-ribbon-500 text-lg font-medium'>SAMMY SMITH</h3>
        <p className="text-[16px] font-medium flex items-center">UI/UX Design Student <BsDot className='text-xl' /> Beginner</p>
        <p className="text-lg font-light">Stage 4</p>
        <p className="text-sm font-light text-[#808080]">ID: KC-ST-0001</p>
      </div>
      <div className="border-y flex flex-col">
        <div className="flex items-center gap-2 py-4 px-5">
          <BsFillPersonFill className='text-[#585858] text-2xl' />
          <p className="text-lg text-[#585858] font-medium">View Profile</p>
        </div>
        <div className="flex items-center gap-2 py-4 px-5">
          <MdLock className='text-[#585858] text-2xl' />
          <p className="text-lg text-[#585858] font-medium">Change Password</p>
        </div>
      </div>

        <div className="flex items-center gap-2 py-4 px-5">
          <BiLogOut className='text-[#F41717] text-2xl' />
          <p className="text-lg font-medium text-[#F41717]">Logout</p>
        </div>
    </div>
  )
}

export default ProfileDropdown