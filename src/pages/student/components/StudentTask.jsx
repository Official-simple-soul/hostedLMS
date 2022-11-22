import React , {useState} from 'react';
import {useRef, useEffect} from 'react';
import avatar1 from '../../../assets/images/avatar112.svg';
import cal from '../../../assets/icons/cal122.svg';
import timer from '../../../assets/icons/timer211.svg';
import task1 from '../../../assets/images/task3.svg';
import task2 from '../../../assets/images/task2.svg';
import cancelIcon from '../../../assets/icons/cancel2025.svg';
import fileIcon from '../../../assets/icons/file2024.svg';
import './StudentTasks.css';
import StudentPageWrapper from '../../../layouts/student/StudentPageWrapper';



const StudentTask = () => {
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  const [isSubmitted,setIsSubmitted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const inputFile = document.getElementById('inputFile');
    const customLabel = document.getElementById('customLabel');

    customLabel.addEventListener('click', function(){
      inputFile.click()
    })


  }, []);

  const changeHandler = (event) => {
		 setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
          setIsSubmitted(true);
	};

  return (
    <StudentPageWrapper>
      <div className="tasks bg-gray-100 h-full w-full my-10">
        <header className=" flex justify-between">
          <div className="">
            <p className="text-sm mb-2">
              {" "}
              <span className="text-blue-400 font-bold">Tasks / </span>
              <span className="opacity-60">Redesign KodeCamp Website</span>
            </p>
            <h3 className="text-2xl font-bold opacity-60">Task</h3>
          </div>
        </header>

        <div className="flex justify-between">
          <main className="w-[70%] bg-white my-2 p-5 rounded-xl">
            <div className="flex justify-between">
              <h3 className="text-xl"> Redesign KodeCamp Website</h3>
              <div className="opacity-70">
                <span>UI/UX Design </span>
                <span> &#x2022; Beginner </span>
              </div>
            </div>
            <div className="flex my-2">
              <img src={avatar1} alt="avatar" />
              <span className="mx-2 opacity-70">Believe &#x2022;</span>
              <img className="mx-2" src={cal} alt="cal" />
              <span className="opacity-70">october 5 </span>
            </div>
            <div className="flex justify-between my-4 ">
              <div className="flex">
                <img src={timer} alt="timer" />

                <div className="whitespace-nowrap mx-2 opacity-70">
                  Due in 2 days
                </div>
              </div>
              <span className="opacity-70">100 points</span>
            </div>
            <div className="my-5">
              <hr className="w-full" />
            </div>
            <div className="opacity-70">
              <p>
                Design a new website for KodeCamp, taking into consideration the
                fact that it is an e-learning platform but should also be
                marketable to sponsors or partners.
              </p>

              <p className="my-4">
                Deliverables:
                <ul className="list-disc ml-4">
                  <li>User Researrch plan</li>
                  <li>Personas</li>
                  <li>User Stories</li>
                  <li>Information architecture</li>
                  <li>User flow</li>
                  <li>Wireframes</li>
                  <li>High-fidelity designs</li>
                  <li>Clickable prototype</li>
                </ul>
              </p>
              <p>
                Note that you are to design all pages, not just the home page.
              </p>

              <p>Use the websites below as source of inspiation.</p>
            </div>
            <div className="my-5">
              <hr className="w-full" />
            </div>

            <div className="">
              <div className="flex mb-2">
                <div className="w-[400px] h-[60px] border-2 rounded-xl mx-2 flex">
                  <img className="h-full" src={task1} alt="task1" />
                  <div className="m-1">
                    <h3>KodeCamp | Building the Tech S...</h3>
                    <p className="opacity-60">https://www.kodecamp/uxtips/</p>
                  </div>
                </div>
                <div className="w-[400px] h-[60px] border-2 rounded-xl mx-2 flex">
                  <img className="h-full" src={task2} alt="task2" />
                  <div className="m-1">
                    <h3>Coursera User Research Courses</h3>
                    <p className="opacity-60">https://www.coursera/uxtips/</p>
                  </div>
                </div>
              </div>

              <div className="flex mb-2">
                <div className="w-[400px] h-[60px] border-2 rounded-xl mx-2 flex">
                  <img className="h-full" src={task2} alt="task2" />
                  <div className="m-1">
                    <h3>Guide on user research plan</h3>
                    <p className="opacity-60">https://www.kodecamp/uxtips/</p>
                  </div>
                </div>
                <div className="w-[400px] h-[60px] border-2 rounded-xl mx-2 flex">
                  <img className="h-full" src={task1} alt="task1" />
                  <div className="m-1">
                    <h3>How to construct a user story</h3>
                    <p className="opacity-60">https://www.zuri/uxtips/</p>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* sidebar */}
          <aside className="w-[30%] bg-white m-2 rounded-xl px-2 py-4">
            <div className="mx-4">
              <div className=" flex justify-between">
                <h3 className="text-xl">Status</h3>
                <h4 className={isSubmitted ? "text-green-400" : "text-red-400"}>
                  {!isSubmitted && <span>Not</span>} Submitted
                </h4>
              </div>
              <div className="">
                <label className="my-2 block opacity-60" htmlFor="link">
                  Link
                </label>
                <input
                  className="border-2 rounded-lg w-full px-2 h-[60px]"
                  type="text"
                  placeholder="paste the link to your work"
                />
              </div>
              {/* attachment start */}

              <div className="mt-4">
                <p className="mb-2 opacity-60">Attachment</p>
                <div
                  className={
                    isFilePicked
                      ? "hidden border-2 border-dashed border-gray-300 rounded-lg w-full px-2 h-[60px] "
                      : "border-2 border-dashed border-gray-300 rounded-lg w-full px-2 h-[60px] "
                  }
                >
                  <label
                    id="customLabel"
                    for="attachment"
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
                    <p className="mt-4 cursor-pointer">
                      <span className="opacity-60">Drag & drop or </span>
                      <span className="text-blue-600 underline-offset-8">
                        browse files
                      </span>
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

              <div className={isSubmitted ? "opacity-30 cursor-not-allowed" : ""}>
                <button
                  className={
                    isFilePicked || isSubmitted
                      ? "bg-blue-500 rounded-lg w-full h-10 text-white my-4 font-bold"
                      : "bg-blue-500 rounded-lg w-full h-10 text-white my-4 font-bold opacity-30 cursor-not-allowed"
                  }
                  onClick={handleSubmission}
                >
                  Submit
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </StudentPageWrapper>
  );
}

export default StudentTask