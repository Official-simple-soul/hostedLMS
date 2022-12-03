import React from 'react'
import { Link } from 'react-router-dom'

const ClassroomTrainerHeader = ({showModal, setShowModal, lessonTitle, clearInputs}) => {

    const colors = {
        red: '#FF3F3F',
        ash: '#808080',
        but: '#CEDEF6',
        grin: '#00BD56'
    }


  return (
        <div className="top-row px-6 mt-4 md:flex justify-between items-center">
            <div className="lesson-top">
                <p className='text-blue-ribbon-500 mb-2 text-sm'>Classroom <span style={{color:colors.ash}}>/ New Lesson</span></p>
                <h1>New Lesson</h1>
            </div>
            <div className="right">
                <Link to={'/instructor/classroom'}><input type="submit" value='Cancel' className='bg-white border px-3 py-2 rounded-md' style={{borderColor:colors.ash}}/></Link>
                <input type="submit" value='Create Lesson' onClick={()=>setShowModal(true)} className={`ml-3 bg-blue-ribbon-500 text-white px-3 py-2 rounded-md ${lessonTitle?'bg-blue-ribbon-500':'bg-[#CEDEF6]'}`} disabled={!lessonTitle}/>
            </div>
        </div>
  )
}

export default ClassroomTrainerHeader