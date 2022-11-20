import React, { useState } from 'react'
import StudentPageWrapper from '../../../layouts/student/StudentPageWrapper'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import PasswordChecklist from "react-password-checklist"
const Settings = () => {
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [password, setPassword] = useState("")
  const [password1, setPassword1] = useState("")
  const handleSubmit=(e)=>{
      e.preventDefault()
  }
  return (
    <StudentPageWrapper>
      <div className="flex justify-center items-center h-[80vh]">
        <div className="content w-full">
            <h1 className='mb-4'>Settings</h1>
            <form action="" className='bg-white rounded-lg p-8 text-[#585858]' onSubmit={handleSubmit}>
              <div className="flex justify-start items-start">
                <h1 className='mb-4 border-b border-black pb-1 w-fit'>Chnage Password</h1>
                <h1 className='mb-4 ml-8 text-blue-ribbon-500'>Other Settings</h1>
              </div>
                <div className="rows grid grid-cols-3">
                  <div className="col col-span-2">
                      <label htmlFor="" className='text-[#808080]'>Current Password</label>
                      <div className="current relative">
                        <input 
                        type={show?'text':'password'}
                        required
                        placeholder='Type your current password'
                        className='px-3 py-2 border border-[#808080] w-full mt-3 mb-4'/>
                        <div className="eye absolute text-3xl top-6 right-5 cursor-pointer" onClick={()=>setShow(!show)}>
                          {show?<AiFillEyeInvisible />:<AiFillEye />}
                        </div>
                      </div>
                      <label htmlFor="" className='text-[#808080]'>New Password</label>
                        <div className="current relative">
                          <input 
                          type={show1?'text':'password'}
                          required
                          onChange={(e)=>setPassword(e.target.value)}
                          placeholder='Type your current password'
                          className='px-3 py-2 border border-[#808080] w-full mt-3 mb-4'/>
                          <div className="eye absolute text-3xl top-6 right-5 cursor-pointer" onClick={()=>setShow1(!show1)}>
                            {show1?<AiFillEyeInvisible />:<AiFillEye />}
                          </div>
                        </div>
                      <label htmlFor="" className='text-[#808080]'>Confirm Password</label>
                        <div className="current relative">
                          <input 
                          type={show2?'text':'password'}
                          required
                          onChange={(e)=>setPassword1(e.target.value)}
                          placeholder='Type your current password'
                          className='px-3 py-2 border border-[#808080] w-full mt-3 mb-4'/>
                          <div className="eye absolute text-3xl top-6 right-5 cursor-pointer" onClick={()=>setShow2(!show2)}>
                            {show2?<AiFillEyeInvisible />:<AiFillEye />}
                          </div>
                      </div>
                  </div>
                </div>
                <div className="mb-4 flex justify-start items-center">
                  <input 
                  type="button"
                  value='cancel'
                  className='px-8 border border-[#808080] mr-6'/>
                  <input 
                  type="submit" 
                  className='px-8 border border-[#808080] bg-blue-ribbon-500 text-white'/>
                </div>
                <PasswordChecklist
                  rules={["minLength","specialChar","number","capital","match"]}
                  minLength={8}
                  value={password}
                  valueAgain={password1}
                  onChange={(isValid) => {}}
                />
            </form>
        </div>
      </div>
    </StudentPageWrapper>
  )
}

export default Settings