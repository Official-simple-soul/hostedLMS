import React from 'react';
import Style from '../components/ClassroomTrainer.module.css';
import add from '../../../assets/icons/plus-sign.svg';
import Stylest1 from '../components/Stage1Trainer.module.css';
import more from '../../../assets//icons/3dots.svg';
import profile_img from '../../../assets/images/stage1_profile_img.svg';
import { useState } from 'react';
import { DeleteLesson } from '../components/ClassroomTrainerModal';


const Stage1Trainer = () => {

    const [moredropdown, setMoredropdown] = useState(false);
    const [isdelete, setIsdelete] = useState(false);

    
  return (
    <>
    <div className=''>
            {/* <div className='flex flex-row justify-between'>
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
                    <div className={`${Style.createnew} ml-7 flex flex-row relative items-center`}>
                        <img src={add} alt="add new" className={`${Style.createnewimg} absolute mx-5`}/>
                    <p className={`${Style.createnewtext} py-2 pr-4 pl-12`}> Create New Lesson</p> 
                    </div>
                </div>
            </div> */}

            <div className='bg-white  p-5 rounded-xl'>
                {/* <div className='flex flex-row items-center justify-between '>
                    <div >
                        <p className={`${Style.stage1}`}>Stage 1</p>
                    </div>
                    <div className='flex flex-row items-center justify-center bg-white'>
                        <p className={`${Style.lesson1}`}>6 Lessons</p>
                        <p className= 'ml-4 bg-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="#0D6EFD" class="bi bi-chevron-down" viewBox="0 0 16 16" >
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </p>
                    </div>
                </div> */}

                <div className='w-full border mb-5'></div>

                <div className='grid grid-cols-3 gap-5'>
                    <div className='border rounded-xl'>
                        <div className={`${Stylest1.stage1_bg} overflow-hidden`}></div>
                        <div className='px-4 py-6'>
                            <div className='flex flex-row justify-between items-center'>
                                <h4 className={`${Stylest1.stage1_heading}`}>Design Principles</h4>
                                <div className='flex flex-col items-end' >
                                    <img src={more} alt="more-icon" onClick={() =>{setMoredropdown(!moredropdown)}}/>
                                    {/* more dropdown */}

                                    {
                                        moredropdown ? (
                                            <div className={`${Stylest1.more_dropdownContainer} py-4 px-3`}>
                                                <p className={`${Stylest1.dropdown_edit} `}>Edit</p>
                                                <p className={`${Stylest1.dropdown_delete} pt-6`} onClick={() => {setIsdelete(!isdelete)}}>Delete</p>
                                            </div>
                                            

                                        ):null
                                    }
                                    
                                </div>
                            
                            </div>
                            
                

                            <p className={`${Stylest1.stage1_text} py-3`}>COMPLETED</p>

                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row items-center'>
                                    <img src={profile_img} alt=" ProfileImage" />
                                    <p className={`${Stylest1.profile_text} pl-3`}>You</p>
                                </div>
                                <div className={`${Stylest1.profile_text}`}>12/09/2022</div>
                            </div>
                            
                        </div>
                        

                    </div>

                    <div className='border rounded-xl'>
                        <div className={`${Stylest1.stage1_bg} overflow-hidden`}></div>
                        <div className='px-4 py-6'>
                            <div className='flex flex-row justify-between items-center'>
                                <h4 className={`${Stylest1.stage1_heading}`}>Design Principles</h4>
                                <img src={more} alt="more-icon" />
                            </div>

                            <p className={`${Stylest1.stage1_text} py-3`}>COMPLETED</p>

                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row items-center'>
                                    <img src={profile_img} alt=" ProfileImage" />
                                    <p className={`${Stylest1.profile_text} pl-3`}>You</p>
                                </div>
                                <div className={`${Stylest1.profile_text}`}>12/09/2022</div>
                            </div>
                        </div>

                    </div>

                    <div className='border rounded-xl'>
                        <div className={`${Stylest1.stage1_bg} overflow-hidden`}></div>
                        <div className='px-4 py-6'>
                            <div className='flex flex-row justify-between items-center'>
                                <h4 className={`${Stylest1.stage1_heading}`}>Design Principles</h4>
                                <img src={more} alt="more-icon" />
                            </div>

                            <p className={`${Stylest1.stage1_text} py-3`}>COMPLETED</p>

                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row items-center'>
                                    <img src={profile_img} alt=" ProfileImage" />
                                    <p className={`${Stylest1.profile_text} pl-3`}>You</p>
                                </div>
                                <div className={`${Stylest1.profile_text}`}>12/09/2022</div>
                            </div>
                        </div>

                    </div>

                    


                    <div> column 2</div>
                    <div> column 3</div>
                </div>
            </div>
        
            {isdelete && <DeleteLesson isdelete= {isdelete} setIsdelete={setIsdelete} />}
        </div>
    </>
  )
}

export default Stage1Trainer;
