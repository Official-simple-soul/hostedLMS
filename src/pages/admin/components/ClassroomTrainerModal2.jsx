import React from 'react';
import Style from '../components/ClassroomTrainerModal.module.css';
import confirmdelete_icon from '../../../assets/icons/modal-confirmdelete-icon.svg';
import { CSSTransition } from 'react-transition-group';


export const DeletedConfirmation = ({confirmDelete, setConfirmDelete}) => {

    
    return (
      <CSSTransition in={confirmDelete} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
        <div className={`${Style.darkBG} `}>
          <div className={`${Style.centered} drop-shadow-xl `}>
            <div>
                <div className=''>
                  <div className={`${Style.deletelesson_container} border mx-auto px-14 py-10 `}>
                        <div >
                            <img src={confirmdelete_icon} alt="confirmdelete_icon" className='mx-auto' />
                        </div>
                        <h5 className={`${Style.modal_heading} text-center pt-6`}>Lesson deleted!</h5>
                        <p className={`${Style.modal_text} pt-4`}>The lesson <span>“Design Principles”</span> has been deleted</p>
                        <div className='flex flex-row justify-between items-center pt-5'>
                            <button className={`${Style.undo_btn}`} onClick={() =>{setConfirmDelete(!confirmDelete)}}>Undo</button>
                            <button className={`${Style.okay_btn}`} onClick={()=>setConfirmDelete(false)}>Okay</button>
                        </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    )
  }
