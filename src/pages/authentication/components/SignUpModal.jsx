import React from 'react';
import { Link } from 'react-router-dom';
import rightIcon from '../../../assets/icons/right.svg'

const SignUp2Modal = () => {
  return (
    <div className='modal-bg bg-gray-300 fixed inset-0 flex justify-center items-center z-50'>
    <div className='modal flex flex-col justify-center items-center p-[30px] w-[480px] h-[380px] bg-white rounded-lg'>
      <img className='w-20 mb-5' src={rightIcon} alt="right icon" />
      <h1 className='text-2xl md:text-3xl'>Account created </h1>
      <h1 className='text-2xl md:text-3xl'>successfully!</h1>
      <p className='m-2 md:text-lg'>You can now access the Kodecamp LMS</p>
      <Link to={'/student/dashboard'}>
        <div className='modal-button cursor-pointer bg-blue-ribbon-500 text-white px-12 py-2 rounded-md'>Proceed to Dashboard</div>
      </Link>
    </div>
  </div>
  )
}

export default SignUp2Modal