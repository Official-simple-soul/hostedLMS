import React from 'react';
import { useEffect, useState } from 'react';
import Calendar from './Calendar';
import { AiFillCalendar, AiOutlinePlus } from 'react-icons/ai';
import Modal from './AdminAddEditTaskModal';
import { Link } from 'react-router-dom';

const num = [4, 12];
const percent = Math.floor((num[0] / num[1]) * 100);

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function InternshipProgress({ modalObj }) {
  const [monthVal, setMonthVal] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [mv, setMV] = useState(1);

  useEffect(() => {
    setMonthVal(months[mv].slice(0, 3));
  }, [mv]);

  return (
    <div className="w-full h-[100%] rounded-xl">
      <div className="p-5 py-8 bg-white rounded-lg">
        <h1>Internship Progress</h1>
        <div className="mt-6 flex justify-between items-center">
          <p>
            Week {num[0]} of {num[1]}
          </p>
          <p>{percent}%</p>
        </div>
        <div className="w-full h-2 bg-gray-100 shadow-inner rounded-md mt-2">
          <div
            className={`w-[${percent}%] rounded transition-all ease-in-out duration-500 h-[100%] bg-blue-ribbon-500`}
          ></div>
        </div>
      </div>
      <div className="bg-white p-5 py-10 rounded-lg mt-6">
        <div className="flex items-center justify-between">
          <h1>Calendar</h1>
          <div className="flex items-center border border-blue-ribbon-500 px-4 py-1 rounded-md space-x-2">
            <h1 className="">{monthVal} </h1>
            <AiFillCalendar className="text-lg text-blue-ribbon-500" />
          </div>
        </div>
        <Calendar monthVal={monthVal} modalObj={modalObj} mv={mv} setMV={setMV}/>
        <div className="flex justify-between items-center mt-8 w-[90%] mx-auto">
          <div className="flex items-center">
            <div className="h-4 w-4 bg-blue-ribbon-400 rounded-full mr-1"></div>
            <span>Task</span>
          </div>
          <div className="flex items-center">
            <div className="h-4 w-4 bg-green-400 rounded-full mr-1"></div>
            <span>Class</span>
          </div>
          <div className="flex items-center">
            <div className="h-4 w-4 bg-yellow-400 rounded-full mr-1"></div>
            <span>Meeting</span>
          </div>
        </div>
        <div className="flex items-center space-x-3 mt-8">
          <button
            className="text-white bg-blue-ribbon-500 px-3 py-1 rounded-md text-sm flex items-center space-x-2"
            onClick={() => setShowModal(true)}
          >
            <span>Add new </span> <AiOutlinePlus />
          </button>
          <Link to={'/admin/dashboard/morecalendar'}>
            <button className="text-blue-ribbon-500 border border-blue-ribbon-500 px-3 py-1 rounded-md text-sm">
              View all
            </button>
          </Link>
        </div>
      </div>
      <Modal
        modalObj={modalObj}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default InternshipProgress;
