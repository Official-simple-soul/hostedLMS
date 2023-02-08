import React, { useState } from 'react';
import ProfilePic from '../../../../assets/images/Male 01.png';
import { ProfileEdit } from './ProfileEdit';

const StudentProfile = () => {
  const [uploadOption, setUploadOption] = useState(false);
  const [profilePic, setProfilePic] = useState(ProfilePic);
  const [editOption, setEditOption] = useState(false);
  const newD = JSON.parse(localStorage.getItem('userinfo'));

  const [value, setValue] = useState({
    fullname: newD ? newD.fullname : 'Default Name',
    email: newD ? newD.email : 'defaultemail@gmail.com',
    username: newD ? newD.username : 'DefaultUsername',
  });

  const { fullname, email, username } = value;
  const handleProfileEdit = () => {
    setEditOption(true)
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <h1>{editOption?'Edit Profile': 'Profile'}</h1>
        <button
          className="px-4 py-2 bg-blue-ribbon-500 text-white rounded-lg"
          onClick={handleProfileEdit}
        >
          <i class="fa-solid fa-pen mr-1"></i> Edit Profile
        </button>
      </div>
      <div className="bg-white rounded-lg px-8 py-4 mt-6">
        {!editOption?
          <>
            <div className="md:flex items-center md:space-x-12">
              <div
                className="img relative cursor-pointer"
                onClick={() => setUploadOption(!uploadOption)}
              >
                <div className="border w-48 h-48 rounded-full bg-white">
                  <img src={profilePic} alt="" />
                </div>
                <i class="fa-solid fa-camera absolute right-16 bottom-6 md:right-4 text-blue-ribbon-500 md:bottom-4 bg-white p-3 rounded-full"></i>
                <div
                  className={`${
                    uploadOption ? 'block' : 'hidden'
                  } upload absolute top-0 -right-10 shadow-lg bg-white p-4 rounded-lg`}
                >
                  <div className="file cursor-pointer">
                    <label htmlFor="img">
                      <i class="fa-solid fa-image mr-1"></i>Upload Picture
                    </label>
                    <input type="file" id="img" className="hidden" />
                  </div>
                  <h1
                    className="text-[red] mt-4 cursor-pointer"
                    onClick={() => setProfilePic(null)}
                  >
                    Delete Picture
                  </h1>
                </div>
              </div>
              <div className="right space-y-4">
                <h1 className="text-lg md:text-2xl">{fullname}</h1>
                <p>
                  <span className="text-sm mr-3 text-[grey]">Track:</span>
                  <span>UI/UX Design</span>
                </p>
                <p>
                  <span className="text-sm mr-3 text-[grey]">Level:</span>
                  <span className="text-[#D4AF37]">Intermediate</span>
                </p>
              </div>
            </div>
            <div className="mt-6">
              <h1 className="">Personal Details</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-8">
              <div className="left">
                <ul className="space-y-4">
                  <li className="border-b pb-1">Username</li>
                  <li className="border-b pb-1">Email Address</li>
                  <li className="border-b pb-1">Date of Birth</li>
                  <li className="border-b pb-1">Gender</li>
                  <li className="border-b pb-1">Phone Number</li>
                </ul>
              </div>
              <div className="right md:col-span-3">
                <ul className="space-y-4">
                  <li className="border-b pb-1 pl-5">{username}</li>
                  <li className="border-b pb-1 pl-5 overflow-auto">
                    {email}
                  </li>
                  <li className="border-b pb-1 pl-5">01/01/2001</li>
                  <li className="border-b pb-1 pl-5">Male</li>
                  <li className="border-b pb-1 pl-5">08057483726</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-4">
              <div className="left">
                <ul className="space-y-4">
                  <li className="border-b pb-1">Employement Status</li>
                  <li className="border-b pb-1">Education Qualification</li>
                </ul>
              </div>
              <div className="right md:col-span-3">
                <ul className="space-y-4">
                  <li className="border-b pb-1 pl-5 font-bold">Employed</li>
                  <li className="border-b pb-1 pl-5 font-bold">PhD</li>
                </ul>
              </div>
            </div>
          </>
          :
          <ProfileEdit setEditOption={setEditOption}/>
        }

        <button
          className={`${editOption && 'hidden'} text-sm text-white bg-blue-ribbon-500 px-4 py-2 rounded-lg mt-4`}
          type="button"
        >
          <i class="fa-solid fa-certificate mr-2"></i>My CV
        </button>
      </div>
    </>
  );
};

export default StudentProfile;
