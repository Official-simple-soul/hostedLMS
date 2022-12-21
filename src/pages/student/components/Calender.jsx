import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export default function Calender() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className=''>
        <Calendar onChange={onChange} value={value} allowPartialRange={true}/>
      </div>
    </div>
  );
}
