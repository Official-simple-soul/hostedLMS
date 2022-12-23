import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentProfileDropDown({ profileDropDown }) {
  return (
    <div className={`${profileDropDown?'block': 'hidden'}`}>
      <div className="bg-white absolute top-24 right-8 rounded shadow">
      <div className="absolute bg-white h-6 w-6 rotate-45 right-6 -top-3"></div>
        <div className="head p-3 border-b">
          <h1 className='text-blue-ribbon-500'>SAMMY SMITH</h1>
          <p className='my-4'>
            Ui/UX Design Student <span className="mx-4">.</span>Beginner
          </p>
          <small>Stage 4</small>
          <small>ID: KC-ST-0001</small>
        </div>
        <div className="border-b body p-3 text-[grey]">
            <Link to={'/student/profile'}><h1 className='mb-4 hover:text-blue-ribbon-500 cursor-pointer'><i class="fa-solid fa-user mr-4"></i>View Profile</h1></Link>
            <Link to={'/student/settings'}><h1 className='hover:text-blue-ribbon-500 cursor-pointer'><i class="fa-solid fa-lock mr-4"></i>Change Password</h1></Link>
        </div>
        <div className="footer p-3">
        <Link to={'/'}><h1 className='text-[red]'><i class="fa-solid fa-right-from-bracket mr-4"></i>Logout</h1></Link>
        </div>
      </div>
    </div>
  );
}
