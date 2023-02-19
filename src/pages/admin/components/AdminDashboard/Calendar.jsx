import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Modal from './AdminViewTaskModal';
import CalenderRow from './CalenderRow';

const CalendarDates = require('calendar-dates');
const calendarDates = new CalendarDates();

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const act = (n) => {
  const num = [
    {
      num: 3,
      month: 1,
      type: 'class',
      task: 'Arrays in C progamming',
      time: '9:35am',
      repeat: 'never',
      track: 'C',
      tutor: 'Mubaraq Abuhassan',
    },
    {
      num: 8,
      month: 1,
      type: 'task',
      task: 'Using Mongo DB',
      time: '10:10am',
      repeat: 'never',
      track: 'Back-end',
      tutor: 'Edward Precious',
    },
    {
      num: 10,
      month: 1,
      type: 'class',
      task: 'Build kodecamp website',
      time: '10:30am',
      repeat: 'never',
      track: 'UI/UX',
      tutor: 'Ikeys Stephen',
    },
    {
      num: 12,
      month: 1,
      type: 'meeting',
      task: 'Meeting with data scinece Trainers',
      time: '11:15am',
      repeat: 'never',
      track: 'Data Science',
      tutor: 'Timeyin Oluwa',
    },
    {
      num: 18,
      month: 1,
      type: 'class',
      task: 'Javascript Objects',
      time: '11:30am',
      repeat: 'never',
      track: 'Front-end',
      tutor: 'Ogochukwu Udom',
    },
    {
      num: 22,
      month: 1,
      type: 'task',
      task: 'Intro to PM',
      time: '9:45am',
      repeat: 'never',
      track: 'Project Management',
      tutor: 'Emmanuel Jackson',
    },
    {
      num: 27,
      month: 1,
      type: 'meeting',
      task: 'Build kodecamp website',
      time: '10:30am',
      repeat: 'never',
      track: 'UI/UX',
      tutor: 'Ikeys Stephen',
    },
    {
      num: 16,
      month: 2,
      type: 'task',
      task: 'Intro to PM',
      time: '9:45am',
      repeat: 'never',
      track: 'Project Management',
      tutor: 'Emmanuel Jackson',
    },
    {
      num: 21,
      month: 2,
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

function Calendar({ mv, setMV, monthVal }) {
  const [arr, setArr] = useState([]);
  const [val, setval] = useState(0);
  const [weekIdx, setWeekIdx] = useState(0);
  const [modalObj, setModalObj] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getDate = new Date(2023, mv);
    const mainAsync = async () => {
      const mayMatrix = await calendarDates.getMatrix(getDate);

      setArr(mayMatrix[val]);
    };
    mainAsync();
  }, [mv, val]);

  // console.log(val)
  const handleNext = () => {
    val === 4 ? setval(1) : setval(val + 1);
    val === 4 && setMV(mv + 1);
    mv === 11 && val === 4 && setMV(0);
  };

  const handlePrev = () => {
    val === 0 ? setval(4) : setval(val - 1);
    val === 0 && setMV(mv - 1);
    mv === 0 && val === 1 && setMV(11);
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
        {arr.map((e, idx) => {
          return (
            <>
              <div key={idx}>
                <CalenderRow
                  handleViewTask={handleViewTask}
                  e={e}
                  week={week}
                  idx={idx}
                  setWeekIdx={setWeekIdx}
                  act={act}
                  mv={mv}
                />
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
        week={week}
        idx={weekIdx}
        monthVal={monthVal}
      />
    </div>
  );
}

export default Calendar;
