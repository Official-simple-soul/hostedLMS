import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Notification, Avatar, ArrowDown } from '../../assets';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import Notifications from '../../components/global/Notification';
import StudentProfileDropDown from '../../components/global/StudentProfileDropDown';
import data from '../../data/data';

const AdminPageWrapper = ({ children }) => {
  const [showSide, setShowSide] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profileDropDown, setProfileDropDown] = useState(false);

  const handleNotification = ({ target }) => {
    if (target) {
      setNotification(!notification);
    }
  };

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

        <div className="main-content bg-[#F5F5F5] w-full h-full">
          <nav className="shadow-md h-[72px] bg-[#F5F5F5] flex items-center justify-between px-5 fixed w-full z-50 md:z-30 md:pl-60">
            <div className="flex items-center space-x-4">
              {showSide ? (
                <FaTimes
                  className="md:hidden z-40 text-lg cursor-pointer"
                  onClick={() => setShowSide(!showSide)}
                />
              ) : (
                <FaBars
                  className="md:hidden z-40 text-lg cursor-pointer"
                  onClick={() => setShowSide(!showSide)}
                />
              )}
              <div className="flex space-x-1 md:justify-start bg-white px-1 items-center rounded-md">
                <FaSearch className="text-gray-500 text-[12px] md:text-lg" />
                <input
                  type="text"
                  className={`p-1 w-20 focus:outline-none p-1 text-[12px] md:text-md md:w-36 md:h-8`}
                />
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div
                className="cursor-pointer relative bg-white h-[48px] w-[48px] rounded-lg flex justify-center"
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
      </div>
      <StudentProfileDropDown profileDropDown={profileDropDown} />
      <Notifications notification={notification} />
    </>
  );
};

export default AdminPageWrapper;
