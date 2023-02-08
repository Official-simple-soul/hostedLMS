import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const gender_data = {
  labels: [],
  datasets: [
    {
      label: 'Poll',
      data: [2667, 1779],
      backgroundColor: ['#00BD56', '#F9FD50'],
    },
  ],
};

const options = {};


function Online() {
  return (
    <div className="p-5 w-full h-full bg-white rounded-xl">
      <>
        <Doughnut data={gender_data} options={options}></Doughnut>
        <div className="mt-4">
          <h1 className='mb-4'><p className='h-4 w-4 bg-green-500 mr-1 inline-block rounded-md'></p> Online: 2,917</h1>
          <h1><p className='h-4 w-4 bg-yellow-300 mr-1 inline-block rounded-md'></p> Offline: 1,571</h1>
        </div>
      </>
    </div>
  );
}

export default Online;
