import React, { useState } from 'react';
import Style from '../components/ClassroomTrainer.module.css';
import add from '../../../assets/icons/plus-sign.svg'
// import { Link } from 'react-router-dom';
import Stage1Trainer from './Stage1Trainer';

const ClassroomTrainer = () => {

    const [stage1dropdown,setStage1dropdown ] = useState(false);


  return (
    <div className='pt-3'>
    <div className='flex flex-row justify-between'>
        <div className={`${Style.classroom}`}>
            <h5>Classroom</h5>
        </div>
        <div className='flex flex-row items-center'>
            <div className='flex flex-row items-center'>
                <p className={`${Style.filter} pr-4`}>Filter</p>
                <select name="" id="" className={`${Style.select_btn} outline-none p-2`}>
                    <option value="All" className={`${Style.select_options} ` } selected>All</option>
                    <option value="Created by you">Created by you</option>
                </select>
            </div>
            <div className={`${Style.createnew} ml-7 flex flex-row relative items-center cursor-pointer`}>
                <img src={add} alt="add new" className={`${Style.createnewimg} absolute mx-5`}/>
            <p className={`${Style.createnewtext} py-2 pr-4 pl-12`}> Create New Lesson</p> 
            </div>
        </div>
    </div>

    <div className=' bg-white mt-5 p-5 rounded-xl'>
       <div className='flex flex-row items-center justify-between'>
            <div >
                <p className={`${Style.stage1}`}>Stage 1</p>
            </div>
            <div className='flex flex-row items-center justify-center bg-white cursor-pointer' 
                onClick={() =>{setStage1dropdown(!stage1dropdown)}}>
                <p className={`${Style.lesson1}`}>6 Lessons</p>
                <p className= 'ml-4 bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="#0D6EFD" class="bi bi-chevron-down" viewBox="0 0 16 16" >
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </p>
            </div>
       </div>
       {stage1dropdown && <Stage1Trainer />}
    </div>

    <div className='flex flex-row items-center justify-between bg-white mt-5 p-5 rounded-xl'>
        <div >
            <p className={`${Style.stage1}`}>Stage 2</p>
        </div>
        <div className='flex flex-row items-center justify-center bg-white'>
            <p className={`${Style.lesson1}`}>6 Lessons</p>
            <p className= 'ml-4 bg-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="#0D6EFD" class="bi bi-chevron-down" viewBox="0 0 16 16" >
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </p>
        </div>
    </div>

    <div className={`${Style.stage3bg} flex flex-row items-center justify-between mt-5 p-5 rounded-xl`}>
        <div >
            <p className={`${Style.stage3}`}>Stage 3</p>
        </div>
        <div className='flex flex-row items-center justify-center'>
            <p className={`${Style.nolesson}`}>6 Lessons</p>
            <p className= 'ml-4 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="#FFFFFF" class="bi bi-chevron-down" viewBox="0 0 16 16" >
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </p>
        </div>
    </div>

    <div className={`${Style.stage3bg} flex flex-row items-center justify-between mt-5 p-5 rounded-xl`}>
        <div >
            <p className={`${Style.stage3}`}>Stage 4</p>
        </div>
        <div className='flex flex-row items-center justify-center'>
            <p className={`${Style.nolesson}`}>6 Lessons</p>
            <p className= 'ml-4 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="#FFFFFF" class="bi bi-chevron-down" viewBox="0 0 16 16" >
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </p>
        </div>
    </div>

    <div className={`${Style.stage3bg} flex flex-row items-center justify-between mt-5 p-5 rounded-xl`}>
        <div >
            <p className={`${Style.stage3}`}>Stage 5</p>
        </div>
        <div className='flex flex-row items-center justify-center'>
            <p className={`${Style.nolesson}`}>6 Lessons</p>
            <p className= 'ml-4 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="#FFFFFF" class="bi bi-chevron-down" viewBox="0 0 16 16" >
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </p>
        </div>
    </div>

    <div className={`${Style.stage3bg} flex flex-row items-center justify-between mt-5 p-5 rounded-xl`}>
        <div >
            <p className={`${Style.stage3}`}>Stage 6</p>
        </div>
        <div className='flex flex-row items-center justify-center'>
            <p className={`${Style.nolesson}`}>6 Lessons</p>
            <p className= 'ml-4 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="#FFFFFF" class="bi bi-chevron-down" viewBox="0 0 16 16" >
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </p>
        </div>
    </div>

    <div className={`${Style.stage3bg} flex flex-row items-center justify-between mt-5 p-5 rounded-xl`}>
        <div >
            <p className={`${Style.stage3}`}>Stage 7</p>
        </div>
        <div className='flex flex-row items-center justify-center'>
            <p className={`${Style.nolesson}`}>6 Lessons</p>
            <p className= 'ml-4 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="#FFFFFF" class="bi bi-chevron-down" viewBox="0 0 16 16" >
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </p>
        </div>
    </div>

    <div className={`${Style.stage3bg} flex flex-row items-center justify-between mt-5 p-5 rounded-xl`}>
        <div >
            <p className={`${Style.stage3}`}>Stage 8</p>
        </div>
        <div className='flex flex-row items-center justify-center'>
            <p className={`${Style.nolesson}`}>6 Lessons</p>
            <p className= 'ml-4 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="#FFFFFF" class="bi bi-chevron-down" viewBox="0 0 16 16" >
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </p>
        </div>
    </div>
    
</div>
  )
}

export default ClassroomTrainer;
