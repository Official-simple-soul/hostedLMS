import React, { useEffect, useState } from 'react';
import { FaAngleRight, FaAngleLeft, FaSearch } from 'react-icons/fa';
import Modal from './AdminAddEditTaskModal';
import ViewModal from './AdminViewTaskModal';
import MoreCalendarRow from './MoreCalendarRow';

const CalendarDates = require('calendar-dates');
const calendarDates = new CalendarDates();

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

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
      month: 'Feb',
    },
    {
      num: 8,
      type: 'task',
      task: 'Using Mongo DB',
      time: '10:10am',
      repeat: 'never',
      track: 'Back-end',
      tutor: 'Edward Precious',
      month: 'Mar',
    },
    {
      num: 10,
      type: 'class',
      task: 'Build kodecamp website',
      time: '10:30am',
      repeat: 'never',
      track: 'UI/UX',
      tutor: 'Ikeys Stephen',
      month: 'Feb',
    },
    {
      num: 12,
      type: 'meeting',
      task: 'Meeting with data scinece Trainers',
      time: '11:15am',
      repeat: 'never',
      track: 'Data Science',
      tutor: 'Timeyin Oluwa',
      month: 'Mar',
    },
    {
      num: 18,
      type: 'class',
      task: 'Javascript Objects',
      time: '11:30am',
      repeat: 'never',
      track: 'Front-end',
      tutor: 'Ogochukwu Udom',
      month: 'Jul',
    },
    {
      num: 22,
      type: 'task',
      task: 'Intro to PM',
      time: '9:45am',
      repeat: 'never',
      track: 'Project Management',
      tutor: 'Emmanuel Jackson',
      month: 'May',
    },
    {
      num: 27,
      type: 'meeting',
      task: 'Build kodecamp website',
      time: '10:30am',
      repeat: 'never',
      track: 'UI/UX',
      tutor: 'Ikeys Stephen',
      month: 'Jun',
    },
  ];
  return num.find((e) => e.num === n);
};
function MoreCalendar() {
  const [arr, setArr] = useState([]);
  const [mv, setMV] = useState(1);
  const [calMonth, setCalMonth] = useState();
  const [calYear, setCalYear] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [modalObj, setModalObj] = useState({});
const [weekIdx, setWeekIdx] = useState(0)

  useEffect(() => {
    const may2018 = new Date(2023, mv);

    const mainAsync = async () => {
      const mayDates = await calendarDates.getDates(may2018);
      setArr(mayDates);
    };
    mainAsync();
  }, [mv]);

  const currentDate = new Date().getDate();
  const currentMonth = month[new Date().getMonth()];

  useEffect(() => {
    const monthNum = new Date(2023, mv);
    setCalMonth(month[monthNum.getMonth()]);
    setCalYear(monthNum.getFullYear());
    weekIdx>6?setWeekIdx(weekIdx-7):weekIdx>13?setWeekIdx(weekIdx-14):setWeekIdx(weekIdx)
  }, [mv, weekIdx]);
  
  const handleNext = () => {
    setMV(mv + 1);
  };

  const handlePrev = () => {
    mv === 0 ? setMV(11) : setMV(mv - 1);
  };

  const handleViewTask = ({ date }) => {
    setModalObj(act(date));
    setShowViewModal(true);
  };

  const handleCreateTask = () => {
    setModalObj({});
    setShowModal(true);
  };

  const handleToday = () => {
    const today = new Date().getMonth()
    setMV(today)
  }

  return (
    <div>
      <h1 className="text-blue-ribbon-500 text-[12px]">
        Dashboad <span className="text-gray-400">/Calendar</span>
      </h1>
      <div className=" flex justify-between items-center">
        <h1 className="">Calendar</h1>
        <h1
          className="rounded-md bg-blue-ribbon-500 px-3 py-1 text-white cursor-pointer"
          onClick={handleCreateTask}
        >
          Create Event
        </h1>
      </div>
      <div className="mt-5 mb-4 flex justify-between items-center">
        <div className="flex items-center space-x-5">
          <p className="cursor-pointer border border-gray-500 text-gray-500 px-2 py-1 rounded-md" onClick={handleToday}>
            Today
          </p>
          <div className="flex">
            <FaAngleLeft
              className="text-gray-500 cursor-pointer"
              onClick={handlePrev}
            />
            <FaAngleRight
              className="text-gray-500 cursor-pointer"
              onClick={handleNext}
            />
          </div>
          <h1>
            {calMonth} {calYear}
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          {/* <div className="flex items-center px-2 py-1 bg-white rounded">
            <FaSearch className="text-sm text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 focus:outline-none"
            />
          </div> */}
          <select
            name=""
            id=""
            className="px-2 py-1 border border-gray-500 rounded-md"
          >
            <option value="task">Task</option>
            <option value="class">Class</option>
            <option value="meeting">Meeting</option>
          </select>
        </div>
      </div>
      <div className="overflow-auto h-[400px] md:h-full">
        <div className="grid grid-cols-7 w-[850px] md:w-full">
          {week.map((e) => (
            <h1 className="text-sm text-center border py-1 shadow">{e}</h1>
          ))}
        </div>
        <div className="grid grid-cols-7 bg-white w-[850px] md:w-full">
          {arr.map((e, idx) => {
            return (
              <>
                <MoreCalendarRow
                  e={e}
                  idx={idx}
                  calMonth={calMonth}
                  act={act}
                  handleViewTask={handleViewTask}
                  currentDate={currentDate}
                  currentMonth={currentMonth}
                  setWeekIdx={setWeekIdx}
                />
              </>
            );
          })}
        </div>
      </div>
      <Modal
        modalObj={modalObj}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <ViewModal
        modalObj={modalObj}
        showModal={showViewModal}
        setShowModal={setShowViewModal}
        week={week}
        idx={weekIdx}
        monthVal={calMonth}
      />
    </div>
  );
}

export default MoreCalendar;
