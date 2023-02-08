import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useState } from 'react';
import PerformanceDropDown from './PerformanceDropDown';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
  datasets: [
    {
      label: 'Student Performance',
      data: [917, 1034, 914, 712, 243, 217, 277, 130],
      backgroundColor: [
        '#00BD56',
        '#F9FD50',
        '#0D6EFD',
        '#E4E4E4',
        '#86B6FE',
        '#FDFEC5',
        '#AAE9C7',
        '#303030',
      ],
    },
  ],
};

const options = {};

function TrainerCard() {
  const [selectValue, setSelectValue] = useState('');
  const [drop, setDrop] = useState(false);
  const [firstDrop, setFirstDrop] = useState('Bank-End');
  const [secondDrop, setSecondDrop] = useState('Intermediate');

  return (
    <div className="w-full bg-white rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h1>
          {secondDrop} {firstDrop} Development<br></br>Students Performance
        </h1>
        <div className="relative">
          <input
            type="text"
            value={firstDrop}
            className="w-40 h-10 border border-blue-ribbon-500 text-center"
            onClick={() => setDrop(!drop)}
          />
          {drop && (
            <PerformanceDropDown
              firstDrop={firstDrop}
              setFirstDrop={setFirstDrop}
              secondDrop={secondDrop}
              setSecondDrop={setSecondDrop}
            />
          )}
        </div>
      </div>
      <h1 className="my-2 text-gray-500">
        <span className="text-blue-ribbon-500">{65}</span> average .{' '}
        <span className="text-blue-ribbon-500">{200}</span> students
      </h1>
      <Bar data={data} options={options}></Bar>
    </div>
  );
}

export default TrainerCard;
