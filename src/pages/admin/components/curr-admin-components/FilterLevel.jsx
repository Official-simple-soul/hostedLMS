import React from 'react'

const FilterLevel = () => {
  return (
        <div className='shadow-[0px_4px_20px_rgba(0,_0,_0,_0.1)] absolute z-[1] w-[160px] h-[108px] border-[1px] border-[#808080] rounded-[8px] bg-[#FFFFFF] flex  items-center justify-center flex-col  '>
            <div className="text-[#303030] font-[400] px-[12px] py-[16px]">
                <button className='outline-[0] border-[0] mb-[28px] border-[1px] text-start border-[#0D6EFD]  rounded-[8px]'>Beginer</button>
                <button className='outline-[0] border-[0] rounded-[8px] text-start'>Intermediate</button>
            </div>
        </div>
  )
}

export default FilterLevel