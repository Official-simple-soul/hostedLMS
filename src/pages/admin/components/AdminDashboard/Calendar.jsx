import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Modal from './AdminViewTaskModal';
import CalenderRow from './CalenderRow';

const CalendarDates = require('calendar-dates');
const calendarDates = new CalendarDates();

const week = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const act = (n) => {
  const num = [
    {
      num: 3,
      type: 'class',
      task: 'Arrays in C progamming',
      time: '9:35am',
      repeat: 'never',
      track: 'C',
      tutor: 'Mubaraq Abuhassan',
    },
    {
      num: 8,
      type: 'task',
      task: 'Using Mongo DB',
      time: '10:10am',
      repeat: 'never',
      track: 'Back-end',
      tutor: 'Edward Precious',
    },
    {
      num: 10,
      type: 'class',
      task: 'Build kodecamp website',
      time: '10:30am',
      repeat: 'never',
      track: 'UI/UX',
      tutor: 'Ikeys Stephen',
    },
    {
      num: 12,
      type: 'meeting',
      task: 'Meeting with data scinece Trainers',
      time: '11:15am',
      repeat: 'never',
      track: 'Data Science',
      tutor: 'Timeyin Oluwa',
    },
    {
      num: 18,
      type: 'class',
      task: 'Javascript Objects',
      time: '11:30am',
      repeat: 'never',
      track: 'Front-end',
      tutor: 'Ogochukwu Udom',
    },
    {
      num: 22,
      type: 'task',
      task: 'Intro to PM',
      time: '9:45am',
      repeat: 'never',
      track: 'Project Management',
      tutor: 'Emmanuel Jackson',
    },
    {
      num: 27,
      type: 'meeting',
      task: 'Build kodecamp website',
      time: '10:30am',
      repeat: 'never',
      track: 'UI/UX',
      tutor: 'Ikeys Stephen',
    },
  ];
  return num.find((e) => e.num === n);
};

function Calendar() {
  const [arr, setArr] = useState([]);
  const [val, setval] = useState(8);
  const [mv, setMV] = useState(1);
  const [modalObj, setModalObj] = useState({});
  const [showModal, setShowModal] = useState(false);

  
  
  useEffect(() => {
    const may2018 = new Date(2023, mv);
    const mainAsync = async () => {
      const mayDates = await calendarDates.getDates(may2018);
      const mayMatrix = await calendarDates.getMatrix(may2018);

      setArr(mayDates);
    };
    mainAsync();
  }, []);

 

  const handleNext = () => {
    val===36?setval(8):setval(val + 7);
  };
  
  const handlePrev = () => {
    setval(val - 7);
  };

  const handleViewTask = ({ date }) => {
    setModalObj(act(date));
    setShowModal(true);
  };

  return (
    <div>
      <div className="relative grid grid-cols-7 gap-1 mt-10">
        <FaAngleLeft
          className="cursor-pointer absolute text-2xl -left-5 top-5"
          onClick={handlePrev}
        />
        {arr.slice(val, val + 7).map((e, idx) => {
          return (
            <>
              <div key={idx}>
            <CalenderRow handleViewTask={handleViewTask} e={e} week={week} idx={idx} act={act}/>
              </div>
            </>
          );
        })}
        <FaAngleRight
          className="cursor-pointer absolute text-2xl -right-5 top-5"
          onClick={handleNext}
        />
      </div>
      <Modal
        modalObj={modalObj}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default Calendar;
