import React, { useState } from 'react';
import Style from './Login.module.css';
import { Logo, Eye, Lock, Mail } from '../../assets';
// import email from '../../assets/icons/login-message.png';
// import lock from '../../assets/icons/login-lock.png';
// import eye from '../../assets/icons/login-eye.png';
import { Link } from 'react-router-dom';

const Login = () => {
 const [showpassword, setShowpassword] = useState(false);

 const toggle = () =>{
  setShowpassword(!showpassword);
 }

  return (
    <div className=' ' >
      <div className=' flex flex-row shadow-xl rounded-xl'>
        
          <div className={`${Style.col1_bg} w-full h-screen `}>
            <div className={`${Style.b_radLeft} rounded-xl shadow-2xl my-12 ml-12 h-5/6 flex flex-col justify-center`}>
              <h2 className={`${Style.col1_heading} text-center`}>Kodecamp LMS</h2>
              <p className={`${Style.col1_para}`}>Learning has been made simple, interactive and fun.</p>
            </div>
          </div>
          
          <div className={`${Style.col2_bg} w-full h-screen`}>
            <div className={`${Style.b_radRight} rounded-xl shadow-2xl my-12 mr-12 bg-white pt-9 h-5/6`}>
              <img src={Logo} alt="" className=' bg-white shadow-lg rounded-lg p-3 m-auto' />
              <h2 className={`${Style.col2_text} my-4 text-center`}>Log in to dashboard</h2>

              <div className={`${Style.login_text} px-12`}>
                <form action="">
                  <div className='mb-4'>
                    <label htmlFor="email">Email</label>
                    <div className='relative flex flex-row items-center'>
                      <span className='absolute left-3'><img src={Mail} alt="" /></span>
                      <input type="text"  name='email' placeholder='Type your email' className='border border-gray-400 rounded-lg py-3 outline-none pr-6 pl-10 w-full' required/>
                    </div>
                  </div>

                  <div className='mb-4'>
                    <label htmlFor="email">Password</label>
                    <div className='relative flex flex-row items-center'>
                      <span className='absolute left-3'><img src={Lock} alt="lock" /></span>
                      <input type={(showpassword === false)? 'password' : 'text' }  name='password' placeholder='Type your password' className='border border-gray-400 rounded-lg py-3 outline-none pr-6 pl-10 w-full' required/>
                      {
                        (showpassword === false)? <span><img src={Eye} alt="eye" className='absolute right-3 flex justify-center items-center bottom-4'  onClick={toggle}/></span> :
                        <span  className='absolute right-4 flex justify-center items-center bottom-3'>
                          <svg  onClick={toggle} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#808080" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                          </svg>
                        </span>
                      }
                      
                    </div>
                  </div>

                  <div className='flex flex-row justify-between mb-8'>
                    <div>
                      <input type="checkbox" name="" id=""  className='border border-gray-700'/>
                      <span className='pl-4'>Remember me</span>
                    </div>
                    <p className={`${Style.login_link}`}><Link to={'#'}>Forgot password?</Link></p>
                  </div>

                  <div>
                    <input type="submit" value="Log In" className={`${Style.login_btn} w-full py-3 text-center cursor-pointer`} />
                  </div>

                  <div className='pt-5 pb-12'>
                    <p className='text-center'>Don't have an account? 
                    <span className={`${Style.login_link} pl-2`}><Link to={'#'}>Create account</Link></span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  )
}

export default Login;