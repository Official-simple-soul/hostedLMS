import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaCertificate } from 'react-icons/fa';
import fileDownload from 'js-file-download';

function TrainerProfile() {
  const { id } = useParams();
  const [trainer, setTrainer] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get('http://localhost:8000/students');
      setIsLoading(true);
      setTrainer(data.data.find((e) => e.id === id));
    };
    fetchData();

    setTimeout(() => setIsLoading(false), 2000);
  }, [id]);

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <>
      <div>
        <div className="top">
          <span className="text-blue-ribbon-500 mr-2">Trainers/</span>
          <span>
            {trainer.name &&
              trainer.name.slice(0, 1).toUpperCase() + trainer.name.slice(1)}
          </span>
        </div>
        <h1 className="text-xl mt-3 mb-6">
          {trainer.name &&
            trainer.name.slice(0, 1).toUpperCase() + trainer.name.slice(1)}
        </h1>
      </div>
      <div className="p-5 bg-white rounded-md">
        <div className="flex space-x-8 items-center">
          <img
            src={trainer.img && trainer.img}
            alt={trainer.name && trainer.name}
            width="150px"
          />
          <div className="content space-y-4">
            <h1 className="text-xl">
              {trainer.name &&
                trainer.name.slice(0, 1).toUpperCase() + trainer.name.slice(1)}
            </h1>
            <p className="text-grey-500">
              Track:{' '}
              <span className="text-[grey]">
                {trainer.track && trainer.track}
              </span>
            </p>
            <p className="text-grey-500">
              Level:{' '}
              <span className="text-[grey]">
                {trainer.level && trainer.level}
              </span>
            </p>
          </div>
        </div>
        <h1 className="underline mt-8">Trainer Bio</h1>
        <div className="overflow-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 mt-8  w-[400px] md:w-full">
            <div className="left">
              <ul className="space-y-4">
                <li className="border-b pb-1">Username</li>
                <li className="border-b pb-1">Email Address</li>
                <li className="border-b pb-1">Date of Birth</li>
                <li className="border-b pb-1">Gender</li>
                <li className="border-b pb-1">Phone Number</li>
                <li className="border-b pb-1">Employment Status</li>
                <li className="border-b pb-1">Employment Qualification</li>
              </ul>
            </div>
            <div className="right md:col-span-3">
              <ul className="space-y-4">
                <li className="border-b pb-1 pl-5">
                  {trainer.name && trainer.name.split(' ')[1]}
                </li>
                <li className="border-b pb-1 pl-5 overflow-hidden">
                  {trainer.name && trainer.name}
                </li>
                <li className="border-b pb-1 pl-5">
                  {trainer.id && trainer.id}
                </li>
                <li className="border-b pb-1 pl-5">
                  {trainer.gender &&
                    trainer.gender.slice(0, 1).toUpperCase() +
                      trainer.gender.slice(1)}
                </li>
                <li className="border-b pb-1 pl-5">08057483726</li>
                <li className="border-b pb-1 pl-5">
                  {trainer.level && trainer.level}
                </li>
                <li className="border-b pb-1 pl-5">
                  {trainer.track && trainer.track}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button className="my-6 px-6 py-2 text-white bg-blue-ribbon-500 rounded-md">
          <FaCertificate className="inline mr-3 text-2xl" />
          <span>View CV</span>
        </button>
      </div>
    </>
  );
}

export default TrainerProfile;
