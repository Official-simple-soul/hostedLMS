import React from "react";
import {AiFillCheckCircle} from 'react-icons/ai'
import { FaTimes } from "react-icons/fa";



export default function Modal({showModal, setShowModal, item}) {

  const handleResolve = () => {
    setShowModal(false)
  item.status === 'unresolved'?item.status = 'resolved':item.status='unresolved'
  
}


  return (
    <>
      
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between">
                <div className="flex items-start space-x-3 p-5 border-b border-solid border-slate-200 rounded-t">
                  <img src={item.img} alt={item.name} />
                  <div className="div">
                  <h3 className="text-2xl font-semibold">
                    {item.name}
                  </h3>
                    <span className="text-sm">{item.track} . {item.level} . Stage {item.stage}</span>
                  </div>
                </div>
                <h1 className={`${item.status==='resolved'?'text-green-500':'text-red-500'} mt-3 mr-3`}>{item.status}</h1>
                </div>
                
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <h1 className="text-[#808080]"><span className="mr-2">Title:</span>{item.title}</h1>
                  <h1 className="my-5 text-[#808080]"><span className="mr-2">Subject:</span>{item.subject}</h1>
                  <p className="mb-2 text-[#808080]">Message</p>
                  <h1>{item.message}</h1>
                </div>
                {/*footer*/}
                <div className="flex items-center space-x-4 p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className={`${item.status==='resolved'?'opacity-20':'opacity-100'} bg-blue-ribbon-500 px-4 py-1 text-white rounded-lg`}
                    type="button"
                    disabled={item.status==='resolved'}
                    onClick={handleResolve}
                  >
                    <AiFillCheckCircle className="inline mr-2"/>{item.status==='unresolved'?'Resolved':'Unresolved'}
                  </button>
                  <button
                    className="border border-blue-ribbon-500 px-4 py-1 rounded-lg"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <FaTimes className="inline mr-2"/>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}