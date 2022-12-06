import React, {useState} from 'react';
import LessonCreated from '../../../assets/icons/lessonCreated.png'
import CreateEditSaveLessonDefaultPage from './CreateEditSaveLessonDefaultPage'

const SaveLesson = () => {
    const [showModal, setShowModal] = useState(false)
    const [saveInput, setSaveInput] = useState('Save Lesson')
    const colors = {
        red: '#FF3F3F',
        ash: '#808080',
        but: '#CEDEF6'
    }

  return (
    <div>
        <div className="top-row px-6 mt-4 md:flex justify-between items-center">
            <div className="lesson-top">
                <p className='text-blue-ribbon-500 mb-2 text-sm'>Classroom / Design Principles <span style={{color:colors.ash}}>/ New Lesson</span></p>
                <h1>Edit Lesson</h1>
            </div>
            <div className="right">
                <input type="text" value={saveInput} onClick={()=>saveInput==='Save Lesson'?setShowModal(true):setShowModal(false)} className='bg-blue-ribbon-500 text-white px-3 py-2 rounded-tl-md rounded-bl-md focus:outline-none'/>
                <select name="Save Lesson" className='arr bg-blue-ribbon-500 text-white px-3 py-2 rounded-tr-md rounded-br-md focus:outline-none w-0' onChange={(e)=>setSaveInput(e.target.value)}>
                    <option value="Save Lesson" selected>Save Lesson</option>
                    <option value="Discard Changes">Discard Changes</option>
                </select>
            </div>
        </div>
        <CreateEditSaveLessonDefaultPage />

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
                  <h1 className='text-2xl mb-2'>Lesson Updated!</h1>
                  <p style={{color:colors.ash}}>Changes made to this lesson have been updated</p>
                </div>
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-blue-ribbon-500 text-white font-bold text-sm px-20 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none ml-2 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
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
    </div>
  )
}

export default SaveLesson