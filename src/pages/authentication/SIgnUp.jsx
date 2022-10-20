import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/icons/logo.svg'
import Good from '../../assets/images/good2.png'
import SignUpOne from './components/SignUpOne'
import SignUpTwo from './components/SignUpTwo'

const SignUp = () => {
        const [page,setPage] =useState(0)
        const [eye,setEye] =useState(false)
        
        const showPassword = ()=>{
            setEye(!eye)
        }
        const PageDisplay = ()=>{
            if(page === 0){
                return <SignUpOne eye={eye} setEye={setEye} showPassword={showPassword}/>;
            }
            if(page === 1){
                return <SignUpTwo/>;
            }
        }

        const handleSubmit = (e)=>{
            e.preventDefault()
        }
  return (
    <div className="flex w-[100%] ">
        <div 
            className={page === 0 ?
                `
                        pt-[70px]
                        pl-[70px]
                        pb-[70px]
                        w-[50%]
                        min-h-[1170px] 
                        bg-[white]
                        bg-[conic-gradient(from_142.8deg_at_58.75%_50%,_#44BF93_-56.25deg,_#4BCA84_37.5deg,_#0D6EFD_191.25deg,_#44BF93_303.75deg,_#4BCA84_397.5deg)]
                        flex
                        items-center
                        justify-center
                        ` :
                        `
                        pt-[70px]
                        pl-[70px]
                        pb-[70px]
                        w-[50%]
                        min-h-[1190px] 
                        bg-[white]
                        bg-[conic-gradient(from_142.8deg_at_58.75%_50%,_#44BF93_-56.25deg,_#4BCA84_37.5deg,_#0D6EFD_191.25deg,_#44BF93_303.75deg,_#4BCA84_397.5deg)]
                        flex
                        items-center
                        justify-center
                        ` 
            }>
            <div 
                className='
                        flex
                        flex-col
                        w-[100%]
                        min-h-[1035px]
                        bg-[conic-gradient(from_142.8deg_at_58.75%_50%,_#44BF93_-56.25deg,_#4BCA84_37.5deg,_#0D6EFD_191.25deg,_#44BF93_303.75deg,_#4BCA84_397.5deg)] 
                        items-center
                        shadow-[-15px_15px_24px_rgba(22,51,102,0.25)]
                         rounded-t-[24px]
                        rounded-r-[0px]
                        rounded-b-[0px]
                        rounded-l-[24px]
                        text-[#fff]
                        '>
                <h1 className='mt-[315px] mb-[8px]  font-bold  text-[45px] text-[#F5F5F5] font-[700] leading-[52px] ' >Kodecamp LMS</h1>
                <p className='text-[18px] font-[400] leading-[22px]'>Learning has been made simple, interactive and fun.</p>
            </div>
        </div>


        <div  className={page === 0 ?
                        `pt-[70px]
                        pr-[70px]
                        pb-[70px]
                        w-[50%] 
                        min-h-[1170px] 
                        bg-[#ffffff] 
                        flex
                        justify-center
                        items-center
                        flex-col
                        ` :
                        `
                        pt-[70px]
                        pr-[70px]
                        pb-[70px]
                        w-[50%] 
                        min-h-[1190px] 
                        bg-[#ffffff] 
                        flex
                        justify-center
                        items-center
                        flex-col     
                         ` }>
                
            <div className='
                        flex
                        flex-col 
                        w-[100%]
                        h-[1035px]
                        bg-[#ffffff]  
                        items-center
                        shadow-[15px_15px_24px_rgba(22,51,102,0.25)]
                        rounded-t-[0px]
                        rounded-r-[24px]
                        rounded-b-[24px]
                        rounded-l-[0px]
                        relative
                    '>
                        {/* progress bar */}
                <div className='w-[595px] absolute top-[-2px] left-[0]'>
                    <div  className= { page === 0 ? `w-[50%] h-[4px] rounded-t-[0px] rounded-r-[10px] rounded-b-[10px]
                        rounded-l-[0px] bg-[#00BD56] text-left` :` w-[100%]  h-[4px] rounded-t-[0px] rounded-r-[10px] rounded-b-[10px]
                        rounded-l-[0px]  bg-[#00BD56] text-left`}>
                    </div>
                </div>

                <div className="shadow-[0px_4px_8px_rgba(0,0,0,0.15)] mt-[40px] w-[80px] h-[80px] flex justify-center items-center">
                     <img className=' w-[52px] h-[51px]' src={Logo} alt={'kodecamp'}/>
                </div>
                            {/* heading title */}
                  <h2 className='text-[#303030] text-[28px] font-[500] leading-[36px] mt-[24px] tracking-[1px]'>Create account</h2>

                  <div className="flex justify-center items-center w-[120px] text-[#ffffff] text-[18px] font-[500] leading-[22px] mt-[38.5px]">
                        <span className={ page === 0 ? `w-[30px] h-[30px] bg-[#0D6EFD] flex justify-center items-center  rounded-[50%]`:`w-[30px] h-[30px] bg-[#00BD56] flex justify-center items-center  rounded-[50%]`}>{page === 0 ? <>1</> : <img src={Good} alt='mark good'/>}</span>
                            <span className='w-[60px] h-[1px] bg-[#D9D9D9]'></span>
                        <span className={ page === 0 ? `w-[30px] h-[30px] bg-[#000000] flex justify-center items-center  rounded-[50%]`:`w-[30px] h-[30px] bg-[#0D6EFD] flex justify-center items-center  rounded-[50%]`}>2</span>
                  </div>
                  <form  onSubmit={handleSubmit} className="flex w-[80%] justify-center mt-[10px] items-center flex-col ">
                            <div className='w-[100%]'>
                                {PageDisplay()}
                            </div>
                            <div className='w-[100%]' >
                                <button
                                   type={page === 0 ? 'button': 'submit'} 
                                    onClick={()=>{setPage((currPage)=>currPage + 1) && setEye(!eye)}}  className="text-[18px] font-[500] leading-[22px] tracking-[0.1px] mt-[40px] w-[100%] outline-[0] border border-solid rounded-[8px] h-[56px] bg-[#0D6EFD] text-[#ffffff]">
                                     {page === 0 ? <p>Next</p>: <p>Create Account</p>}
                                </button>
                            </div>
                        <p className='mb-[40px] mt-[24px]'>Already have an account? <Link to={'login'} className='text-[blue]' href="">Log In</Link></p>
                  </form>
            </div>
        </div>

    </div>
  )
}

export default SignUp