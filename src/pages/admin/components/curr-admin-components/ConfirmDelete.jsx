import React from 'react'
import Good from '../../../../assets/images/Good.png'
import { NavLink } from 'react-router-dom'

const ConfirmDelete = ({deletePop,setDeletePop}) => {
  return (
    <div className='flex justify-center items-center w-[100%] h-[100%]'>
        <div className='w-[480px] h-[384px]  rounded-[20px] bg-[#FFFFFF] flex justify-center items-center flex-col px-[60px] pb-[40px] pt-[36.5px]'>
            <img className='w-[58.33px] h-[75px] mb-[32px]' src={Good} alt="delete" />
            <h1 className='text-[28px] text-[#171717] mb-[16px]'>Week deleted!</h1>
            <p className='text-[18px] text-[#585858] mb-[24px] text-center'>The week “Introduction to UI, UX & Design Thinking” has been deleted</p>
            <div className="flex mb-[40px] gap-[12px]">
              {/*  deletePop useState is passed as prop to ConfirmDelete {from DeleteWeek}  to be able to navigate back */}
                <button onClick={()=>{setDeletePop(!deletePop)}} className='w-[234px] h-[54px] bg-[#0D6EFD] text-[#FFFFFF]  outline-[0] border-[0] rounded-[8px]'>Okay</button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmDelete