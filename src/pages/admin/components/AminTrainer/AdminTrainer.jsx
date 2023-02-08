import React, { useEffect } from 'react';
import AdminTrainerRow from './AdminTrainerRow';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState } from 'react';
import axios from 'axios';
import {FaAngleDown} from 'react-icons/fa'
import DropdownFilter from '../../../../components/admin/Trainer/DropdownFilter';

const pages = (num) => {
  let pageNum = [];
  for (let i = 1; i <= num; i++) {
    pageNum.push(i);
  }
  return pageNum;
};

function AdminTrainer() {
  const [val, setVal] = useState(7);
  const [trainerData, setTrainerData] = useState([]);
  const [dropDownFilter, setDropDownFilter] = useState(false);
  const [filter, setFilter] = useState({
    level: 'Both',
    order: '',
})
const {level, order} = filter
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get('http://localhost:8000/students');
      level==='Intermidiate' || level ==='Beginner'? setTrainerData(data.data.filter(e=>e.level===level))
      :order==='Decreasing'?setTrainerData(data.data.reverse())
      :(level==='Intermidiate' && order === 'Decreasing') || (level==='Beginner' && order === 'Decreasing')?setTrainerData(data.data.filter(e=>e.level===level).reverse())
      :setTrainerData(data.data);
    };
    fetchData();
  }, [val, level, order]);
console.log(filter)

  const handleNext = () => {
    val === trainerData.length ? setVal(7) : setVal(val + 7);
  };
  const handlePrev = () => {
    val === 7 ? setVal(trainerData.length) : setVal(val - 7);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
      <h1 className="text-lg">Trainers</h1>
      <div>
              <button
                className="rounded-lg  text-[#808080] py-2 pl-3 bg-white border border-black lg:flex hidden"
                onClick={() => setDropDownFilter(!dropDownFilter)}
              >
                {level} Trainer...
                <FaAngleDown />
              </button>
              {dropDownFilter && (
                <DropdownFilter
                setFilter={setFilter}
                dropDownFilter={dropDownFilter}
                setDropDownFilter={setDropDownFilter}
                />
              )}
            </div>
      </div>
      <h1 className="text-center text-sm my-3">
        Showing {val - 6} - {val} of {trainerData.length} trainers
      </h1>
      <ul className="overflow-auto">
        <li
          className={`flex space-x-20 md:space-x-0 items-center md:grid grid-cols-5 py-4 mb-6 px-4 bg-blue-ribbon-50`}
        >
          <div className="flex items-center space-x-10 md:col-span-2">
            <h1 className="">ID</h1>
            <div className="flex items-center space-x-6">
              <p>Name</p>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 flex space-x-8 md:space-x-0">
            <h1>Gender</h1>
            <h1>Email</h1>
          </div>
          <div className="flex items-center">Track</div>
          <div className="flex justify-between items-center">
            Level
            <div className="menu relative">
              <BsThreeDotsVertical className="text-2xl" />
            </div>
          </div>
        </li>
        {trainerData &&
          trainerData.slice(val - 7, val).map((item) => {
            return (
              <div key={item.id}>
                <AdminTrainerRow item={item} />
              </div>
            );
          })}
      </ul>
      <div className="flex justify-end items-center space-x-4">
        <h1 onClick={handlePrev} className="cursor-pointer">
          Prev
        </h1>
        {pages(trainerData.length / 7).map((item) => {
          return (
            <>
              <h1
                className={`${
                  val / item === 7 ? 'bg-blue-ribbon-500 text-white' : ''
                } py-2 px-4 rounded text-sm p-3`}
              >
                {item}
              </h1>
            </>
          );
        })}
        <h1 onClick={handleNext} className="cursor-pointer">
          Next
        </h1>
      </div>
    </div>
  );
}

export default AdminTrainer;
