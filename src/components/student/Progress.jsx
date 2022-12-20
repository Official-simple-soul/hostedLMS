import React from 'react'
import './Progress.css' 

const Progress = (props) => {
  return (
    <div className='bg-white py-4 px-3 rounded-xl'>
        <p className='text-lg'>{props.title}</p>
        <div className="flex flex-col gap-4 justify-center mt-4">
            <div className="flex flex-col gap-1"> 
                <div className="flex justify-between items-center">
                    <p className='text-[15px] text-[#585858]'>{props.trackWeek}</p>
                    <p className='text-[15px] text-[#585858] font-semibold'>{props.percentage}</p>
                </div>
                <div className="h-3 rounded-lg w-full bg-[#F5F5F5] myshadow">
                    <div className="h-full w-[33%] rounded-lg bg-blue-ribbon-500 myshadow"></div>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                    <p className='text-[15px] text-[#585858]'>{props.pointsOverall}</p>
                    <p className='text-[15px] text-[#585858] font-semibold'>{props.point}</p>
                </div>
                <div className="h-3 rounded-lg w-full bg-[#F5F5F5] myshadow">
                    <div className="h-full w-[60%] rounded-lg bg-blue-ribbon-500 myshadow"></div>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                    <p className='text-[15px] text-[#585858]'>{props.stagesCompleted}</p>
                    <p className='text-[15px] text-[#585858] font-semibold'>{props.stage}</p>
                </div>
                <div className="h-3 rounded-lg w-full bg-[#F5F5F5] myshadow">
                    <div className="h-full w-[38%] rounded-lg bg-blue-ribbon-500 myshadow"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Progress