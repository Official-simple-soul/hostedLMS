import React from 'react'
import Logo from '../../../assets/icons/logo.svg'
import Dashboard from '../../../assets/icons/dashboard.svg'
import Person from '../../../assets/icons/person.svg'
import ClassRoom from '../../../assets/icons/play_circle_filled.svg'
import Assignment from '../../../assets/icons/assignment.svg'
import Topic from '../../../assets/icons/topic.svg'
import Support from '../../../assets/icons/contact_support.svg'
// import Dashboard from '../../../assets/icons/dashboard.svg'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[236px] bg-[#FFFFFF] pt-[20px] '>
        <div className="h-[70px] flex mb-[117px] items-center pl-[23.5px]">
            <img className='w-[36.71px h-[36px]  mr-[12px]' src={Logo} alt="kodecamp" />
            <h1 className='text-[#0D6EFD] text-[18px]'>Kodecamp LMS</h1>
        </div>
        <ul className='pl-[23.5px] '>
            <li className='text-[18px] text-[#808080] mb-[34px]'><Link to={'/admin/dashboard'} className='flex'><img className='w-[24px] h-[24px] mr-[12px]' src={Dashboard} alt="dashboard" /><p>Dashboard</p></Link></li>
            <li className='text-[18px] text-[#808080] mb-[34px]'><Link to={'/admin/dashboard'} className='flex'><img className='w-[24px] h-[24px] mr-[12px]' src={Person} alt="dashboard" /><p>Dashboard</p></Link></li>
            <li className='text-[18px] text-[#808080] mb-[34px]'><Link to={'/admin/dashboard'} className='flex'><img className='w-[24px] h-[24px] mr-[12px]' src={ClassRoom } alt="dashboard" /><p>Dashboard</p></Link></li>
            <li className='text-[18px] text-[#808080] mb-[34px]'><Link to={'/admin/dashboard'} className='flex'><img className='w-[24px] h-[24px] mr-[12px]' src={Assignment} alt="dashboard" /><p>Dashboard</p></Link></li>
            <li className='text-[18px] text-[#808080] mb-[34px]'><Link to={'/admin/dashboard'} className='flex'><img className='w-[24px] h-[24px] mr-[12px]' src={Topic} alt="dashboard" /><p>Dashboard</p></Link></li>
            <li className='text-[18px] text-[#808080] mb-[34px]'><Link to={'/admin/dashboard'} className='flex'><img className='w-[24px] h-[24px] mr-[12px]' src={Support} alt="dashboard" /><p>Dashboard</p></Link></li>
            <li className='text-[18px] text-[#808080] mb-[165px]'><Link to={'/admin/dashboard'} className='flex'><img className='w-[24px] h-[24px] mr-[12px]' src={Dashboard} alt="dashboard" /><p>Dashboard</p></Link></li>
        </ul>
        <div className='text-center'>
            <p className='text-[#585858] text-[16px]'>Admin ID</p>
            <p className='text-[#3586FD] text-[16px] mb-[8px]'>KC0001</p>
        </div>
    </div>
  )
}

export default Sidebar