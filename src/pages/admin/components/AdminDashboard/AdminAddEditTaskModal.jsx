import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import { FcDocument } from 'react-icons/fc';
import { MdArtTrack } from 'react-icons/md';
import { AiFillCalendar, AiOutlineLink } from 'react-icons/ai';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Modal({ modalObj, showModal, setShowModal }) {
  const [track, setTrack] = useState('')
  
  useEffect(()=> {
    modalObj?setTrack(modalObj.track):setTrack('')
  }, [])


  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[430px] my-6 mx-auto">
              {/*content*/}
              {modalObj ? (
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 rounded-t">
                    <h3 className="font-semibold">{modalObj.task}</h3>
                    <FaTimes
                      onClick={() => setShowModal(false)}
                      className="cursor-pointer"
                    />
                  </div>
                  {/*body*/}
                  <div className="relative p-6 space-y-2 text-[#303030]">
                    <div className="text-sm text-black-200 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <BiTime />
                        <p className="">Type of event</p>
                      </div>
                      <div className="right">
                        <input
                          type="text"
                          value={modalObj.type}
                          className="px-2 w-48 border border-gray-400 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="text-sm text-black-200 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <BiTime />
                        <p className="">{modalObj.time}</p>
                      </div>

                      <div className="right">
                        <input
                          type="text"
                          value={modalObj.time}
                          className="px-2 w-48 border border-gray-400 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="text-sm text-black-200 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <AiFillCalendar />
                        <p className="">Date</p>
                      </div>

                      <div className="right">
                        <input
                          type="text"
                          value={modalObj.num}
                          className="px-2 w-48 border border-gray-400 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="grid justify-items-stretch">
                      <div className="flex justify-self-end space-x-2">
                        <p>Repeat:</p>
                        <div className="right">
                          <select
                            name=""
                            value={modalObj.repeat}
                            id=""
                            className="px-2 w-36 border border-gray-400 rounded-md"
                          >
                            <option value="never">Never</option>
                            <option value="repeat">Repeat</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-black-200 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <MdArtTrack />
                        <p className="">Choose Track</p>
                      </div>

                      <div className="right">
                        <select
                          name=""
                          value={track}
                          onChange={(e)=>setTrack(e.target.value)}
                          id=""
                          className="px-2 w-48 border border-gray-400 rounded-md"
                        >
                          <option value="uiux">UI/UX</option>
                          <option value="c">C</option>
                          <option value="frontend">Front-End</option>
                          <option value="backend">Back-End</option>
                          <option value="pmt">Project Mgt</option>
                          <option value="autocad">AutoCad</option>
                        </select>
                      </div>
                    </div>
                    <div className="text-sm text-black-200 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <AiOutlineLink />
                        <p className="">Live class link</p>
                      </div>

                      <div className="right">
                        <input
                          type="text"
                          value={modalObj.task}
                          className="px-2 w-48 border border-gray-400 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="text-sm text-black-200 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FcDocument />
                        <p className="">Description</p>
                      </div>

                      <div className="right">
                        <input
                          type="text"
                          value={modalObj.task}
                          className="px-2 w-48 border border-gray-400 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center space-x-2 justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="border border-blue-ribbon-500 text-blue-ribbon-500 text-sm px-4 h-7 rounded-md"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-blue-ribbon-500 text-white text-sm px-4 h-7 rounded-md"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 rounded-t">
                    <input
                      type="text"
                      placeholder="Add title"
                      className="px-1 focus:outline-0 w-48 border-l border-gray-400"
                    />
                    <FaTimes
                      onClick={() => setShowModal(false)}
                      className="cursor-pointer"
                    />
                  </div>
                  {/*body*/}
                  <div className="relative p-6 space-y-2 text-[#303030]">
                    <div className="mb-4 text-sm text-black-200 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <BiTime />
                        <p className="">Type of event</p>
                      </div>
                      <div className="right">
                        <input
                          type="text"
                          value=""
                          className="px-2 w-48 border border-gray-400 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="mb-4 text-sm text-black-200 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <BiTime />
                        <p className="">Time</p>
                      </div>

                      <div className="right">
                        <input
                          type="text"
                          value=""
                          className="px-2 w-48 border border-gray-400 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-black-200 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <AiFillCalendar />
                        <p className="">Date</p>
                      </div>
                      <div className="right">
                        <input
                          type="text"
                          valu=""
                          className="px-2 w-48 border border-gray-400 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="grid justify-items-stretch">
                      <div className="flex justify-end justify-self-end space-x-4">
                        <p>Repeat:</p>
                        <div className="right">
                          <select
                            name=""
                            value=""
                            id=""
                            className="px-2 w-36 border border-gray-400 rounded-md"
                          >
                            <option value="never">Never</option>
                            <option value="repeat">Repeat</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-black-200 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <MdArtTrack />
                        <p className="">Choose Track</p>
                      </div>

                      <div className="right">
                        <select
                          name=""
                          value=""
                          id=""
                          className="px-2 w-48 border border-gray-400 rounded-md"
                        >
                          <option value="uiux">UI/UX</option>
                          <option value="frontend">Front-End</option>
                          <option value="backend">Back-End</option>
                          <option value="pmt">Project Mgt</option>
                          <option value="autocad">AutoCad</option>
                        </select>
                      </div>
                    </div>
                    <div className="text-sm text-black-200 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <AiOutlineLink />
                        <p className="">Live class link</p>
                      </div>

                      <div className="right">
                        <input
                          type="text"
                          value=""
                          className="px-2 w-48 border border-gray-400 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="text-sm text-black-200 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FcDocument />
                        <p className="">Description</p>
                      </div>

                      <div className="right">
                        <input
                          type="text"
                          value=""
                          className="px-2 w-48 border border-gray-400 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center space-x-2 justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="border border-blue-ribbon-500 text-blue-ribbon-500 text-sm px-4 h-7 rounded-md"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-blue-ribbon-500 text-white text-sm px-4 h-7 rounded-md"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
