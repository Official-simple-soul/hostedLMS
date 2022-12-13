import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import cancelIcon from "../../../assets/icons/cancel2025.svg";
import fileIcon from "../../../assets/icons/file2024.svg";
import { Avatar, DueDate, Calender } from "../../../assets";

// json-server --watch data/db.json --port 8000

const TaskDetails = () => {
  const { id } = useParams();
  const {
    data: task,
    isPending,
    error,
  } = useFetch("http://localhost:8000/tasks/" + id);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
//   const [dd, setDd] = useState(task.taskDesc)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);

//   console.log(task.taskDesc)

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    setIsSubmitted(true);
  };

  return (
    <div>
      {isPending && <div className="text-sm">Loading.....</div>}
      {error && (
        <div className="text-sm bg-red-500 p-6 text-white mt-5">{error}</div>
      )}

      {task && (
        <div>
          <p className="text-sm text-blue-ribbon">
            Tasks / <span className="text-[#808080]">{task.taskTitle}</span>
          </p>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="col-span-2 text-2xl bg-white rounded-xl p-5">
              <div className="w-[97%] mx-auto border-b border-grey-400 pb-3 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg">{task.taskTitle}</h2>
                  <p className="text-sm text-[#808080]">
                    {task.track} - Beginner
                  </p>
                </div>
                <div className="flex gap-4 items-items">
                  <div className="flex gap-2 items-center">
                    <div className="w-5 h-5 bg-gray-200 rounded-full"><img src={Avatar} alt="" /></div>
                    <p className="text-sm text-[#808080]">Believe</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={Calender} alt="" />
                    <p className="text-sm text-[#808080]">October 5</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <img src={DueDate} alt="" />
                    <p className="text-sm text-[#808080]">Due in 2 days</p>
                  </div>
                  <p className="text-sm text-[#808080]">{task.points} points</p>
                </div>
              </div>

              <div className="w-[97%] mx-auto border-b border-grey-400 py-3 flex flex-col gap-2">
                <p className="text-sm"></p>
                <p className="font-medium text-sm">Deliverables</p>
                <p className="text-sm">{task.taskDesc}</p>
                <p className="text-sm">Use the websites below as source of inspiration</p>
              </div>
            </div>

            <div className="text-2xl bg-white rounded-xl p-5 self-start">
              <div className="flex items-center justify-between">
                <p className="text-lg">Status</p>
                {isSubmitted ? 
                    <p className="text-sm text-green-500">Submitted</p> 
                    : <p className="text-sm text-red-500">Not Submitted</p>
                }
                
              </div>

              <div className="flex flex-col gap-5 mt-6">
                <div className="flex flex-col gap-1">
                    <label  className="text-lg text-[#808080] font-thin">Link</label>
                    <input
                    className="border-2 text-sm rounded-lg w-full px-2 h-[54px]"
                    type="text"
                    placeholder="paste the link to your work"
                    />
                </div>
                {/* attachment start */}

                <div className="flex flex-col gap-1">
                    <p  className="text-lg text-[#808080] font-thin">Attachment</p>
                    <div
                        className={
                            isFilePicked
                            ? "hidden border-2 border-dashed border-gray-300 rounded-lg w-full px-2 h-[54px] "
                            : "border-2 border-dashed border-gray-300 rounded-lg w-full px-2 h-[54px] "
                        }
                    >
                    <label
                        id="customLabel"
                        className="cursor-pointer"
                        ref={ref}
                    >
                        <input
                            id="inputFile"
                            className="cursor-pointer mb-0 z-0 hidden"
                            type="file"
                            onChange={changeHandler}
                        />
                        {console.log(selectedFile)}
                        {console.log("is file picked", isFilePicked)}
                        <p className="cursor-pointer">
                        <span className="opacity-60 text-sm">Drag & drop or </span>
                        <span className="text-blue-600 underline-offset-8 text-sm">browse files</span>
                        </p>
                    </label>
                    </div>
                    {/* when file is picked */}
                    <div
                    className={
                        isFilePicked
                        ? "border-2 h-[70px] w-full rounded-2xl border-gray-400 flex"
                        : "hidden"
                    }
                    >
                    <div>
                        <img className="" src={fileIcon} alt="file icon" />
                    </div>
                    <div className="m-4">
                        {isFilePicked && (
                        <p className="opacity-70">{selectedFile.name}</p>
                        )}
                    </div>
                    <div>
                        <img
                        className="mt-4 ml-4 cursor-pointer"
                        src={cancelIcon}
                        alt="cancel"
                        />
                    </div>
                    </div>
                </div>
                {/* attachment end */}

                <div
                    className={isSubmitted ? "opacity-30 cursor-not-allowed" : ""}
                >
                    <button
                    className={
                        isFilePicked || isSubmitted
                        ? "bg-blue-500 rounded-lg w-full h-[40px] text-white my-4 font-bold"
                        : "bg-blue-500 rounded-lg w-full h-[40px] text-white my-4 font-bold opacity-30 cursor-not-allowed"
                    }
                    onClick={handleSubmission}
                    >
                    Submit
                    </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetails;
