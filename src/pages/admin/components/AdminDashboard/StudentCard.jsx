import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Data from './Data'
import { useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const stage_data = {
    labels: [],
    datasets: [{
        label: 'Poll',
        data: [917,1034, 914, 712, 243, 217, 277, 130],
        backgroundColor: ['#00BD56', '#F9FD50', '#0D6EFD', '#E4E4E4', '#86B6FE', '#FDFEC5', '#AAE9C7', '#303030']
    }]
}
const track_data = {
    labels: [],
    datasets: [{
        label: 'Poll',
        data: [1778,1289, 364, 281, 534, 200],
        backgroundColor: ['#00BD56', '#F9FD50', '#0D6EFD', '#E4E4E4', '#86B6FE', '#FDFEC5']
    }]
}
const level_data = {
    labels: [],
    datasets: [{
        label: 'Poll',
        data: [2890,1556],
        backgroundColor: ['#00BD56', '#F9FD50']
    }]
}
const gender_data = {
    labels: [],
    datasets: [{
        label: 'Poll',
        data: [2667,1779],
        backgroundColor: ['#00BD56', '#F9FD50']
    }]
}

const options = {};

function StudentCard() {
const [selectValue, setSelectValue] = useState('')

  return (
    <div className="h-[100%] w-full bg-white rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h1>Students</h1>
        <select name="" id="" value={selectValue} onChange={(e)=> setSelectValue(e.target.value)} className='px-3 py-1 rounded-md border border-blue-ribbon-300'>
          <option value="stage">Stage</option>
          <option value="track">Track</option>
          <option value="level">Level</option>
          <option value="gender">Gender</option>
        </select>
      </div>
      <h1 className='my-2 text-gray-500'>{Data.map(e=>e.total).reduce((a,b)=>a+b)} students</h1>
      {
        selectValue==='track'?
        <>
        <Doughnut data={track_data} options={options}></Doughnut>
      <div className="grid grid-cols-2 gap-3 mt-4">
      {
        Data.slice(0,6).map(e=> <h1 className='text-[12px]'>Stage {e.stage} - {e.total}</h1>)
      }
      </div>
        </>
        :
        selectValue==='level'?
        <>
        <Doughnut data={level_data} options={options}></Doughnut>
      <div className="grid grid-cols-2 gap-3 mt-4">
      {
        Data.slice(0,2).map(e=> <h1 className='text-[12px]'>Stage {e.stage} - {e.total}</h1>)
      }
      </div>
        </>
        :
        selectValue==='gender'?
        <>
        <Doughnut data={gender_data} options={options}></Doughnut>
      <div className="grid grid-cols-2 gap-3 mt-4">
      {
        Data.slice(0,2).map(e=> <h1 className='text-[12px]'>Stage {e.stage} - {e.total}</h1>)
      }
      </div>
        </>
        :
        <>
        <Doughnut data={stage_data} options={options}></Doughnut>
      <div className="grid grid-cols-2 gap-3 mt-4">
      {
        Data.map(e=> <h1 className='text-[12px]'>Stage {e.stage} - {e.total}</h1>)
      }
      </div>
        </>
      }
      
      
    </div>
  );
}

export default StudentCard;
