import React, { useState } from "react";

const DropdownFilter = ({filter}) => {
    const [stage, setStage] = useState("Beginner")
    const [gender, setGender] = useState("male")
    const handleClick = (task, filtered) => {
            if(filtered == "level") {
                setStage(task)
            } 
            if(filtered == "gender") {
                setGender(task)
            }
        
    }
    const handleApply = () => {
        filter([stage, gender])
    }
  return (
    <form className="bg-white rounded-lg py-4 px-2 absolute z-40 shadow-lg lg:-ml-0 -ml-20 lg:mt-0 mt-4" onClick={console.log("form")}>
        <div className="checkbox-1">
            <p className="text-[#808080] text-sm my-2">Level</p>
            <div className="flex items-center">
                <input type="radio" value="Both" name="level" onClick={() => handleClick("Both", "level")} />
                <p className="ml-2">Both</p>
            </div>
            <div className="flex items-center">
                <input type="radio" value="Beginner" name="level" onClick={() => handleClick("Beginner", "level")} />
                <p className="ml-2">Beginner</p>
            </div>
            <div className="flex items-center">
                <input type="radio" value="Intermediate" name="level" onClick={() => handleClick("Intermidiate", "level")} />
                <p className="ml-2">Intermediate</p>
            </div>
        </div>
        <hr />
        <div className="checkbox-2">
            <p className="text-[#808080] text-sm my-2">See first By</p>
            <div className="flex items-center">
                <input type="radio" value="Certificate Status" name="see_first_by" />
                <p className="ml-2">Certificate Status</p>
            </div>
            <div className="flex items-center">
                <input type="radio" value="Grade" name="see_first_by" />
                <p className="ml-2">Grade</p>
            </div>
            <div className="flex items-center">
                <input type="radio" value="Stage" name="see_first_by" />
                <p className="ml-2">Stage</p>
            </div>
            <div className="flex items-center">
                <input type="radio" value="Gender" name="see_first_by" onClick={() => handleClick("female", "gender")} />
                <p className="ml-2">Gender</p>
            </div>
            <div className="flex items-center">
                <input type="radio" value="Student ID" name="see_first_by" onClick={() => handleClick("male", "gender")} />
                <p className="ml-2">Student ID</p>
            </div>
        </div>
        <hr />
        <div className="checkbox-3">
            <p className="text-[#808080] text-sm my-2">Order</p>
            <div className="flex items-center">
                <input type="radio" value="Increasing" name="order" />
                <p className="ml-2">Increasing</p>
            </div>
            <div className="flex items-center">
                <input type="radio" value="Decreasing" name="order" />
                <p className="ml-2">Decreasing</p>
            </div>
        </div>
        <p className="text-[#0D6EFD] cursor-pointer my-1.5" onClick={()=>handleApply()}>Apply</p>
    </form>
  );
};

export default DropdownFilter;
