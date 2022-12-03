import React, { useState } from 'react';
import Style from '../components/AboutTrainer.module.css';
import edit_icon from '../../../assets/icons/edit-icon.svg';
import play_icon from '../../../assets/icons/play-icon.svg';
import { Link, useParams } from 'react-router-dom';
import LessonLogo from '../../../assets/images/Rectangle.png';
import LessonLogo1 from '../../../assets/images/Rectangle1.png';
import LessonLogo2 from '../../../assets/images/Rectangle2.png';
import LessonLogo3 from '../../../assets/images/Rectangle3.png';
import LessonLogo4 from '../../../assets/images/Rectangle4.png';
import LessonLogo5 from '../../../assets/images/Rectangle5.png';

const AboutTrainer = () => {
  const { id } = useParams();
  const [aboutRes, setAboutRes] = useState(true);
  const [playLesson, setPlayLesson] = useState(true);
  const handleAbout = () => {
    setAboutRes(true);
  };

  const handleRes = () => {
    setAboutRes(false);
  };

  const handlePlayLesson = () => {
    setPlayLesson(false);
  };

  const status = ['LIVE IN 2 HOURS', 'RECORDING NOT ADDED', 'RECORDING ADDED'];

  const lessonData = [
    {
      title: 'Design Principle',
      status: status[0],
      img: LessonLogo,
      date: '22-09-22',
      id: '1',
      about:
        'Design Principles are a set of considerations that form the basis of any good product. Design Principles help teams with decision making. A few simple principles or constructive questions will guide your team towards making appropriate decisions',
      link: 'meet.google.now',
      resources: [
        'DP 101',
        'Days of the Design',
        'Ux and considerations',
        'Basic Designing',
        'Principles of Design',
      ],
    },
    {
      title: 'Intro to UI/UX',
      status: status[1],
      img: LessonLogo1,
      date: '25-09-22',
      id: '2',
      about:
        'Introduction to user interface and user experience in design and its fundamentals',
      link: 'meet.google.now',
      resources: [
        'UI/UX part 1',
        'UI/UX part 2',
        'Using Figma 1',
        'Using Figma 2',
      ],
    },
    {
      title: 'Front-End Basics',
      status: status[2],
      img: LessonLogo2,
      date: '12-09-22',
      id: '3',
      about:
        'Using Html, Css and javascript. How and when to add sythax and elements to a page',
      link: 'meet.google.now',
      resources: ['Front End', 'Who is a developer'],
    },
    {
      title: 'Intro to DevOps',
      status: status[2],
      img: LessonLogo3,
      date: '02-09-22',
      id: '4',
      about:
        'and introduction to development operations, working with team and using code writing best practices',
      link: 'meet.google.now',
      resources: ['DevOps to Master', 'Zero to Hero'],
    },
    {
      title: 'Master of Css',
      status: status[2],
      img: LessonLogo4,
      date: '04-09-22',
      id: '5',
      about:
        'The basic application of css is never enough. Thus, the introduction of master of css. This should take you through that aspect',
      link: 'meet.google.now',
      resources: [
        'Css and Variables',
        'Getting started with Css',
        'Css with Simple-Soul',
      ],
    },
    {
      title: 'Javascript Loop',
      status: status[2],
      img: LessonLogo5,
      date: '11-09-22',
      id: '6',
      about:
        'one of the common function used in javascript is the loop, while loop, for loop, for each, map, reduce, for of, for in, filter, and many more',
      link: 'meet.google.now',
      resources: [
        'Eloquent Javascript',
        'Javascript 101',
        'One Time Javascript developer',
      ],
    },
  ];

  const filteredData = lessonData.filter((item) => item.id === id);

  return (
    <div className="">
      <div className="pb-4">
        <h6 className={`${Style.classroom}`}>
          {' '}
          Classroom{' '}
          <span className={`${Style.classroomspan}`}>
            / {filteredData[0].title}
          </span>
        </h6>
      </div>

      <div className="flex flex-row justify-between">
        <div className={`${Style.desinprinciples}`}>
          <h5>{filteredData[0].title}</h5>
        </div>
        <div className="">
          <Link to={`/instructor/newlesson/${id}`}>
            <div
              className={`${Style.editlessoncontainer} ml-7 flex flex-row relative items-center`}
            >
              <img
                src={edit_icon}
                alt="Edit"
                className={`${Style.editimg} absolute mx-5`}
              />
              <p className={`${Style.editlesson} py-2 pr-4 pl-12`}>
                {' '}
                Edit Lesson
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="pt-4">
        {playLesson ? (
          <div className="relative" onClick={handlePlayLesson}>
            <img
              src={filteredData[0].img}
              alt=""
              width="100%"
              className="rounded-lg"
            />
            <img
              src={play_icon}
              alt="Play_image"
              className="mx-auto absolute z-50 top-[40%] left-[48%]"
            />
          </div>
        ) : (
          <div className="livelink">
            <div className="pt-5">
              <p className={`${Style.classtarts}`}>
                Class starts in{' '}
                <span className={`${Style.classtartspan}`}> 00:00:29 </span>
              </p>
            </div>
            <div className="pt-5">
              <div
                className={`${Style.joinliveclasscontainer} flex flex-row relative items-center`}
              >
                <img
                  src={play_icon}
                  alt="Edit"
                  className={`${Style.joinliveclassimg} absolute mx-5`}
                />
                <Link to={filteredData[0].link} target="_blank">
                  <p className={`${Style.joinliveclass} py-2 pr-4 pl-12`}>
                    {' '}
                    Join Live Class
                  </p>{' '}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={`${Style.aboutcontainer} mt-5 p-6`}>
        <div className="flex flex-row space-x-4">
          <h5
            className={`${aboutRes ? 'text-blue-ribbon-500' : 'text-[grey]'}`}
            onClick={handleAbout}
          >
            About
          </h5>
          <h5
            className={`${!aboutRes ? 'text-blue-ribbon-500' : 'text-[grey]'}`}
            onClick={handleRes}
          >
            Resources
          </h5>
        </div>
        <div className="pt-5">
          {aboutRes ? (
            <p className={`${Style.abouttext}`}>{filteredData[0].about}</p>
          ) : (
            <div className="grid grid-cols-3 gap-5">
              {filteredData[0].resources.map((item) => {
                return (
                  <div className="border rounded-xl py-3 px-2 my-5">
                    <p className={`${Style.resourcelink}`}>{item}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutTrainer;
