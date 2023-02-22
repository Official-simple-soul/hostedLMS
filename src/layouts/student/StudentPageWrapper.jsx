import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Notification, Avatar, ArrowDown, Logo } from '../../assets';
import Notifications from '../../components/global/Notification';
import StudentProfileDropDown from '../../components/global/StudentProfileDropDown';
import data from '../../data/data';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { useGlobalContext } from '../../context/context';

const StudentPageWrapper = ({ children }) => {
  const [showSide, setShowSide] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profileDropDown, setProfileDropDown] = useState(false);
  const {setStudentSearchInput} = useGlobalContext()

  const handleNotification = () => {
    setNotification(!notification);
  };

  const handleChange = (e) => {
   setStudentSearchInput(e.target.value)
  }

  return (
    <>
      <div className="flex items-stretch mt-0">
        <div>
          <div id="sidebar">
            <div
              className={`${
                showSide ? 'block' : 'hidden'
              } fixed top-0 right-0 left-0 bottom-0 bg-black opacity-80 z-20`}
            ></div>
            <Sidebar showSide={showSide} setShowSide={setShowSide} />
          </div>
        </div>
        <div className="main-content w-full h-full">
          <nav className="h-[72px] shadow-md md:shadow-none bg-white md:bg-[#F5F5F5] flex items-center justify-between px-5 fixed w-full z-50 md:z-30 md:pl-60">
            <div className="flex items-center space-x-4">
              {showSide ? (
                <FaTimes
                  className="md:hidden z-40 text-3xl font-light cursor-pointer"
                  onClick={() => setShowSide(!showSide)}
                />
              ) : (
                <FaBars
                  className="md:hidden z-40 text-3xl font-light cursor-pointer"
                  onClick={() => setShowSide(!showSide)}
                />
              )}

              <img src={Logo} alt="" className='w-[40px] h-[40px] md:hidden' />

              <div className="hidden md:flex w-[400px] h-[48px] rounded-lg space-x-1 md:justify-start bg-white px-3 items-center rounded-md">
                <FaSearch className="text-gray-100 text-[12px] md:text-lg" />
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder='Search'
                  className={`p-1 placeholder-gray-200 w-20 focus:outline-none text-[12px] md:text-md md:w-36 md:h-8`}
                />
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="border border-gray-200 cursor-pointer relative bg-white h-[48px] w-[48px] md:hidden rounded-lg flex items-center justify-center">
                <AiOutlineSearch className='text-3xl font-bold text-[#585858]' />
              </div> 

              <div
                className="border border-gray-200 cursor-pointer relative bg-white h-[48px] w-[48px] rounded-lg flex justify-center"
                onClick={handleNotification}
              >
                <img src={Notification} alt="" className="w-[18px]" />
                <div className="absolute top-[-10px] right-[-10px] w-[24px]">
                  <p className="bg-[#FF3F3F] p-1 text-white rounded-full text-xs font-bold flex justify-center">
                    <span>{data.length}</span>
                  </p>
                </div>
              </div>

              <div
                className="cursor-pointer relative bg-white h-[48px] w-[88px] rounded-[24px] flex gap-2 px-3 cursor-pointer"
                onClick={() => setProfileDropDown(!profileDropDown)}
              >
                <img src={Avatar} alt="" className="absolute top-0 left-0" />
                <img
                  src={ArrowDown}
                  alt=""
                  className="w-[12px] absolute top-[40%] right-3"
                />
              </div>
            </div>
          </nav>

          {/* {profileModal ? <ProfileDropdown /> : null} */}

          <div className="m-6 pt-20 md:pl-60">{children}</div>
        </div>
      </div>
      <Notifications notification={notification} />
      <StudentProfileDropDown profileDropDown={profileDropDown} />
    </>
  );
};

export default StudentPageWrapper;
