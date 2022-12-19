import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom';


const ClassroomTrainerHeader = ({showModal, saveModal, setSaveModal, setShowModal, lessonTitle, clearInputs}) => {


    const [saveInput, setSaveInput] = useState('Save Lesson')

    const colors = {
        red: '#FF3F3F',
        ash: '#808080',
        but: '#CEDEF6',
        grin: '#00BD56'
    }
    const {id} = useParams()

  return (
    <>
    
    {
        id>0?
        <div className="top-row px-6 mt-4 md:flex justify-between items-center">
            <div className="lesson-top">
                <p className='text-blue-ribbon-500 mb-2 text-sm'>Classroom / Design Principles <span style={{color:colors.ash}}>/ New Lesson</span></p>
                <h1>Edit Lesson</h1>
            </div>
            <div className="right">
                <input type="text" value={saveInput} onClick={()=>saveInput==='Save Lesson'?setSaveModal(true):setSaveModal(false)} className='bg-blue-ribbon-500 text-white px-3 py-2 rounded-tl-md rounded-bl-md focus:outline-none'/>
                <select name="Save Lesson" className='arr bg-blue-ribbon-500 text-white px-3 py-2 rounded-tr-md rounded-br-md focus:outline-none w-0' onChange={(e)=> {
                    setSaveInput(e.target.value)
                    window.location.href = '/admin/adminclassroom'

                    }}>
                    <option value="Save Lesson" selected>Save Lesson</option>
                    <option value="Discard Changes">Discard Changes</option>
                </select>
            </div>
        </div>
        :
        <div className="top-row px-6 mt-4 md:flex justify-between items-center">
            <div className="lesson-top">
                <p className='text-blue-ribbon-500 mb-2 text-sm'>Classroom <span style={{color:colors.ash}}>/ New Lesson</span></p>
                <h1>New Lesson</h1>
            </div>
            <div className="right">
                <Link to={'/admin/adminclassroom'}><input type="submit" value='Cancel' className='bg-white border px-3 py-2 rounded-md' style={{borderColor:colors.ash}}/></Link>
                <input type="submit" value='Create Lesson' onClick={()=>setShowModal(true)} className={`ml-3 bg-blue-ribbon-500 text-white px-3 py-2 rounded-md ${lessonTitle?'bg-blue-ribbon-500':'bg-[#CEDEF6]'}`} disabled={!lessonTitle}/>
            </div>
        </div>
    }
    </>
        
  )
}

export default ClassroomTrainerHeader