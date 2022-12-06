import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Style from '../components/ClassroomTrainer.module.css';
import Stages from './Stages';

const StudentClassroom = () => {
  const [stage1dropdown, setStage1dropdown] = useState(false);
  const [bookmarked, setBookmarked] = useState([])

  const handleSavedBookmarks =()=> {
    localStorage.setItem('savedBookmarks', JSON.stringify(bookmarked))
    window.location.href = '/student/savedbookmarks'
  }

  return (
    <div className="pt-3">
      <div className="flex flex-row justify-between">
        <div className={`${Style.classroom}`}>
          <h5>My Classroom</h5>
        </div>
        <button onClick={handleSavedBookmarks} className='border px-4 py-1 border-[grey] rounded-md'><i class="fa-solid fa-bookmark text-[#00BD56] mr-3"></i>Saved</button>
      </div>

      <div className=" bg-white mt-5 p-5 rounded-xl">
        <div
          className="flex flex-row items-center justify-between"
          onClick={() => {
            setStage1dropdown(!stage1dropdown);
          }}
        >
          <div>
            <p className={`${Style.stage1}`}>Stage 1</p>
          </div>
          <div className="flex flex-row items-center justify-center bg-white cursor-pointer">
            <p className={`${Style.lesson1}`}>6 Lessons</p>
            <p className="ml-4 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
                fill="#0D6EFD"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </p>
          </div>
        </div>
        {stage1dropdown && <Stages 
        bookmarked={bookmarked}
        setBookmarked={setBookmarked}/>}
      </div>

      <div className="flex flex-row items-center justify-between bg-white mt-5 p-5 rounded-xl">
        <div>
          <p className={`${Style.stage1}`}>Stage 2</p>
        </div>
        <div className="flex flex-row items-center justify-center bg-white">
          <p className={`${Style.lesson1}`}>6 Lessons</p>
          <p className="ml-4 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              fill="#0D6EFD"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </p>
        </div>
      </div>

      <div
        className={`${Style.stage3bg} flex flex-row items-center justify-between mt-5 p-5 rounded-xl`}
      >
        <div>
          <p className={`${Style.stage3}`}>Stage 3</p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <p className={`${Style.nolesson}`}>6 Lessons</p>
          <p className="ml-4 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              fill="#FFFFFF"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </p>
        </div>
      </div>

      <div
        className={`${Style.stage3bg} flex flex-row items-center justify-between mt-5 p-5 rounded-xl`}
      >
        <div>
          <p className={`${Style.stage3}`}>Stage 4</p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <p className={`${Style.nolesson}`}>6 Lessons</p>
          <p className="ml-4 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              fill="#FFFFFF"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </p>
        </div>
      </div>

      <div
        className={`${Style.stage3bg} flex flex-row items-center justify-between mt-5 p-5 rounded-xl`}
      >
        <div>
          <p className={`${Style.stage3}`}>Stage 5</p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <p className={`${Style.nolesson}`}>6 Lessons</p>
          <p className="ml-4 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              fill="#FFFFFF"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </p>
        </div>
      </div>

      <div
        className={`${Style.stage3bg} flex flex-row items-center justify-between mt-5 p-5 rounded-xl`}
      >
        <div>
          <p className={`${Style.stage3}`}>Stage 6</p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <p className={`${Style.nolesson}`}>6 Lessons</p>
          <p className="ml-4 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              fill="#FFFFFF"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </p>
        </div>
      </div>

      <div
        className={`${Style.stage3bg} flex flex-row items-center justify-between mt-5 p-5 rounded-xl`}
      >
        <div>
          <p className={`${Style.stage3}`}>Stage 7</p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <p className={`${Style.nolesson}`}>6 Lessons</p>
          <p className="ml-4 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              fill="#FFFFFF"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </p>
        </div>
      </div>

      <div
        className={`${Style.stage3bg} flex flex-row items-center justify-between mt-5 p-5 rounded-xl`}
      >
        <div>
          <p className={`${Style.stage3}`}>Stage 8</p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <p className={`${Style.nolesson}`}>6 Lessons</p>
          <p className="ml-4 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              fill="#FFFFFF"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentClassroom;
