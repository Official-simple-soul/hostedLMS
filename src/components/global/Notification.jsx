import React, { useState } from 'react';
import data from '../../data/data';
import Boma from '../../../src/assets/images/Boma.png';

export default function Notification({ notification }) {
  const [allArchive, setAllArchive] = useState('All');

  return (
    <div
      className={`${
        notification ? 'block' : 'hidden'
      } bg-white shadow-lg absolute top-24 md:right-[7%] rounded-lg`}
    >
      <div className="content">
        <div className="absolute bg-white h-8 w-8 rotate-45 right-32 md:right-10 -top-4"></div>
        <h1 className="px-5 mt-2">Notifications</h1>
        <div className="pb-2 shadow flex justify-start items-center px-5  mt-4 space-x-8">
          <h2
            className={`${
              allArchive.includes('All')
                ? 'border-b-2 border-black'
                : 'border-none text-blue-ribbon-400'
            } cursor-pointer`}
            onClick={(e) => setAllArchive(e.currentTarget.innerHTML)}
          >
            All{' '}
            <span
              className={`${
                allArchive === 'Archive'
                  ? 'rounded-full bg-blue-ribbon-500 px-2 py-1 text-white text-sm'
                  : 'rounded-full bg-black px-2 py-1 text-white text-sm'
              }`}
            >
              {allArchive === 'Archive' ? '3' : '3 new'}
            </span>
          </h2>
          <h2
            className={`${
              allArchive === 'Archive'
                ? 'border-b-2 border-black'
                : 'border-none text-blue-ribbon-400'
            } cursor-pointer`}
            onClick={(e) => setAllArchive(e.currentTarget.innerHTML)}
          >
            Archive
          </h2>
        </div>
        <div className="">
          <ul className="h-80 overflow-auto">
            {allArchive === 'Archive'
              ? data.map((item) => {
                  return (
                    <li>
                      <div
                        className="flex justify-between items-center space-x-4 px-5 border-b py-3 bg-[#F5F5F5] cursor-pointer"
                        key={item.id}
                      >
                        <img src={Boma} alt="" />
                        <div className="text">
                          <p className="text-sm font-light">
                            <span className="font-bold">Boma</span> posted a new{' '}
                            <span className="font-bold">Lesson;</span> Redesign
                            kodecamp website
                          </p>
                          <small className="text-sm text-[grey]">
                            25 min ago
                          </small>
                          <span className="mx-4">.</span>
                          <span className="text-[grey] text-sm">Lesson</span>
                        </div>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </li>
                  );
                })
              : data.map((item) => {
                  return (
                    <li>
                      <div
                        className="flex justify-between items-center space-x-4 px-5 border-b py-3 hover:bg-blue-ribbon-100 cursor-pointer"
                        key={item.id}
                      >
                        <img src={Boma} alt="" />
                        <div className="text">
                          <p className="text-sm font-light">
                            <span className="font-bold">Boma</span> posted a new{' '}
                            <span className="font-bold">Lesson;</span> Redesign
                            kodecamp website
                          </p>
                          <small className="text-sm text-[grey]">
                            25 min ago
                          </small>
                          <span className="mx-4">.</span>
                          <span className="text-[grey] text-sm">Lesson</span>
                        </div>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>
    </div>
  );
}
