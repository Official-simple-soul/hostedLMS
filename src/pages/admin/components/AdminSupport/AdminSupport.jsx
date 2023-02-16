import React, { useEffect } from 'react';
import AdminSupportRow from './AdminSupportRow';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState } from 'react';
import axios from 'axios';
import { FaAngleDown, FaTimes } from 'react-icons/fa';
import DropdownFilter from '../../../../components/admin/support/DropdownFilter';
import { AiFillCheckCircle } from 'react-icons/ai';

const pages = (num) => {
  let pageNum = [];
  for (let i = 1; i <= num; i++) {
    pageNum.push(i);
  }
  return pageNum;
};

function AdminSupport() {
  const [trainerData, setTrainerData] = useState([]);
  const [checkArr, setCheckArr] = useState([]);
  const [resolveArr, setResolveArr] = useState([]);
  const [val, setVal] = useState(7);
  const [dropDownFilter, setDropDownFilter] = useState(false);

  const [filter, setFilter] = useState({
    status: 'Both',
    order: '',
    see_first: '',
  });
  const { status, order } = filter;
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get('http://localhost:8000/support');
      status === 'resolved' || status === 'unresolved'
        ? setTrainerData(data.data.filter((e) => e.status === status))
        : order === 'Decreasing'
        ? setTrainerData(data.data.reverse())
        : setTrainerData(data.data);
    };
    fetchData();
  }, [val, status, order]);

  useEffect(() => {
    setCheckArr(new Array(trainerData.length).fill(false));
  }, [trainerData]);

  const handleNext = () => {
    val === trainerData.length ? setVal(7) : setVal(val + 7);
  };
  const handlePrev = () => {
    val === 7 ? setVal(trainerData.length) : setVal(val - 7);
  };

  // const handleCheck = (position) => {
  //   const updatedChecked = checkArr.map((item, idx) =>
  //     idx + 1 === Number(position.slice(-1)) ? !item : item
  //   );
  //   setCheckArr(updatedChecked);
  // };

  const handleCheckClick = (e) => {
    const { name, checked } = e.target;
    if (name === 'checkResolveAll') {
      const tmUser = trainerData.map((e) => {
        return { ...e, isChecked: checked };
      });
      setTrainerData(tmUser);
    } else {
      const tmUser = trainerData.map((e) =>
        e.id === name ? { ...e, isChecked: checked } : e
      );
      setTrainerData(tmUser);
    }
  };

  const handleTimes = () => {
    const tmUser = trainerData.map((e) => {
      return { ...e, isChecked: false };
    });
    setResolveArr([]);
    setTrainerData(tmUser);
  };

  const handleResolved = () => {
    const tmUser = trainerData.map(e=>{return {...e, status: 'resolved', isChecked: false} })
    setTrainerData(tmUser)
  }

  useEffect(() => {
    setResolveArr(trainerData.filter((e) => e?.isChecked).length);
  }, [trainerData, checkArr]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-lg">Support</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <p className="">filter</p>
            <div className="btn">
              <button
                className="rounded-lg  text-[#808080] py-2 pl-3 bg-white border border-black lg:flex hidden"
                onClick={() => setDropDownFilter(!dropDownFilter)}
              >
                {status}
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
          <h1 className={`${resolveArr > 0 ? 'block' : 'hidden'} text-[grey]`}>
            <FaTimes
              className="inline mr-2 text-sm cursor-pointer"
              onClick={handleTimes}
            />
            ({resolveArr}) selected
          </h1>
          <button
            className="bg-blue-ribbon-500 text-white flex items-center px-3 py-[9px] rounded-md"
            onClick={handleResolved}
          >
            <AiFillCheckCircle className="mr-2" />
            <span>Resolve Selected</span>
          </button>
        </div>
      </div>
      <h1 className="text-center text-sm my-3">
        Showing {val - 6} - {val} of {trainerData.length} trainers
      </h1>
      <ul className="overflow-auto">
        <li
          key={'1'}
          className={`flex space-x-20 md:space-x-0 items-center md:grid grid-cols-6 py-4 mb-6 px-4 bg-blue-ribbon-50`}
        >
          <div className="flex items-center space-x-10 md:col-span-2">
            <input
              type="checkbox"
              name="checkResolveAll"
              onChange={handleCheckClick}
              checked={
                trainerData.filter((e) => e?.isChecked !== true).length < 1
              }
            />
            <h1 className="">ID</h1>
            <div className="flex items-center space-x-6">
              <p>User</p>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 flex space-x-8 md:space-x-0">
            <h1>Title</h1>
          </div>
          <div className="flex items-center">Subject</div>
          <div className="flex justify-between items-center col-span-2">
            <div className="">Date</div>
            <h1 className='ml-10'>Status</h1>
            <div className="menu relative">
              <BsThreeDotsVertical className="text-2xl" />
            </div>
          </div>
        </li>
        {trainerData &&
          trainerData.slice(val - 7, val).map((item) => {
            return (
              <div key={item.id}>
                <AdminSupportRow
                  item={item}
                  // check={check}
                  // setCheck={setCheck}
                  // handleCheck={handleCheck}
                  checkArr={checkArr}
                  setCheckArr={setCheckArr}
                  handleCheckClick={handleCheckClick}
                />
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

export default AdminSupport;
