import React, { useState } from 'react';
import { useEffect } from 'react';
import ProfilePic from '../../../../assets/images/Male 01.png';
import { ProfileEdit } from './ProfileEdit';

const AdminProfile = () => {
  const [uploadOption, setUploadOption] = useState(false);
  const [profilePic, setProfilePic] = useState(ProfilePic);
  const [editOption, setEditOption] = useState(false);
  const newD = JSON.parse(localStorage.getItem('userinfo'));

  const [value, setValue] = useState({
    fullname: '',
    email: '',
    username: ''
  });



 useEffect(()=> {
  setValue({
    fullname: newD?.map(e=>e.lastname + ' ' + e.firstname).toString() !== ' '? newD.map(e=>e.lastname + ' ' + e.firstname) : 'Default Name',
    email: newD?.map(e=>e.email).toString() ? newD.map(e=>e.email) : 'defaultmail@gmail.com',
    username: newD?.map(e=>e.username).toString() !=='' ? newD.map(e=>e.username) : 'DefaultUsername',
  })
 }, [])

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
      <div className="mb-6">
              <h1 className="">Personal Details</h1>
            </div>

        {!editOption?
          <>
            <div className="flex items-center justify-between md:justify-start md:space-x-12">
              <div
                className="img relative cursor-pointer"
                onClick={() => setUploadOption(!uploadOption)}
              >
                <div className="border w-[100px] h-[100px] md:w-48 md:h-48 rounded-full bg-white">
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
                  <span>All Tracks</span>
                </p>
                <p>
                  <span className="text-sm text-white px-6 py-1 rounded-full bg-[#303030]">Admin</span>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-8 overflow-auto">
              <div className="left">
                <ul className="space-y-4">
                  <li className="border-b pb-1">Username</li>
                  <li className="border-b pb-1">Email Address</li>
                  <li className="border-b pb-1">Phone Number</li>
                </ul>
              </div>
              <div className="right md:col-span-3">
                <ul className="space-y-4">
                  <li className="border-b pb-1 pl-5">{username}</li>
                  <li className="border-b pb-1 pl-5">
                    {email}
                  </li>
                  <li className="border-b pb-1 pl-5">08057483726</li>
                </ul>
              </div>
            </div>
          </>
          :
          <ProfileEdit setEditOption={setEditOption}/>
        }
      </div>
    </>
  );
};

export default AdminProfile;
