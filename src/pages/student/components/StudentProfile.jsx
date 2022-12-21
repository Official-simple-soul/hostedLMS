import React, {useState} from 'react'
import ProfilePic from '../../../assets/images/Male 01.png'


const StudentProfile = () => {
  const [uploadOption, setUploadOption] = useState(false)
  const newD = JSON.parse(localStorage.getItem('userinfo'))
 
  const [value, setValue] = useState({
    fullname: newD.fullname,
    email: newD.email,
    username: newD.username,

  })
  const {fullname, email, username} = value
  return (
    <>
    <div className="flex justify-between items-center">
        <h1>Profile</h1>
        <button className='px-4 py-2 bg-blue-ribbon-500 text-white rounded-lg'><i class="fa-solid fa-pen mr-1"></i> Edit Profile</button>
    </div>
    <div className="bg-white rounded-lg px-8 py-4 mt-6">
      <div className="flex space-x-12">
        <h1>Personal details</h1>
        <h1>Professional details</h1>
      </div>
      <div className="md:flex items-center md:space-x-12 mt-8">
        <div className="img relative" onClick={()=>setUploadOption(!uploadOption)}>
          <img src={ProfilePic} alt="" />
          <i class="fa-solid fa-camera absolute right-16 bottom-6 md:right-4 text-blue-ribbon-500 md:bottom-4 bg-white p-3 rounded-full"></i>
        </div>
        <div className="right space-y-4">
          <h1 className='text-lg md:text-2xl'>{fullname}</h1>
          <p><span className='text-sm mr-3 text-[grey]'>Track:</span><span>UI/UX Design</span></p>
          <p><span className='text-sm mr-3 text-[grey]'>Level:</span><span className='text-[#D4AF37]'>Intermediate</span></p>
          <p><span className='text-sm mr-3 text-[grey]'>Stage:</span><span>8</span></p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-8">
          <div className="left">
            <ul className='space-y-4'>
              <li className='border-b pb-1'>Username</li>
              <li className='border-b pb-1'>Email Address</li>
              <li className='border-b pb-1'>Date of Birth</li>
              <li className='border-b pb-1'>Gender</li>
              <li className='border-b pb-1'>Phone Number</li>
            </ul>
          </div>
          <div className="right md:col-span-3">
            <ul className='space-y-4'>
              <li className='border-b pb-1 pl-5'>{username}</li>
              <li className='border-b pb-1 pl-5 overflow-scroll md:overflow-hidden'>{email}</li>
              <li className='border-b pb-1 pl-5'>01/01/2001</li>
              <li className='border-b pb-1 pl-5'>Male</li>
              <li className='border-b pb-1 pl-5'>08057483726</li>
            </ul>
          </div>
      </div>
      <button className='text-sm text-white bg-blue-ribbon-100 px-4 py-2 rounded-lg mt-4' type='button' disabled><i class="fa-solid fa-certificate mr-2"></i>View Certificate</button>
    </div>
    </>
  )
}

export default StudentProfile