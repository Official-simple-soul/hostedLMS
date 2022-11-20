import React from 'react';
import {Link} from 'react-router-dom';

const StudentTaskTable = () => {
  return (
    <table className='w-[80vw] h-screen mt-4 mx-1 opacity-70'>
         <thead>
            <tr className='titlebar  mx-4 mt-2 text-blue-600 h-10 py-2 px-2  bg-gray-200 rounded-md hover:drop-shadow-lg'>
              <th scope="col">Stage</th>
              <th scope="col">Task</th>
              <th scope="col">Track</th>
              <th scope="col">Due Date</th>
              <th scope="col">Points</th>
              <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody>
            <tr className='border-lg bg-white rounded-lg text-center hover:drop-shadow-lg cursor-pointer'>
              <td className='pl-2'>1</td>
              <td className=''>Information Architecture</td>
              <td>UI/UX</td>
              <td>8th Oct, 2022. 11:59PM</td>
              <td>100</td>
              <td className=''>Submitted</td>
            </tr>
            <tr className='border-2 rounded-lg bg-white text-center hover:drop-shadow-lg cursor-pointer'>
              <td className='pl-2'>2</td>
              <td>Social Media</td>
              <td>General</td>
              <td>8th Oct, 2022. 11:59PM</td>
              <td>100</td>
              <td className='text-red-500'>Not Submitted</td>
            </tr>
              
            <tr className='border-2 rounded-lg bg-white text-center hover:drop-shadow-lg cursor-pointer'>
              <td className='pl-2'>3</td>
              <td>Redesign KodeCamp Website</td>
              <td>UI/UX</td>
              <td>8th Oct, 2022. 11:59PM</td>
              <td>90/100</td>
              <td className='text-green-500 font-bold'>Graded</td>
            </tr>
            
            <tr className='border-2 rounded-lg bg-white text-center hover:drop-shadow-lg cursor-pointer'>
              <td className='pl-2'>4</td>
              <td>Conduct User Research</td>
              <td>UI/UX</td>
              <td>8th Oct, 2022. 11:59PM</td>
              <td>70/100</td>
              <td className='text-green-500 font-bold'>Graded</td>
            </tr>
            <tr className='border-2 rounded-lg bg-white text-center hover:drop-shadow-lg cursor-pointer'>
              <td className='pl-2'>5</td>
              <td>User Research Plan</td>
              <td>UI/UX</td>
              <td>8th Oct, 2022. 11:59PM</td>
              <td>92/100</td>
              <td className='text-green-500 font-bold'>Graded</td>
            </tr>
            <tr className='border-2 rounded-lg bg-white text-center hover:drop-shadow-lg cursor-pointer'>
              <td className='pl-2'>6</td>
              <td>Usability Testing</td>
              <td>UI/UX</td>
              <td>8th Oct, 2022. 11:59PM</td>
              <td>83/100</td>
              <td className='text-green-500 font-bold'>Graded</td>
            </tr>
            <tr className='border-2 rounded-lg bg-white text-center hover:drop-shadow-lg cursor-pointer'>
              <td className='pl-2'>7</td>
              <td>Customer Journey Mapping </td>
              <td>UI/UX</td>
              <td>8th Oct, 2022. 11:59PM</td>
              <td>78/100</td>
              <td className='text-green-500 font-bold'>Graded</td>
            </tr>
            <tr className='border-2 rounded-lg bg-white text-center hover:drop-shadow-lg cursor-pointer'>
              <td className='pl-2'>8</td>
              <td>Sketch design</td>
              <td>UI/UX</td>
              <td>8th Oct, 2022. 11:59PM</td>
              <td>90/100</td>
              <td className='text-green-500 font-bold'>Graded</td>
            </tr>
            </tbody>
        </table>
  )
}

export default StudentTaskTable