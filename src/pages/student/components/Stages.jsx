import React, { useEffect } from 'react';
import Stylest1 from '../components/Stage1Trainer.module.css';
import more from '../../../assets//icons/3dots.svg';
import profile_img from '../../../assets/images/stage1_profile_img.svg';
import { useState } from 'react';
import LessonLogo from '../../../assets/images/Rectangle.png';
import LessonLogo1 from '../../../assets/images/Rectangle1.png';
import LessonLogo2 from '../../../assets/images/Rectangle2.png';
import LessonLogo3 from '../../../assets/images/Rectangle3.png';
import LessonLogo4 from '../../../assets/images/Rectangle4.png';
import LessonLogo5 from '../../../assets/images/Rectangle5.png';
import { Link } from 'react-router-dom';

const Stages = ({lengths, bookmarked, setBookmarked}) => {
  const [lessonData, setLessonData] = useState([]);
 

  const statusText = ['LIVE IN 2 HOURS', 'RECORDING NOT ADDED', 'RECORDING ADDED'];

  let lessonData1 = [
    {
      title: 'Design Principle',
      status: statusText[0],
      img: LessonLogo,
      date: '22-09-22',
      id: 1,
      about: 'Design Principles are a set of considerations that form the basis of any good product. Design Principles help teams with decision making. A few simple principles or constructive questions will guide your team towards making appropriate decisions'
    },
    {
      title: 'Intro to UI/UX',
      status: statusText[1],
      img: LessonLogo1,
      date: '25-09-22',
      id: 2,
      about: 'Introduction to user interface and user experience in design and its fundamentals'
    },
    {
      title: 'Front-End Basics',
      status: statusText[2],
      img: LessonLogo2,
      date: '12-09-22',
      id: 3,
      about: 'Using Html, Css and javascript. How and when to add sythax and elements to a page'
    },
    {
      title: 'Intro to DevOps',
      status: statusText[2],
      img: LessonLogo3,
      date: '02-09-22',
      id: 4,
      about: 'and introduction to development operations, working with team and using code writing best practices'
    },
    {
      title: 'Master of Css',
      status: statusText[2],
      img: LessonLogo4,
      date: '04-09-22',
      id: 5,
      about: 'The basic application of css is never enough. Thus, the introduction of master of css. This should take you through that aspect'
    },
    {
      title: 'Javascript Loop',
      status: statusText[2],
      img: LessonLogo5,
      date: '11-09-22',
      id: 6,
      about: 'one of the common function used in javascript is the loop, while loop, for loop, for each, map, reduce, for of, for in, filter, and many more'
    },
  ];
  lengths = lessonData1.length
  useEffect(()=>{
    setLessonData(lessonData1)
  },[])

  const handleBookmark = ({title, id, img, status, date})=> {
    setBookmarked([...bookmarked, {title: title, id: id, img: img, status: status, date: date}])
  }

  useEffect(()=> {
    const pickBookmark = document.querySelectorAll('.fa-bookmark')
    pickBookmark.forEach(item=> {
      item.addEventListener('click', ()=> {
          item.classList.toggle('bg-[green]')
      })
  })
  })
  
  

  return (
    <>
      <div className="">
        <div className="bg-white  p-5 rounded-xl">
          <div className="w-full border mb-5"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
            lessonData.map((item) => {
                let {id, title, status, img, date} = item
              return (
                  <div
                    className="group/item border rounded-xl relative"
                    key={id}
                  >
                    <Link to={`/instructor/abouttrainer/${id}`}>
                        <div className="invisible group-hover/item:visible enter flex items-center space-x-4 absolute top-14 left-28 text-white font-light">
                        <i class="fa-solid fa-right-to-bracket"></i>
                        <p className="">Enter</p>
                        </div>
                        <img src={img} alt="" className="rounded-t-xl" />
                    </Link>
                    <div className="px-4 py-6 relative">
                      <div className="flex flex-row justify-between items-center">
                        <h4 className={`${Stylest1.stage1_heading}`}>
                          {title}
                        </h4>
                        <i class={`fa-regular fa-bookmark text-[#00BD56] cursor-pointer`} onClick={()=>handleBookmark(item)}></i>
                      </div>
                      <p
                        className={`${
                          status === statusText[0]
                            ? 'text-blue-ribbon-500'
                            : status === statusText[1]
                            ? 'text-[red]'
                            : 'text-[green]'
                        } py-3 text-[12px]`}
                      >
                        {status}
                      </p>

                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center">
                          <img src={profile_img} alt="ProfileImage" />
                          <p className={`${Stylest1.profile_text} pl-3`}>You</p>
                        </div>
                        <div className={`${Stylest1.profile_text}`}>
                          {date}
                        </div>
                      </div>
                    </div>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stages;
