import React from 'react'

const FilterLevel = () => {
  return (
        <div className='w-[160px] h-[160px]  rounded-[20px] bg-[#FFFFFF] flex justify-center items-center flex-col px-[60px] pb-[40px] pt-[36.5px]'>
            <div className="flex flex-col mb-[40px] gap-[12px]">
                <button className='outline-[0] border-[0] border-[1px] text-start border-[#0D6EFD]  rounded-[8px]'>Beginer</button>
                <button className='outline-[0] border-[0] rounded-[8px] text-start'>Intermediate</button>
            </div>
        </div>
  )
}

export default FilterLevel