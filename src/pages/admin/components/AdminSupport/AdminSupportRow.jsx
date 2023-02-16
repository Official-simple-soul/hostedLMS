import { BsThreeDotsVertical } from 'react-icons/bs';
import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AdminSupportModal from './AdminSupportModal';

function AdminSupportRow({ item, handleCheck, handleCheckClick }) {
  const [drop, setDrop] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [check, setCheck] = useState(false);

  const handleDrop = () => {
    setDrop(!drop);
  };


  return (
    <div>
      <li key={item.id}
        className={`${item?.isChecked && 'border-l-4 border-r-4 border-blue-ribbon-500'} flex space-x-20 md:space-x-0 items-center md:grid grid-cols-6 py-4 mb-6 px-4 bg-white shadow-lg rounded-lg`}
      >
        <div className="flex items-center md:col-span-2">
          <input
            type="checkbox"
            name={item.id}
            onChange={handleCheckClick}
            checked={item?.isChecked || false}
            id='checked-checkbox'
            className=''
          />
          <h1 className="mx-4">{item.id}</h1>
          <div className="flex items-center space-x-6">
            <img src={item.img} alt={item.name} />
            <div className="div">
              <p>{item.name}</p>
              <span className="text-[12px]">
                {item.track}|{item.level}|Stage {item.stage}
              </span>
            </div>
          </div>
        </div>
        <div className=" flex space-x-8 md:space-x-0">
          <h1>{item.title}</h1>
        </div>
        <div className="flex items-center">{item.subject}</div>
        <div className="flex justify-between items-center col-span-2">
          <div className="">{item.date}</div>
          <div
            className={`${
              item.status === 'resolved' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {item.status}
          </div>
          <div className="menu relative">
            <BsThreeDotsVertical className="text-2xl" onClick={handleDrop} />
            <div
              className={` ${
                !drop ? 'hidden' : 'block'
              } right-4 absolute py-2 bg-white shadow-lg rounded-md w-40 border`}
            >
              <p
                className="hover:bg-blue-ribbon-200 px-4 py-2"
                onClick={() => {
                  setShowModal(true);
                  setDrop(false);
                }}
              >
                Resolve
              </p>
              <NavLink to={`/admin/admin-trainer/${item.id}`}>
                <p className="mb-4 hover:bg-blue-ribbon-200 px-4 py-2">
                  View Profile
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </li>
      <AdminSupportModal
        showModal={showModal}
        setShowModal={setShowModal}
        item={item}
      />
    </div>
  );
}

export default AdminSupportRow;
