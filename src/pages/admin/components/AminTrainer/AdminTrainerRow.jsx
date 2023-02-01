import { BsThreeDotsVertical } from 'react-icons/bs';
import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function AdminTrainerRow({ item }) {
  const [drop, setDrop] = useState(false);
  return (
    <div>
        <li
          className={`flex space-x-20 md:space-x-0 items-center md:grid grid-cols-5 py-4 mb-6 px-4 bg-white shadow-lg rounded-md`}
        >
          <div className="flex items-center space-x-10 md:col-span-2">
            <h1 className="">{item.id}</h1>
            <div className="flex items-center space-x-6">
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 flex space-x-8 md:space-x-0">
            <h1>
              {item.gender.slice(0, 1).toUpperCase() + item.gender.slice(1)}
            </h1>
            <h1>{item.certificate}</h1>
          </div>
          <div className="flex items-center">{item.track}</div>
          <div className="flex justify-between items-center">
            {item.level}
            <div className="menu relative">
              <BsThreeDotsVertical
                className="text-2xl"
                onClick={() => setDrop(!drop)}
              />
              <div
                className={` ${
                  !drop ? 'hidden' : 'block'
                } right-4 absolute py-2 bg-white shadow-lg rounded-md w-40 border`}
              >
                <NavLink to={`/admin/admin-trainer/${item.id}`}><p className="mb-4 hover:bg-blue-ribbon-200 px-4 py-2">
                  View Profile
                </p></NavLink>
                <p className="hover:bg-blue-ribbon-200 px-4 py-2">
                  View Courses
                </p>
              </div>
            </div>
          </div>
        </li>
    </div>
  );
}

export default AdminTrainerRow;
