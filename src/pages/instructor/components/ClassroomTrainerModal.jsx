import React from 'react';
import Style from '../components/ClassroomTrainerModal.module.css';
import delete_icon from  '../../../assets/icons/modal-delete-icon.svg';
import { useState } from 'react';
import { DeletedConfirmation } from '../components/ClassroomTrainerModal2';
import { CSSTransition } from 'react-transition-group';

export const DeleteLesson = ({isdelete, setIsdelete}) => {

    const [confirmDelete, setConfirmDelete] = useState(false);


  return (
    <CSSTransition in={isdelete} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
        <div className={`${Style.darkBG} `}>
           <div className={`${Style.centered} drop-shadow-xl `}>
                <div>
                    <div className=''>
                        <div className={`${Style.deletelesson_container} border mx-auto px-14 py-10 `}>
                            <div >
                                <img src={delete_icon} alt="Delete Icon" className='mx-auto' />
                            </div>
                            <h5 className={`${Style.modal_heading} text-center pt-6`}>Delete this lesson?</h5>
                            <p className={`${Style.modal_text} pt-4`}>Are you sure you want to delete the lesson <span>“Design Principles”</span>?</p>
                            <div className='flex flex-row justify-between items-center pt-5'>
                                <button className={`${Style.cancel_btn}`} onClick={() => {setIsdelete(!isdelete)}}>Cancel</button>
                                <button className={`${Style.delete_btn}`} onClick={() =>{setConfirmDelete(!confirmDelete)}}>Yes, delete</button>
                            </div>
                        </div>
                        {confirmDelete && <DeletedConfirmation confirmDelete={confirmDelete} setConfirmDelete={setConfirmDelete} />}
                    </div>
                </div>
           </div>
            
        </div>
    </CSSTransition>
  )
}






