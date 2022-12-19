import React from 'react'

const FilterLevel = ({  options,setSelected}) => {
  return (
        <div className='shadow-[0px_4px_20px_rgba(0,_0,_0,_0.1)] absolute z-[1] w-[160px] h-[108px] border-[1px] border-[#808080] rounded-[8px] bg-[#FFFFFF] '>
          {
            options.map((option)=>{
              return (
            <div className="text-[#303030] font-[400] px-[12px] py-[16px]">
              <button onClick={e=>setSelected(option)} className='outline-[0] border-[0] rounded-[8px]'>{option}</button>
            </div>
              )
            })
          }
        </div>
  )
}

export default FilterLevel