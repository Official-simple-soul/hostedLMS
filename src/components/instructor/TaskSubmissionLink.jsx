import React, { useState } from 'react'
import { Avatar } from '../../assets'
import { BsThreeDotsVertical } from 'react-icons/bs'

const TaskSubmissionLink = () => {
    const [ showModal, setShowModal ] = useState(false)
  return (
    <div className='mt-4'>
        <p className="text-xl">Redesign KodeCamp Website</p>
        <p className='text-sm text-grey-500 mt-2'>UI/UX Design . Beginner</p>

        <div className="flex mt-4 items-center gap-[15rem]">
            <div className='flex items-center gap-2 bg-white py-3 px-6'>
                <input type="checkbox" name="" id="" />
                <p className="text-grey-500 text-sm">Select all students</p>
            </div>

            <p className='text-base font-normal'>Showing 1-10 of 78 submissions</p>
        </div>

        <div className="flex flex-col gap-3 mt-8">
            <div className="grid grid-cols-7 gap-1 bg-white px-6 py-3 rounded-xl">
                <div className='border-r px-3 flex items-center gap-8 col-span-2'>
                    <input type="checkbox" name="" id="" />
                    <div className="flex gap-4 items-center">
                        <img src={Avatar} alt="" />
                        <p className='text-lg font-medium text-grey-500'>Sotonye Ebadan</p>
                    </div>
                </div>

                <div className='border-r px-3 col-span-3 flex flex-cols gap-2'>
                    <div className="w-full flex items-center justify-between">
                        <p className="text-sm text-grey-500">Redesign KodeCamp Website</p>
                        <p className="text-sm text-grey-500">05:45PM . 12/03/2022</p>
                    </div>
                </div>

                <div className='px-3 flex items-center justify-between col-span-2'>
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center">
                            <p className="text-lg">Grade</p>
                            <p className="text-xs text-red-500">Not Graded</p>
                        </div>
                        <input type="numbet" className='h-[56px] w-[86px] rounded-lg border' />
                    </div>
                    <BsThreeDotsVertical 
                        className='text-lg text-[#303030]' 
                        onClick={() => setShowModal(!showModal)}
                    />
                </div>
            </div>
        </div>

        {showModal ? <div>Heloo</div> : null}
    </div>
  )
}

export default TaskSubmissionLink