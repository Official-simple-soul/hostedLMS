import React from "react";
import { Link } from "react-router-dom";

const StudentTaskHeader = () => {
  return (
    <header className=" flex justify-between mx-2">
      <div className="text-2xl font-bold opacity-60">
        <Link to="task">Tasks</Link>
      </div>
      <div className="">
        <label className="mr-2" htmlFor="filter">
          Filter
        </label>
        <select
          className=" border-2 border-gray-300 bg-white rounded-lg px-2 py-2 w-40"
          name="choice"
        >
          <option className=" " value="first" selected>
            All
          </option>
          <option className="" value="first">
            Second Value
          </option>
          <option className="" value="first">
            Third Value
          </option>
          <option className="" value="first">
            Fourth Value
          </option>
        </select>
      </div>
    </header>
  );
};

export default StudentTaskHeader;
