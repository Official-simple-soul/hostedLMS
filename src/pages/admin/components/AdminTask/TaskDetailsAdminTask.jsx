import React, { useState } from 'react'
import useFetch from '../../../../hooks/useFetch'
import { useParams } from 'react-router';
import { Avatar, DueDate, Calender } from '../../../../assets'
import { Markup } from 'interweave';

const TaskDetailsAdminTask = () => {
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

    function getText(html){
        var divContainer= document.createElement("div");
        divContainer.innerHTML = html;
        return divContainer.textContent || divContainer.innerText || "";
    }

    return (
        <div>
            {isPending && <div className="text-sm">Loading.....</div>}
            {error && (
            <div className="text-sm bg-red-500 p-6 text-white mt-5">{error}</div>
            )}

            {task && <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="md:col-span-2 text-2xl bg-white rounded-xl p-5">
                    <div className="w-[97%] mx-auto border-b border-grey-400 pb-3 flex flex-col gap-2">
                        <div className="flex flex-col gap-1 md:flex-row justify-between md:items-center">
                            <h2 className="text-lg">{task.taskTitle}</h2>
                            <p className="text-sm text-[#808080]">{task.track} - {task.level}</p>
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

                        <div className="flex flex-col gap-1 md:flex-row justify-between md:items-center">
                            <div className="flex gap-2 items-center">
                                <img src={DueDate} alt="" /> 
                                <p className="text-sm text-[#808080]">Due in 2 days</p>
                            </div>
                            <p className="text-sm text-[#808080]">{task.points} points</p>
                        </div>
                    </div>

                    <div className="w-[97%] mx-auto border-b border-grey-400 py-3 flex flex-col gap-2">
                        <Markup
                            className="text-sm text-black"
                            content={task.taskDesc} 
                        />
                    </div>
                </div>

                <div className="md:col-span-1 text-2xl bg-white rounded-xl p-5 self-start w-full">
                    <div className="flex items-center justify-between">
                        <p className="text-lg">Status</p>
                        {task.status === "Submitted" ? (
                            <p className="text-sm text-green-500">Submitted</p>
                            ) : (
                            <p className="text-sm text-red-500">Not Submitted</p>
                        )}
                    </div>

                    <button className='bg-blue-ribbon-500 text-white text-base px-8 py-2 rounded-lg mt-5'>Post Task</button>
                </div>
            </div> }
        </div>
        );
}

export default TaskDetailsAdminTask