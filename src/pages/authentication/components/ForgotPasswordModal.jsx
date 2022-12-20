import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPasswordModal({showModal, emails, setShowModal, font, title, body, button}) {
        
        return (
          <>
            {showModal ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg px-7 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="img flex justify-center items-center text-6xl mt-5">
                        {font}
                      </div>
                      <div className="flex items-start justify-center p-5">
                        <h3 className="text-2xl">
                          {title}
                        </h3>
                      </div>
                      {/*body*/}
                        <div className="body text-center text-sm">
                            <p className='w-64 mx-auto'>{body}</p>
                            <p>{emails}</p>
                        </div>
                      {/*footer*/}
                      <div className="flex items-center justify-center p-6">
                        <Link to={button==='Login'?'/':'/verify-email'}><button
                          className="bg-blue-ribbon-500 text-white text-sm px-28 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          {button}
                        </button>
                        </Link>
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


