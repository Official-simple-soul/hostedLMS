import React from 'react';
import Style from '../components/AboutTrainer.module.css';
import edit_icon from '../../../assets/icons/edit-icon.svg';
import play_icon from '../../../assets/icons/play-icon.svg';
import { Link } from 'react-router-dom';
import InstructorPageWrapper from '../../../layouts/instructor/InstructorPageWrapper';

const AboutTrainer = () => {


  return (
    <InstructorPageWrapper>
        <div className=''>
            <div className='pb-4'>
                <h6 className={`${Style.classroom}`}> Classroom <span className={`${Style.classroomspan}`}>/ Design Principles</span></h6>
            </div>

            <div className='flex flex-row justify-between'>
                <div className={`${Style.desinprinciples}`}>
                    <h5>Design Principles</h5>
                </div>
                <div className=''>
                    <div className={`${Style.editlessoncontainer} ml-7 flex flex-row relative items-center`}>
                        <img src={edit_icon} alt="Edit" className={`${Style.editimg} absolute mx-5`}/>
                    <p className={`${Style.editlesson} py-2 pr-4 pl-12`}> Edit Lesson</p> 
                    </div>
                </div>
            </div>

            <div className='pt-4'>
                <div className={`${Style.about_bg} overflow-hidden`}>
                    <img src={play_icon} alt="Play_image" className='mx-auto my-40 ' />
                </div>
            </div>

            <div className={`${Style.aboutcontainer} mt-5 p-6`}>
                <div className='flex flex-row '>
                    <div className='pr-8'>
                        <Link to='/AboutTrainer'>
                            <h5 className={`${Style.aboutheading}`}>About</h5>
                        </Link>
                        <div className={`${Style.aboutheadingline}`}></div>
                    </div>

                    <div>
                        <Link to="/ResourcesTrainer" >
                            <h5 className={`${Style.aboutresourceheading}`}>Resources</h5>
                        </Link>
                    </div>
                </div>

                <div className='pt-5'>
                    <p className={`${Style.abouttext}`}>
                        Design Principles are a set of considerations that form the basis of any good product.
                        Design Principles help teams with decision making. 
                        A few simple principles or constructive questions will guide your team towards making appropriate decisions.
                    </p>
                </div>
            </div>
        </div>
    </InstructorPageWrapper>
  )
}

export default AboutTrainer;