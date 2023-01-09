import React from "react";

const DropdownFilter = () => {
  return (
    <div className="bg-white rounded-lg py-4 px-2 absolute z-40 shadow-sm">
        <div className="checkbox-1 grid-cols-1">
            <p className="text-[#808080] text-sm my-2">Level</p>
            <div className="flex my-2.5 items-center">
                <input type="radio" />
                <p className="ml-2">Both</p>
            </div>
            <div className="flex my-2.5 items-center">
                <input type="radio" />
                <p className="ml-2">Biginner</p>
            </div>
            <div className="flex my-2.5 items-center">
                <input type="radio" />
                <p className="ml-2">Intermediate</p>
            </div>
        </div>
        <hr />
        <div className="checkbox-2 grid-cols-1">
            <p className="text-[#808080] text-sm">See first By</p>
            <div className="flex my-2.5 items-center">
                <input type="radio" />
                <p className="ml-2">Certificate Status</p>
            </div>
            <div className="flex my-2.5 items-center">
                <input type="radio" />
                <p className="ml-2">Grade</p>
            </div>
            <div className="flex my-2.5 items-center">
                <input type="radio" />
                <p className="ml-2">Stage</p>
            </div>
            <div className="flex my-2.5 items-center">
                <input type="radio" />
                <p className="ml-2">Gender</p>
            </div>
            <div className="flex my-2.5 items-center">
                <input type="radio" />
                <p className="ml-2">Student ID</p>
            </div>
        </div>
        <hr />
        <div className="checkbox-3 grid-cols-1">
            <p className="text-[#808080] text-sm my-2">Order</p>
            <div className="flex my-2.5 items-center">
                <input type="radio" />
                <p className="ml-2">Increasing</p>
            </div>
            <div className="flex my-2.5 items-center">
                <input type="radio" />
                <p className="ml-2">Decreasing</p>
            </div>
        </div>
        <p className="text-[#0D6EFD] cursor-pointer my-1.5">Apply</p>
    </div>
  );
};

export default DropdownFilter;
