import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Notifications from '../../components/global/Notification';
import InstructorProfileDropDown from '../../pages/instructor/components/InstructorProfileDropDown';
import { Notification, Avatar, ArrowDown, Logo } from '../../assets';
import data from '../../data/data';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';


const InstructorPageWrapper = ({ children }) => {
  const [showSide, setShowSide] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profileDropDown, setProfileDropDown] = useState(false);

  const handleNotification = () => {
    setNotification(!notification);
  };

  return (
    <>
      <div className="flex items-stretch mt-0">
        <div
          className={`${
            !showSide ? 'hidden' : 'block'
          } opacity-50 fixed top-0 bottom-0 left-0 right-0 bg-black z-20`}
        ></div>
        <div>
          <div id="sidebar">
            <Sidebar showSide={showSide} setShowMenu={setShowSide} />
          </div>
        </div>
        <div className="main-content bg-[#F5F5F5] w-full h-full">
          <nav className="shadow-md md:shadow-none h-[72px] bg-white md:bg-[#F5F5F5] flex items-center justify-between px-5 md:pl-60 z-50 md:z-30 fixed w-full">
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
                className="cursor-pointer relative bg-white h-[48px] w-[88px] rounded-[24px] flex gap-2 px-3"
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

          <div className="m-6 pt-20 md:pl-60">{children}</div>
        </div>
        <Notifications notification={notification} />
        <InstructorProfileDropDown profileDropDown={profileDropDown} />
      </div>
    </>
  );
};

export default InstructorPageWrapper;
