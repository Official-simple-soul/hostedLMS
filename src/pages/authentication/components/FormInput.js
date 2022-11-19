import { Eye } from '../../../assets'
import {FaEye, FaEyeSlash} from 'react-icons/fa'

import React from 'react'

const FormInput = ({handleInput, eye,setEye,showPassword,formData}) => {
  return (
    <div>
            <label className='w-[100%]'>
                    <span className='block text-[#808080] mb-[8px] mt-[30px] text-[18px] font-[500] leading-[22px]'>First Name *</span>
                    <div>
                        <input 
                        onChange={handleInput}       
                        className='outline-[0] border-[none] border-[#808080] border border-solid rounded-[8px] w-[100%] h-[56px] text-[#808080] pt-[16px] pb-[16px] pl-[17px] text-[18px] font-[400] leading-[24px]' 
                        type='text' value={formData.firstname} name='fullname' placeholder={'Type your full name'} required/>
                    </div>
            </label>

            <label className='w-[100%]'>
                    <span className='block text-[#808080] mb-[8px] mt-[30px] text-[18px] font-[500] leading-[22px]'>Last Name *</span>
                    <div>
                        <input 
                        onChange={handleInput}       
                        className='outline-[0] border-[none] border-[#808080] border border-solid rounded-[8px] w-[100%] h-[56px] text-[#808080] pt-[16px] pb-[16px] pl-[17px] text-[18px] font-[400] leading-[24px]' 
                        type='text' value={formData.lastname} name='fullname' placeholder={'Type your full name'} required/>
                    </div>
            </label> 
            <label className='w-[100%]'>
                    <span className='block text-[#808080] mb-[8px] mt-[30px] text-[18px] font-[500] leading-[22px]'>Username *</span>
                        <input 
                        onChange={handleInput} 
                        className='outline-[0] border-[none] border-[#808080] border border-solid rounded-[8px] w-[100%] h-[56px] text-[#808080] pt-[16px] pb-[16px] pl-[17px] text-[18px] font-[400] leading-[24px]' 
                        type='text' value={formData.username} name='username'  placeholder={'Type your username'} required/>
                    <span className="block text-[#808080] text-[14px] font-[400]">
                        Same username you used on the Discord workspace.
                    </span>
            </label> 
            <label className='w-[100%]'>
                    <span className='block text-[#808080] mb-[8px] mt-[30px] text-[18px] font-[500] leading-[22px]'>Email *</span>
                        <input 
                        onChange={handleInput} 
                        className='outline-[0] border-[none] border-[#808080] border border-solid rounded-[8px] w-[100%] h-[56px] text-[#808080] pt-[16px] pb-[16px] pl-[17px] text-[18px] font-[400] leading-[24px]' 
                        type='email' value={formData.email} name='email'  placeholder={'Type your email'} required/>
                    <span className="block text-[#808080] text-[14px] font-[400]">
                       Same email address you used on the Discord workspace
                    </span>
                </label> 
            <label className='w-[100%]'>
                    <span className='block text-[#808080] mb-[8px] mt-[30px] text-[18px] font-[500] leading-[22px]'>Password *</span>
                    <div className='relative  border-[none] border-[#808080] border border-solid rounded-[8px] w-[100%] h-[56px] text-[#808080] '>
                        <input 
                        onChange={handleInput} 
                        className='outline-[0]   w-[90%] h-[54px] border-[none]  pt-[16px] pb-[16px] pl-[17px] text-[18px] font-[400] leading-[24px]' 
                        type={!eye ? 'password' : 'text'} 
                        value={formData.password}
                        name='password'  
                        placeholder={'Type your password'} 
                        required/>
                        <div className='absolute  right-[10px] text-[22px] text-[#808080] top-[16px]'>
                           {!eye ?  <FaEye onClick={showPassword} /> :  <FaEyeSlash onClick={showPassword} /> }
                        </div>
                    </div> 
                </label> 
                <label className='w-[100%]'>
                        <span className='block text-[#808080] mb-[8px] mt-[30px] text-[18px] font-[500] leading-[22px]'>Confirm Password *</span>
                        <div className='relative  border-[none] border-[#808080] border border-solid rounded-[8px] w-[100%] h-[56px] text-[#808080] '>
                            <input 
                            onChange={handleInput} 
                            className=' outline-[0]   w-[90%] h-[54px] border-[none]  pt-[16px] pb-[16px] pl-[17px] text-[18px] font-[400] leading-[24px]' 
                            type={!eye ? 'password' : 'text'} 
                            value={formData.cpassword}
                            name='cpassword'  
                            placeholder={'Type your password again'} 
                            required/>
                            <div className='absolute  right-[10px] text-[22px] text-[#808080] top-[16px]'>
                                {!eye ?  <FaEye onClick={showPassword} /> :  <FaEyeSlash onClick={showPassword} /> }
                            </div>
                        </div>
                </label> 
    </div>
  )
}

export default FormInput


