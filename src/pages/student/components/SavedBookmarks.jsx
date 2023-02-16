import React from 'react';
import { Link } from 'react-router-dom';
import profile_img from '../../../assets/images/stage1_profile_img.svg';
import { useGlobalContext } from '../../../context/context';

export default function SavedBookmarks() {
  const { bookmarked } = useGlobalContext();
  const { studentSearchInput } = useGlobalContext();
  const searchBookmarks = bookmarked.filter((item) =>
    item.title.toLowerCase().includes(studentSearchInput.toLowerCase())
  );

  return (
    <div>
      <div className="">
        <div className="top-row px-6 mt-4">
          <div className="lesson-top">
            <p className="text-blue-ribbon-500 mb-2 text-sm">
              Classroom <span className="text-[grey]">/ Saved Lessons</span>
            </p>
            <h1 className='mb-4'>Saved Lesson</h1>
          </div>
          {searchBookmarks.length > 0 && (
            <p className="my-4">{searchBookmarks.length} search</p>
          )}
        </div>
        <div className="bg-white  p-5 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {searchBookmarks.length > 0
              ? searchBookmarks.map((item) => {
                  let { id, title, status, img, date } = item;
                  return (
                    <div
                      className="group/item border rounded-xl relative"
                      key={id}
                    >
                      <Link to={`/student/aboutstudent/${id}`}>
                        <div className="invisible group-hover/item:visible enter flex items-center space-x-4 absolute top-14 left-28 text-white font-light">
                          <i class="fa-solid fa-right-to-bracket"></i>
                          <p className="">Enter</p>
                        </div>
                        <img src={img} alt="" className="rounded-t-xl" />
                      </Link>
                      <div className="px-4 py-6 relative">
                        <div className="flex flex-row justify-between items-center">
                          <h4 className="">{title}</h4>
                          <i
                            class={`fa-regular fa-bookmark text-[#00BD56] bg-[#00BD56]`}
                          ></i>
                        </div>
                        <p className={` py-3 text-[12px]`}>{status}</p>

                        <div className="flex flex-row justify-between items-center">
                          <div className="flex flex-row items-center">
                            <img src={profile_img} alt="ProfileImage" />
                            <p className={` pl-3`}>You</p>
                          </div>
                          <div className={``}>{date}</div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : bookmarked.length>0?
                bookmarked.map((item) => {
                  let { id, title, status, img, date } = item;
                  return (
                    <div
                      className="group/item border rounded-xl relative"
                      key={id}
                    >
                      <Link to={`/instructor/aboutstudent/${id}`}>
                        <div className="invisible group-hover/item:visible enter flex items-center space-x-4 absolute top-14 left-28 text-white font-light">
                          <i class="fa-solid fa-right-to-bracket"></i>
                          <p className="">Enter</p>
                        </div>
                        <img src={img} alt="" className="rounded-t-xl" />
                      </Link>
                      <div className="px-4 py-6 relative">
                        <div className="flex flex-row justify-between items-center">
                          <h4 className="">{title}</h4>
                          <i
                            class={`fa-regular fa-bookmark text-[#00BD56] bg-[#00BD56]`}
                          ></i>
                        </div>
                        <p className={` py-3 text-[12px]`}>{status}</p>

                        <div className="flex flex-row justify-between items-center">
                          <div className="flex flex-row items-center">
                            <img src={profile_img} alt="ProfileImage" />
                            <p className={` pl-3`}>You</p>
                          </div>
                          <div className={``}>{date}</div>
                        </div>
                      </div>
                    </div>
                  );
                })
                :
                <div className="center">
                  <h1>No saved bookmark</h1>
                </div>
              }
          </div>
        </div>
      </div>
    </div>
  );
}
