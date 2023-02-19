import React from 'react';

function CalenderRow({ setWeekIdx, week, handleViewTask, e, act, idx, mv }) {
  return (
    <div
      onClick={() => {
        handleViewTask(e)
        setWeekIdx(idx)
      }}
      className={`text-center ${
        e.date === act(e.date)?.num &&
        act(e.date)?.month === mv &&
        act(e.date)?.type === 'class'
          ? 'text-white bg-green-500'
          : e.date === act(e.date)?.num &&
            act(e.date)?.month === mv &&
            act(e.date)?.type === 'task'
          ? 'bg-blue-ribbon-500 text-white'
          : e.date === act(e.date)?.num &&
            act(e.date)?.month === mv &&
            act(e.date)?.type === 'meeting'
          ? 'text-white bg-yellow-400'
          : 'text-blue-ribbon-500 bg-white'
      } shadow-lg border py-4 cursor-pointer rounded-md border-blue-ribbon-100`}
    >
      <p className="text-[10%]">{week[idx]}</p>
      <p className="mt-2 text-[12%]">{e.date}</p>
    </div>
  );
}

export default CalenderRow;
