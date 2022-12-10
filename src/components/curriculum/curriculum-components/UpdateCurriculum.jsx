import React from 'react'

const UpdateCurriculum = ({deletePop, setDeletePop,updateOptions,index}) => {
const handleDelete= ()=>{
    setDeletePop(!deletePop)
}

  return (
    <div onClick={()=>updateOptions(index)} className={` flex justify-center items-center w-[100%] h-[100%]`}>
        <div className='border-[1px] border-[#808080] z-[1] w-[158px] h-[108px] py-[16px] bg-[#FFFFFF] rounded-[8px] shadow-[0px_4px_20px_rgba(0_0_0_0.1)]'>
            <button className='outline-[0] mb-[25px]  border-[0] pl-[12px] rounded-[8px] text-[#303030] '>Edit Week</button>
            <hr  />
            <button onClick={handleDelete} className='outline-[0] mt-[10px] border-[0] pl-[12px] rounded-[8px] text-[#F41717]'>Delete Week</button>
        </div>
    </div>
  )
}

export default UpdateCurriculum