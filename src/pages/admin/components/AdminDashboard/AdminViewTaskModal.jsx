import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import { FcDocument } from 'react-icons/fc';
import { MdArtTrack } from 'react-icons/md';
import { AiFillCalendar, AiOutlineLink } from 'react-icons/ai';
import { useState } from 'react';
import EditModal from './AdminAddEditTaskModal'

export default function Modal({ monthVal, week, idx, modalObj, showModal, setShowModal }) {
  const [editEvent, setEditEvent] = useState({})
    const [editShowModal, setEditShowModal] = useState(false)
  const handleEditEvent = (modalObj) => {
    setShowModal(false)
        setEditShowModal(true)
        setEditEvent(modalObj)
    }
  
    return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-80 my-6 mx-auto">
              {/*content*/}
              {
                modalObj?
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="font-semibold">{modalObj.task}</h3>
                  <FaTimes onClick={()=>setShowModal(false)} className='cursor-pointer'/>
                </div>
                {/*body*/}
                <div className="relative p-6 space-y-2 text-[#303030]">
                  <div className="text-sm text-black-200 flex items-center">
                    <BiTime />
                    <p className="">{modalObj.time}</p>
                  </div>
                  <div className="text-sm text-black-200 flex items-center">
                    <AiFillCalendar />
                    <p className="ml-2">{week[idx]} {modalObj.num}, {monthVal} 2023 </p>
                  </div>
                  <div className="grid justify-items-stretch w-[70%]">
                    <p className="justify-self-end">
                      Repeat: {modalObj.repeat}
                    </p>
                  </div>
                  <div className="text-sm text-black-200 flex items-center">
                    <MdArtTrack />
                    <p className="ml-2">{modalObj.track} </p>
                  </div>
                  <div className="text-sm text-black-200 flex items-center">
                    <AiOutlineLink />
                    <p className="ml-2">{modalObj.track} </p>
                  </div>
                  <div className="text-sm text-black-200 flex items-center">
                    <FcDocument />
                    <p className="ml-2">{modalObj.task} </p>
                  </div>
                  <div className="text-sm text-black-200 flex items-center">
                    <AiFillCalendar />
                    <p className="ml-2">{modalObj.tutor} </p>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center space-x-2 justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="border border-blue-ribbon-500 text-blue-ribbon-500 text-sm px-4 h-7 rounded-md"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-blue-ribbon-500 text-white text-sm px-4 h-7 rounded-md"
                    type="button"
                    onClick={() => handleEditEvent(modalObj)}
                  >
                    Edit
                  </button>
                </div>
              </div>
              :
              <div className="h-96 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-center items-center w-full h-[100%]">
                <h1 className='font-bold'>Sorry! No event found for this date</h1>
              </div>
              <button className='bg-red-500 w-36 mx-auto mb-5 py-1 rounded-md text-white' onClick={()=>setShowModal(false)}>close</button>
              </div>
              }
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        <EditModal  modalObj={modalObj}
        showModal={editShowModal}
        setShowModal={setEditShowModal}
        editEvent={editEvent}
        />
    </>
  );
}
