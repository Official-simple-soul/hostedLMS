import React, { useState } from 'react'
import './NewPassword.css'
import { AiFillEye } from 'react-icons/ai';
import Modal from '../../components/authentication/Modal'
import { Good, three, Logo } from "../../assets/index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import ForgotPasswordModal from './components/ForgotPasswordModal';
const NewPassword = () => {
    
    const[form, setForm] = useState({
        password: ''  
    })
    const[confirmPassword, setconfirmPassword] = useState({
        passy : ''
    })
    const[modalOpen, setModalOpen] = useState(false)

    const setNewPassword = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        sessionStorage.setItem('user', JSON.stringify(form))
    }
    console.log(form)
    const handlePassword = (e)=>{
        setconfirmPassword({
            ...confirmPassword,
            [e.target.name]: e.target.value
        })
    }
    console.log(confirmPassword)
    const handleSubmit = (e)=>{
        e.preventDefault()
        const user = JSON.parse(sessionStorage.getItem('user'))
        if(form?.password === confirmPassword?.passy) {
            setModalOpen(true) 
        }  
    else{
        console.log('retry')
        toast.error('Password do not match')
    }
        
             
    }
    return (
    <div className='wrapper'>
        <ToastContainer />

        <div className='conic-bg hidden md:block'>
            <div className='bg-trans flex flex-col items-center justify-center text-center text-white'>
                <h1 className='text-4xl font-extrabold pb-4'>Kodecamp LMS</h1> 
                <p>Learning has been made simple, interactive and fun.</p>
            </div>
        </div> 

        <div className='ash-bg'>
            <div className='bg-form'>
                <div className='inner relative h-full flex flex-col justify-center items-center'>
                    <span className="bg-green-600 absolute h-1 w-[98%] top-0 left-0 overflow-hidden"></span>

                    <div className="w-11/12 justify-center items-center flex flex-col gap-6">
                        <div className='text w-full flex flex-col gap-6 items-center justify-center'>
                            <div className="w-20 h-20 rounded-lg bg-transparent shadow-md grid place-items-center">
                                <img src={Logo} alt="kodecamp-logo" />
                            </div>

                            <h2 className='text-[#303030] text-2xl font-medium'>Create new password</h2>

                            <div className="flex isolate">
                                <span className="w-7 h-7 rounded-full flex justify-center items-center bg-green-600">
                                    <img src={Good} alt="tick" />
                                </span>
                                <div className="flex justify-center items-center">
                                    <hr className="w-14 h-px flex place-items-center text-center bg-gray-600" />
                                </div>
                                <span className="w-7 h-7 rounded-full flex justify-center items-center bg-green-600">
                                    <img src={Good} alt="tick" />
                                </span>
                                <div className="flex justify-center items-center">
                                    <hr className="w-14 h-px flex place-items-center text-center bg-gray-600" />
                                </div>
                                <span className="w-7 h-7 rounded-full flex justify-center items-center bg-[#585858]">
                                    <p className="font-medium text-lg text-center text-white">3</p>
                                </span>
                            </div>

                            <p className='text-lg'>Kindly set a new password and confirm the password</p>
                        </div>

                        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-7'>
                            <div className='flex flex-col gap-2 relative'>
                                <label className='text-[#808080]'>New Password</label>
                                <input 
                                    placeholder='Type new password' 
                                    className='px-5 h-[54px] border border-[#808080] outline-[#808080]'
                                    name='password' 
                                    onChange={setNewPassword}
                                />
                                <AiFillEye className='absolute text-[#808080] text-xl right-2 bottom-3' />
                            </div> 

                            <div className='flex flex-col gap-2 relative'>
                                <label className='text-[#808080]'>Confirm Password</label>
                                <input 
                                    placeholder='Type your password again' 
                                    className='px-5 h-[54px] border border-[#808080] outline-[#808080]' 
                                    name='passy' o
                                    nChange={handlePassword}
                                />
                                <AiFillEye className='absolute text-[#808080] text-xl right-2 bottom-3' />
                            </div>

                            <button className='h-[54px] mt-[1rem] bg-[#0D6EFD] text-white' onClick={()=>setModalOpen(true)}>Save Password</button> 
                        </form>

                        <p className='text-center '>Remember password? <Link to='/' className='text-[#0D6EFD] font-semibold'>Log in</Link></p>
                    </div>

                </div>
            </div>
       </div>
       {modalOpen && <ForgotPasswordModal 
       showModal={setModalOpen}
       font=''
       title={'Password reset successfull'}
       body={'You can now use your new password to log into your account'}
       button={'Login'}
       />}
    </div>
  )
}

export default NewPassword