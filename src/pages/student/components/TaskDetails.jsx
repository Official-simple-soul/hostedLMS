import React, { useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import cancelIcon from '../../../assets/icons/cancel2025.svg';
import fileIcon from '../../../assets/icons/file2024.svg';
import { Avatar, DueDate, Calender } from '../../../assets';

// json-server --watch data/db.json --port 8000

const TaskDetails = () => {
  const { id } = useParams();
  const {
    data: task,
    isPending,
    error,
  } = useFetch('http://localhost:8000/tasks/' + id);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  //   const [dd, setDd] = useState(task.taskDesc)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitDetail, setSubmitDetail] = useState({
    link: '',
    file: '',
  });
  const ref = useRef(null);

  //   console.log(task.taskDesc)

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    console.log(submitDetail);
  };

  const handleSubmitDetailChange = ({ target }) => {
    setSubmitDetail({ ...submitDetail, [target.name]: target.value });
  };

  return (
    <div>
      {isPending && <div className='text-sm'>Loading.....</div>}
      {error && (
        <div className='text-sm bg-red-500 p-6 text-white mt-5'>{error}</div>
      )}

      {task && (
        <div>
          <p className='text-sm text-blue-ribbon'>
            <Link to='/task'>Tasks</Link> /{' '}
            <span className='text-[#808080]'>{task.taskTitle}</span>
          </p>
          <div className='grid md:grid-cols-3 gap-4 mt-4'>
            <div className='md:col-span-2 text-2xl bg-white rounded-xl p-5'>
              <div className='w-[97%] mx-auto border-b border-grey-400 pb-3 flex flex-col gap-2'>
                <div className='flex flex-col gap-2 md:flex-row md:justify-between md:items-center'>
                  <h2 className='text-lg'>{task.taskTitle}</h2>
                  <p className='text-sm text-[#808080]'>
                    {task.track} - Beginner
                  </p>
                </div>
                <div className='flex gap-4 items-items'>
                  <div className='flex gap-2 items-center'>
                    <div className='w-5 h-5 bg-gray-200 rounded-full'>
                      <img src={Avatar} alt='' />
                    </div>
                    <p className='text-sm text-[#808080]'>Believe</p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <img src={Calender} alt='' />
                    <p className='text-sm text-[#808080]'>October 5</p>
                  </div>
                </div>
                <div className='flex flex-col gap-2 md:flex-row md:justify-between md:items-center'>
                  <div className='flex gap-2 items-center'>
                    <img src={DueDate} alt='' />
                    <p className='text-sm text-[#808080]'>Due in 2 days</p>
                  </div>
                  <p className='text-sm text-[#808080]'>{task.points} points</p>
                </div>
              </div>

              <div className='w-[97%] text-[12px] leading-6 text-gray-500 mx-auto border-b border-grey-400 py-3 flex flex-col gap-2'>
                <p className='text-[12px] leading-4 text-gray-500'>
                  {task.taskDesc}
                </p>
                <p className='font-medium text-sm'>Deliverables</p>
                <ul className='text-[12px] leading-6 text-gray-500 list-disc'>
                  {task.taskDeliverables.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
                <p className='text-sm'>
                  Use the websites below as source of inspiration
                </p>
              </div>
              <div className='flex items-center space-x-4 flex-wrap text-[12px] text-gray-500 leading-4 mt-4'>
                {task.resources?.map((e, idx) => {
                  return (
                    <div
                      className='card p-2 border border-gray-500 rounded-md'
                      key={idx}
                    >
                      <p>{e.title}</p>
                      <p>{e.url}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className='text-2xl bg-white rounded-xl p-5 self-start'>
              <div className='flex items-center justify-between'>
                <p className='text-lg'>Status</p>
                {isSubmitted ? (
                  <p className='text-sm text-green-500'>Submitted</p>
                ) : (
                  <p className='text-sm text-red-500'>Not Submitted</p>
                )}
              </div>

              <div className='flex flex-col gap-5 mt-6'>
                <div className='flex flex-col gap-1'>
                  <label className='text-lg text-[#808080] font-thin'>
                    Link
                  </label>
                  <input
                    className='border-2 text-sm rounded-lg w-full px-2 h-[54px]'
                    type='text'
                    placeholder='paste the link to your work'
                    name='link'
                    value={submitDetail.link}
                    onChange={handleSubmitDetailChange}
                  />
                </div>
                {/* attachment start */}

                <div className='flex flex-col gap-1'>
                  <p className='text-lg text-[#808080] font-thin'>Attachment</p>
                  <div
                    className={
                      isFilePicked
                        ? 'hidden border-2 border-dashed border-gray-300 rounded-lg w-full px-2 h-[54px] '
                        : 'border-2 border-dashed border-gray-300 rounded-lg w-full px-2 h-[54px] '
                    }
                  >
                    <label
                      id='customLabel'
                      className='cursor-pointer'
                      ref={ref}
                    >
                      <input
                        id='inputFile'
                        className='cursor-pointer mb-0 z-0 hidden'
                        type='file'
                        name='file'
                        onChange={handleSubmitDetailChange}
                      />
                      <p className='cursor-pointer'>
                        <span className='opacity-60 text-sm'>
                          Drag & drop or{' '}
                        </span>
                        <span className='text-blue-600 underline-offset-8 text-sm'>
                          browse files
                        </span>
                      </p>
                    </label>
                  </div>
                  {/* when file is picked */}
                  <div
                    className={
                      isFilePicked
                        ? 'border-2 h-[70px] w-full rounded-2xl border-gray-400 flex'
                        : 'hidden'
                    }
                  >
                    <div>
                      <img className='' src={fileIcon} alt='file icon' />
                    </div>
                    <div className='m-4'>
                      {isFilePicked && (
                        <p className='opacity-70'>{submitDetail.file}</p>
                      )}
                    </div>
                    <div>
                      <img
                        className='mt-4 ml-4 cursor-pointer'
                        src={cancelIcon}
                        alt='cancel'
                      />
                    </div>
                  </div>
                </div>
                {/* attachment end */}

                <div className=''>
                  <button
                    className={
                      submitDetail.link || submitDetail.file
                        ? 'text-base bg-blue-500 rounded-lg w-full h-[40px] text-white my-4'
                        : 'text-base bg-blue-500 rounded-lg w-full h-[40px] text-white my-4 opacity-30 cursor-not-allowed'
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
