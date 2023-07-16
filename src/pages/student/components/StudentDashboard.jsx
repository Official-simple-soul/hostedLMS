import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Progress from '../../../components/student/Progress'
import useFetch from '../../../hooks/useFetch';
import TaskList from './TaskList';
import { useNavigate } from 'react-router-dom'
import Modal from '../../admin/components/AdminDashboard/AdminAddEditTaskModal';
import Calendar from '../../admin/components/AdminDashboard/Calendar';
import { AiFillCalendar, AiOutlinePlus } from 'react-icons/ai';

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const StudentDashboard = ({ modalObj }) => {
  const [monthVal, setMonthVal] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [mv, setMV] = useState(1);

  useEffect(() => {
    setMonthVal(months[mv].slice(0, 3));
  }, [mv]);

  let navigate = useNavigate();
  const {
    data: tasks,
    isPending,
    error,
  } = useFetch("http://localhost:8000/tasks");
  let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
  let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = new Date().getDay();
  const five = [1, 1, 1, 1, 1];

  return (
    <>
      <h1 className="font-medium text-2xl">Dashboard</h1>
      <div className="grid lg:grid-cols-5 gap-4 mt-5">
        <div className="col-span-3">
          <Progress
            title="Learning Progress"
            trackWeek="UX Design - Week 4"
            percentage="33%"
            pointsOverall="Points - Overall"
            point="160 / 200"
            stagesCompleted="Stages Completed"
            stage="3 / 8"
          />
        </div>
        <div className="bg-white px-5 py-4 col-span-2 rounded-lg">
          <div className="flex items-center justify-between">
            <h1>Calendar</h1>
            <Link to={"/admin/dashboard/morecalendar"}>
              <div className="flex items-center border border-blue-ribbon-500 px-4 py-1 rounded-md space-x-2">
                <h1 className="">{monthVal} </h1>
                <AiFillCalendar className="text-lg text-blue-ribbon-500" />
              </div>
            </Link>
          </div>
          <Calendar
            monthVal={monthVal}
            modalObj={modalObj}
            mv={mv}
            setMV={setMV}
          />
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
        </div>
        <Modal
          modalObj={modalObj}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>

      <div className="bg-white mt-6 rounded-xl">
        <h1 className="text-lg pt-4 px-4">Recent Task</h1>
        {isPending && <div className="text-sm">Loading.....</div>}
        {error && <div className="text-sm bg-red-500 p-6 ">{error}</div>}

        <div>
          <div className="grid grid-cols-4 md:grid-cols-8 items-center bg-[#0d6efd08] py-4 px-5 my-4">
            <p className="text-base text-[#0D6EFD]">Stage</p>
            <p className="text-base text-[#0D6EFD] col-span-2">Task</p>
            <p className="text-base text-[#0D6EFD]">Track</p>
            <p className="text-base text-[#0D6EFD] hidden md:block col-span-2">
              Due Date
            </p>
            <p className="text-base text-[#0D6EFD] hidden md:block">Points</p>
            <p className="text-base text-[#0D6EFD] hidden md:block">Status</p>
          </div>
          <div className="flex flex-col gap-4">
            {tasks &&
              tasks.map((data) => (
                <div
                  className="grid grid-cols-4 md:grid-cols-8 items-center bg-white py-4 px-5 rounded-xl mt-4"
                  onClick={() => navigate(`/student/task/${data.id}`)}
                  key={data.id}
                >
                  <p className="text-base text-[#808080]">{data.stage}</p>
                  <p className="text-base text-[#808080] col-span-2">
                    {data.taskTitle}
                  </p>
                  <p className="text-base text-[#808080]">{data.track}</p>
                  <p className="text-base text-[#808080] hidden md:block col-span-2">
                    {data.dueDate}
                  </p>
                  <p className="text-base text-[#808080] hidden md:block">
                    {data.points}/100
                  </p>
                  {data.status === "Graded" ? (
                    <p className="text-base text-green-500 hidden md:block">
                      {data.status}
                    </p>
                  ) : (
                    <p className="text-base text-red-500 hidden md:block">
                      {data.status}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard