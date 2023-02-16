import React, { useEffect, useState } from 'react';
import Style from '../components/ClassroomTrainer.module.css';
import Stages from './Stages';
import { lessonData } from '../../../data/lessonData';
import { Link } from 'react-router-dom';
import ClassroomDataRow from './ClassroomDataRow';
import { useGlobalContext } from '../../../context/context';


const groupBy = (arr, key) => arr.reduce((acc, curr) => {
    (acc[curr[key]] = acc[curr[key]] || []).push(curr);
    return acc;
  }, {}); 


const StudentClassroom = () => {
  const { bookmarked, setBookmarked } = useGlobalContext();
  const [stageView, setStageView] = useState([])
  
  useEffect(()=> {
    setStageView(groupBy(lessonData, 'stage'))
  }, [])
 
  return (
    <div className="pt-3">
      <div className="flex flex-row justify-between">
        <div className={`${Style.classroom}`}>
          <h5>My Classroom</h5>
        </div>
        <Link to={'/student/studentclassroom/savedbookmarks'}>
          <div className="border px-4 py-1 border-[grey] rounded-md">
            <i class="fa-solid fa-bookmark text-[#00BD56] mr-3"></i>
            <span>{bookmarked?.length}</span> Saved
          </div>
        </Link>
      </div>
      {Object.keys(stageView).map((e, idx) => {
        return (
          <ClassroomDataRow
            e={e}
            idx={idx}
            setBookmarked={setBookmarked}
            bookmarked={bookmarked}
            Style={Style}
            Stages={Stages}
            stageView={stageView}
          />
        );
      })}
    </div>
  );
};

export default StudentClassroom;





