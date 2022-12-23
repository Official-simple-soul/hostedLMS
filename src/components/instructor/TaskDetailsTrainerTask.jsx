import React, { useState } from 'react'
import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';
import { Avatar, DueDate, Calender } from '../../assets'

const TaskDetailsTrainerTask = () => {
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

        {task && <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="col-span-2 text-2xl bg-white rounded-xl p-5">
            <div className="w-[97%] mx-auto border-b border-grey-400 pb-3 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                <h2 className="text-lg">{task.taskTitle}</h2>
                <p className="text-sm text-[#808080]">{task.track} - Beginner</p>
                </div>
                <div className="flex gap-4 items-items">
                <div className="flex gap-2 items-center">
                    <div className="w-5 h-5 bg-gray-200 rounded-full">
                    <img src={Avatar} alt="" />
                    </div>
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
                <p className="text-sm">
                Use the websites below as source of inspiration
                </p>
            </div>
            </div>

            <div className="text-2xl bg-white rounded-xl p-5 self-start">
            <div className="flex items-center justify-between">
                <p className="text-lg">Status</p>
                {isSubmitted ? (
                <p className="text-sm text-green-500">Submitted</p>
                ) : (
                <p className="text-sm text-red-500">Not Submitted</p>
                )}
            </div>
            </div>
        </div> }
    </div>
  );
}

export default TaskDetailsTrainerTask