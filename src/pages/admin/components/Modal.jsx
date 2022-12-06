import React from 'react'
import LessonCreated from '../../../assets/icons/lessonCreated.png'
import { useParams } from 'react-router-dom'
const ModalTrainer = ({showModal, setShowModal, lessonTitle, saveModal, setSaveModal}) => {

  const {id} = useParams()
console.log(id)
    const colors = {
        red: '#FF3F3F',
        ash: '#808080'
    }
  return (
    <>
    {
      id>0?
      <div className="modal">
        {saveModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-4">
                <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                    <img src={LessonCreated} alt="" />
                </div>
                <div className="text-center">
                  <h1 className='text-2xl mb-2'>Lesson Updated!</h1>
                  <p style={{color:colors.ash}}>Changes made to this lesson have been updated</p>
                </div>
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-blue-ribbon-500 text-white font-bold text-sm px-20 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none ml-2 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setSaveModal(false)
                      window.location.href = '/admin/adminclassroom'
                    }}
                  >
                    Back to Lesson
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </div>
      :
      <div className="modal">
        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-4">
                <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                    <img src={LessonCreated} alt="" />
                </div>
                <div className="text-center">
                  <h1 className='text-2xl mb-2'>Lesson created successfully!</h1>
                  <p style={{color:colors.ash}}>The lesson {lessonTitle} has been created</p>
                </div>
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-blue-ribbon-500 border border-blue-ribbon-500 rounded-lg background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Back
                  </button>
                  <button
                    className="bg-blue-ribbon-500 text-white active:bg-emerald-600 font-bold text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none ml-2 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    View Lesson
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </div>
    }
    
    </>
  )
}

export default ModalTrainer