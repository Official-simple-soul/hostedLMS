import React, { useState } from 'react'
import DeleteIcon from '../../../assets/icons/delete-icon.svg'
import ConfirmDelete from './ConfirmDelete'


const DeleteWeek = ({deletePop,setDeletePop}) => {
  const [dele,setDele] = useState(false)

  const confirmDelete = () =>{
    setDele(!dele)
  }

  return (
    <>
    {
      !dele ? 
    <div className='flex justify-center items-center w-[100%] h-[100%]'>
        <div className='w-[480px] h-[384px]  rounded-[20px] bg-[#FFFFFF] flex justify-center items-center flex-col px-[60px] pb-[40px] pt-[36.5px]'>
            <img className='w-[58.33px] h-[75px]' src={DeleteIcon} alt="delete" />
            <h1 className='text-[28px] text-[#171717] mb-[16px]'>Delete this week?</h1>
            <p className='text-[18px] text-[#585858] mb-[24px] text-center'>Are you sure you want to delete the week “Introduction to UI, UX & Design Thinking”?</p>
            <div className="flex mb-[40px] gap-[12px]">
                <button className='w-[114px] h-[54px] bg-[#FFFFFF] text-[#585858]  outline-[0]  border-[1px] border-[#585858]  rounded-[8px]'>Cancel</button>
                <button onClick={confirmDelete} className='w-[234px] h-[54px] bg-[#F41717] text-[#FFFFFF]  outline-[0] border-[0] rounded-[8px]'>Yes, delete</button>
            </div>
        </div>
    </div> :
// deletePop useState is passed as prop to ConfirmDelete {from DeleteWeek}  to be able to navigate back
    <ConfirmDelete deletePop={deletePop} setDeletePop={setDeletePop}/>
    }
    </>
  )
}

export default DeleteWeek