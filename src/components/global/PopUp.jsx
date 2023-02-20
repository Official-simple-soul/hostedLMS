import React from 'react'
import { Success } from '../../assets'

const PopUp = (props) => {
  return (
    <div className='bg-[#000000a5] absolute w-full h-full z-10'>
        <div className='bg-white rounded-xl py-8 px-10 w-[45%] mx-auto flex flex-col gap-4 items-center'>
            <img src={Success} className="w-20" alt="" />
            <h2 className='text-[28px] font-medium'>{props.title}</h2>
            <p className='text-center'>{props.message}</p>
            <div className='flex gap-2'>
                <button className='border border-blue-ribbon-500 rounded-lg px-5 py-4'>Post Task</button>
                <button className='bg-blue-ribbon-500 text-white rounded-lg px-16 py-4'>View Task</button>
            </div>
        </div>
    </div>
  )
}

export default PopUp