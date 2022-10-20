import { Eye } from '../../../assets'

import React from 'react'

const FormInput = ({handleInput}) => {
  return (
    <div>
            <label className='w-[100%]'>
                    <span className='block text-[#808080] mb-[8px] mt-[30px] text-[18px] font-[500] leading-[22px]'>Full Name</span>
                        <div>
                        <input 
                        onChange={handleInput} 
                        className='outline-[0] border-[none] border-[#808080] border border-solid rounded-[8px] w-[100%] h-[56px] text-[#808080] pt-[16px] pb-[16px] pl-[17px] text-[18px] font-[400] leading-[24px]' 
                        type='text' id={'fullname'}  placeholder={'Type your full name'} />
                        </div>
                </label> 
            <label className='w-[100%]'>
                    <span className='block text-[#808080] mb-[8px] mt-[30px] text-[18px] font-[500] leading-[22px]'>Username</span>
                        <input 
                        onChange={handleInput} 
                        className='outline-[0] border-[none] border-[#808080] border border-solid rounded-[8px] w-[100%] h-[56px] text-[#808080] pt-[16px] pb-[16px] pl-[17px] text-[18px] font-[400] leading-[24px]' 
                        type='text' id={'username'}  placeholder={'Type your username'} />
                </label> 
            <label className='w-[100%]'>
                    <span className='block text-[#808080] mb-[8px] mt-[30px] text-[18px] font-[500] leading-[22px]'>Email</span>
                        <input 
                        onChange={handleInput} 
                        className='outline-[0] border-[none] border-[#808080] border border-solid rounded-[8px] w-[100%] h-[56px] text-[#808080] pt-[16px] pb-[16px] pl-[17px] text-[18px] font-[400] leading-[24px]' 
                        type='email' id={'email'}  placeholder={'Type your email'} />
                    <span className="block text-[#808080] text-[14px] font-[400]">
                       Same email address you used on the Discord workspace
                    </span>
                </label> 
            <label className='w-[100%]'>
                    <span className='block text-[#808080] mb-[8px] mt-[30px] text-[18px] font-[500] leading-[22px]'>Password</span>
                        <div className='relative  border-[none] border-[#808080] border border-solid rounded-[8px] w-[100%] h-[56px] text-[#808080] '>
                        <input 
                        onChange={handleInput} 
                        className='outline-[0]   w-[90%] h-[54px] border-[none]  pt-[16px] pb-[16px] pl-[17px] text-[18px] font-[400] leading-[24px]' 
                        type='password' id={'password'}  placeholder={'Type your password'} />
                        <img className='absolute right-[10px] top-[19px]' src={Eye} />
                        </div> 
                </label> 
            <label className='w-[100%]'>
                    <span className='block text-[#808080] mb-[8px] mt-[30px] text-[18px] font-[500] leading-[22px]'>Confirm Password</span>
                        <div className='relative  border-[none] border-[#808080] border border-solid rounded-[8px] w-[100%] h-[56px] text-[#808080] '>
                        <input 
                        onChange={handleInput} 
                        className=' outline-[0]   w-[90%] h-[54px] border-[none]  pt-[16px] pb-[16px] pl-[17px] text-[18px] font-[400] leading-[24px]' 
                        type='password' id={'cpassword'}  placeholder={'Type your password again'} />
                        <img className='absolute right-[10px] top-[19px]' src={Eye} />
                        </div>
                </label> 
    </div>
  )
}

export default FormInput


