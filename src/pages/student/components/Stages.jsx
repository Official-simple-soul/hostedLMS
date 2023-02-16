import React, { useEffect, useState } from 'react';
import Stylest1 from '../components/Stage1Trainer.module.css';
import profile_img from '../../../assets/images/stage1_profile_img.svg';
import { lessonData } from '../../../data/lessonData';
import StagesRow from './StagesRow';

const Stages = ({ setBookmarked, num }) => {
  const [classroomData, setClassroomData] = useState([]);
  const [addNum, setAddNum] = useState([]);
  
  const statusText = [
    'LIVE IN 2 HOURS',
    'RECORDING NOT ADDED',
    'RECORDING ADDED',
  ];

useEffect(()=> {
  setClassroomData(lessonData)
}, [])

  const handleBookmark = (item) => {
  const {id, isBooked} = item

  setAddNum([...addNum, id])
    // if (isBooked) {
    //   const tempUser = classroomData.map((e) =>
    //     e.id === id ? { ...e, isBooked: false } : e
    //   );
    //   setClassroomData(tempUser);
    // } else {
    //   const tempUser = classroomData.map((e) =>
    //     e.id === id ? { ...e, isBooked: 'Booked' } : e
    //   );
    //   setClassroomData(tempUser);
    // }
  };


useEffect(() => {
  // console.log(classroomData)
  // console.log(addNum)
}, [addNum])


  useEffect(() => {
    const bookedArr = classroomData.filter((e) => e.isBooked === 'Booked');
    setBookmarked(bookedArr);
    
  }, [classroomData]);

  


  return (
    <>
      <div className="">
        <div className="bg-white  md:p-5 rounded-xl">
          <div className="w-full border mb-5"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {lessonData.filter(e=>e.stage===num+1).map((item) => {
              return (
                <StagesRow
                  item={item}
                  profile_img={profile_img}
                  Stylest1={Stylest1}
                  handleBookmark={handleBookmark}
                  statusText={statusText}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stages;
