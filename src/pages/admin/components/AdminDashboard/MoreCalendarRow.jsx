import React from 'react';

function MoreCalendarRow({ setWeekIdx, e, idx, act, calMonth, handleViewTask, currentDate, currentMonth }) {
  return (
    <div key={idx} className={`${e.type==='current'?'text-gray-500': 'text-gray-300'} ${e.date===currentDate&&currentMonth===calMonth&&e.type==='current'?'bg-purple-300': ''} text-center h-32 pt-3 border`}>
      <h1 className="mb-6">{e.date}</h1>
      <div
        className={`${
          e.date === act(e.date)?.num &&
          act(e.date).month === calMonth &&
          e.type === 'current' &&
          act(e.date)?.type === 'task'
            ? 'block bg-blue-400'
            : e.date === act(e.date)?.num &&
              act(e.date).month === calMonth &&
              e.type === 'current' &&
              act(e.date)?.type === 'class'
            ? 'block bg-green-400'
            : e.date === act(e.date)?.num &&
              e.type === 'current' &&
              act(e.date).month === calMonth &&
              act(e.date)?.type === 'meeting'
            ? 'block bg-yellow-400'
            : 'hidden'
        } w-full rounded-md py-1 cursor-pointer`}
        onClick={()=>{
          handleViewTask(e)
          setWeekIdx(idx)
        }}
      >
        <h1 className="text-[12px]">{act(e.date)?.task}</h1>
      </div>
      <h1 className={`${e.date===currentDate&&currentMonth===calMonth&&e.type==='current'?'block': 'hidden'} font-bold`}>Today</h1>
    </div>
  );
}

export default MoreCalendarRow;
