import React, { useState } from 'react'
import Logo from '../../assets/images/logo.png'
import { userInputs } from './FormInput'
const SignUp = () => {
const [data, setData]=useState({})

            const handleInput =(e)=>{
                    const id= e.target.id;
                    const value= e.target.value;
                    setData({...data,[id]:value})
                }
                console.log(data)
            const handleSubmit =(e)=>{
                e.preventDefault()
                }
  return (
    <div className="flex w-[100%] ">
        <div 
            className=' 
                        pt-[70px]
                        pl-[70px]
                        pb-[70px]
                        w-[50%]
                        h-[1170px] 
                        bg-[white]
                        bg-[conic-gradient(from_142.8deg_at_58.75%_50%,_#44BF93_-56.25deg,_#4BCA84_37.5deg,_#0D6EFD_191.25deg,_#44BF93_303.75deg,_#4BCA84_397.5deg)]
                        flex
                        items-center
                        justify-center
                        '>
            <div 
                className='
                        flex
                        flex-col
                        w-[640px]
                        min-h-[1035px]
                        bg-[tranparent]  
                        items-center
                        shadow-[-15px_15px_24px_rgba(22,51,102,0.25)]
                         rounded-t-[24px]
                        rounded-r-[0px]
                        rounded-b-[0px]
                        rounded-l-[24px]
                        text-[#fff]
                        '>
                <h1 className='mt-[315px] mb-[8px] text-[45px] text-[#F5F5F5] font-[700] leading-[52px] ' >Kodecamp LMS</h1>
                <p className='text-[18px] font-[400] tracking-[0.1px] leading-[22px]'>Learning has been made simple, interactive and fun.</p>
            </div>
        </div>
       
        <div className='
                        pt-[70px]
                        pr-[70px]
                        pb-[70px]
                        w-[50%] 
                        h-[1170px] 
                        bg-[#ffffff] 
                        flex
                        justify-center
                        items-center
                        relative
                        '>
            <div className='
                        flex
                        flex-col 
                        w-[640px]
                        h-[1035px]
                        bg-[tranparent]  
                        items-center
                        shadow-[15px_15px_24px_rgba(22,51,102,0.25)]
                        rounded-t-[0px]
                        rounded-r-[24px]
                        rounded-b-[24px]
                        rounded-l-[0px]
                        before:absolute before:content-[""] 
                        before:w-[320px] before:h-[4px] before:top-[60px] before:left-[0]
                        before:border-[5px] before:border-[#00BD56] before:rounded-t-[0px] before:rounded-r-[10px]
                        before:rounded-b-[10px] before:rounded-l-[0px]
                        px-[10px] pt-[19px] pb-[20px]
                    '>
                <div className="shadow-[0px_4px_8px_rgba(0,0,0,0.15)] mt-[40px] w-[80px] h-[80px] flex justify-center items-center">
                     <img className=' w-[52px] h-[51px]' src={Logo} alt={'kodecamp'}/>
                </div>
                  <h2 className='text-[#303030] text-[28px] font-[500] leading-[36px] mt-[24px] tracking-[14px]'>Create account</h2>

                  <div className="flex justify-center items-center w-[120px] text-[#ffffff] text-[18px] font-[500] leading-[22px] mt-[38.5px]">
                    <span className='w-[30px] h-[30px] bg-[#0D6EFD] flex justify-center items-center  rounded-[50%]'>1</span>
                    <span className='w-[60px] h-[1px] bg-[#D9D9D9]'></span>
                    <span className='w-[30px] h-[30px] bg-[#808080] flex justify-center items-center rounded-[50%]'>2</span>
                  </div>
                  <form onSubmit={handleSubmit} className="flex w-[80%] justify-center mt-[10px] items-center flex-col ">
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
                        {/* <label className='w-[100%]'>
                             <span className='block text-[#808080] mb-[8px]  text-[18px] font-[500] leading-[22px]'>Full Name</span>
                            <input className='outline-[0] border-[none] border-[#808080] border border-solid rounded-[8px] w-[100%] h-[56px] text-[#808080] pt-[16px] pb-[16px] pl-[17px] text-[18px] font-[400] leading-[24px]' type="text" name="name" placeholder='Type your full name' />
                        </label>
                        <label className='w-[100%]'>
                             <span className='block text-[#808080] mb-[8px] mt-[30px] text-[18px] font-[500] leading-[22px]'>Username</span>
                            <input className='outline-[0] border-[none] border-[#808080] border border-solid rounded-[8px] w-[100%] h-[56px] text-[#808080] pt-[16px] pb-[16px] pl-[17px] text-[18px] font-[400] leading-[24px]' type="text" name="name" placeholder='Type your Username' />
                            <span className="block text-[#808080] text-[14px] font-[400]">
                                Same username you used on the Discord workspace
                            </span>
                        </label>
                        <label className='w-[100%]'>
                             <span className='block text-[#808080] mb-[10px] mt-[30px] text-[18px] font-[500] leading-[22px]'>Email</span>
                            <input className='outline-[0] border-[none] border-[#808080] border border-solid rounded-[8px] w-[100%] h-[56px] text-[#808080] pt-[16px] pb-[16px] pl-[17px] text-[18px] font-[400] leading-[24px]' type="text" name="name" placeholder='Type your email' />
                            <span className="block text-[#808080] text-[14px] font-[400]">
                                Same email address you used on the Discord workspace
                            </span>
                        </label>
                        <label className='w-[100%]'>
                             <span className='block text-[#808080] mb-[10px] mt-[30px] text-[18px] font-[500] leading-[22px]'>Password</span>
                            <input className='outline-[0] border-[none] border-[#808080] border border-solid rounded-[8px] w-[100%] h-[56px] text-[#808080] pt-[16px] pb-[16px] pl-[17px] text-[18px] font-[400] leading-[24px]' type="text" name="name" placeholder='Type your password' />
                        </label>
                        <label className='w-[100%]'>
                             <span className='block text-[#808080] mb-[10px] mt-[30px] text-[18px] font-[500] leading-[22px]'>Confirm Password</span>
                            <input className='outline-[0] border-[none] border-[#808080] border border-solid rounded-[8px] w-[100%] h-[56px] text-[#808080] pt-[16px] pb-[16px] pl-[17px] text-[18px] font-[400] leading-[24px]' type="text" name="name" placeholder='Type your Password again' />
                        </label> */}
                        <button type='submit' className="text-[18px] font-[500] leading-[22px] tracking-[0.1px] mt-[40px] w-[100%] outline-[0] border border-solid rounded-[8px] h-[56px] bg-[#0D6EFD] text-[#ffffff]">
                            Next
                        </button>
                        <p className='mb-[40px] mt-[24px]'>Already have an account? Log in <a className='text-[blue]' href="">Log In</a></p>
                  </form>
            </div>
        </div>

    </div>
  )
}

export default SignUp