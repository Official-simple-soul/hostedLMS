import React, { useState } from 'react'
import { userInputs } from './FormInput'

const SignUpOne = () => {
    const [data, setData]=useState({})

            const handleInput =(e)=>{
                    const id= e.target.id;
                    const value= e.target.value;
                    setData({...data,[id]:value})
                }
                console.log(data)
            // const handleSubmit =(e)=>{
            //     e.preventDefault()
            //     }
  return (
    <div>
            {userInputs.map((input)=>{
        return (
            <div key={input.id} className='w-[100%]' >
                <label className='w-[100%]'>
                    <span className='block text-[#808080] mb-[8px] mt-[30px] text-[18px] font-[500] leading-[22px]'>{input.label}</span>
                    <input 
                        onChange={handleInput} 
                        className='outline-[0] border-[none] border-[#808080] border border-solid rounded-[8px] w-[100%] h-[56px] text-[#808080] pt-[16px] pb-[16px] pl-[17px] text-[18px] font-[400] leading-[24px]' 
                        type={input.type} id={input.id}  placeholder={input.placeholder} />
                    <span className="block text-[#808080] text-[14px] font-[400]">
                        {input.instruction}
                    </span>
                </label> 
            </div>
        )
    })}
    </div>
  )
}

export default SignUpOne