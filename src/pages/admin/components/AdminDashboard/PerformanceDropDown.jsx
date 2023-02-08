import React from 'react'
import { useState } from 'react'
import {FaAngleDown} from 'react-icons/fa'

function PerformanceDropDown({firstDrop, setFirstDrop, secondDrop, setSecondDrop}) {
const [backend, setBackend] = useState(false)
const [frontend, setFrontend] = useState(false)
const [uiux, setUiUx] = useState(false)





  return (
    <div>
      <ul className='left-0 right-0 absolute border-t-0 border border-blue-ribbon-500 bg-white z-50'>
        <li className='px-2 py-1 cursor-pointer hover:bg-blue-ribbon-200' onClick={(e)=>setFirstDrop(e.currentTarget.innerHTML)}>All</li>
        <li className='px-2 py-1 cursor-pointer hover:bg-blue-ribbon-200' onClick={(e)=>{
            setBackend(!backend)
            setFirstDrop(e.currentTarget.innerText)
        }}>Back-End <FaAngleDown className='inline float-right'/>
            {
                backend &&
                <ul className='py-1 border-t border-b border-blue-ribbon-500 space-y-1'>
                <li className='px-2 py-1 cursor-pointer hover:bg-white' onClick={(e)=>setSecondDrop(e.currentTarget.innerText)}>Both</li>
                <li className='px-2 py-1 cursor-pointer hover:bg-white' onClick={(e)=>setSecondDrop(e.currentTarget.innerText)}>Beginner</li>
                <li className='px-2 py-1 cursor-pointer hover:bg-white' onClick={(e)=>setSecondDrop(e.currentTarget.innerText)}>Intermediate</li>
            </ul>
            }
        </li>
        <li className='px-2 py-1 cursor-pointer hover:bg-blue-ribbon-200' onClick={(e)=>setFirstDrop(e.currentTarget.innerHTML)}>CAD</li>
        <li className='px-2 py-1 cursor-pointer hover:bg-blue-ribbon-200' onClick={(e)=>setFirstDrop(e.currentTarget.innerHTML)}>Digital Marketing</li>
        <li className='px-2 py-1 cursor-pointer hover:bg-blue-ribbon-200' onClick={(e)=>{
            setFrontend(!frontend)
            setFirstDrop(e.currentTarget.innerText)
        }}>Front-End <FaAngleDown className='inline float-right'/>
        {
                frontend &&
                <ul className='py-1 border-t border-b border-blue-ribbon-200 space-y-1'>
                <li className='px-2 py-1 cursor-pointer hover:bg-white' onClick={(e)=>setSecondDrop(e.currentTarget.innerText)}>Both</li>
                <li className='px-2 py-1 cursor-pointer hover:bg-white' onClick={(e)=>setSecondDrop(e.currentTarget.innerText)}>Beginner</li>
                <li className='px-2 py-1 cursor-pointer hover:bg-white' onClick={(e)=>setSecondDrop(e.currentTarget.innerText)}>Intermediate</li>
            </ul>
            }
        </li>
        <li className='px-2 py-1 cursor-pointer hover:bg-blue-ribbon-200' onClick={(e)=>setFirstDrop(e.currentTarget.innerHTML)}>Product Mgt</li>
        <li className='px-2 py-1 cursor-pointer hover:bg-blue-ribbon-200 hover:text-black' onClick={(e)=>{
            setUiUx(!uiux)
            setFirstDrop(e.currentTarget.innerText)
        }}>UI/UX Design <FaAngleDown className='inline float-right'/>
        {
                uiux &&
                <ul className='py-1 border-t border-blue-ribbon-500 space-y-1'>
                <li className='py-1 px-2 cursor-pointer hover:bg-white' onClick={(e)=>setSecondDrop(e.currentTarget.innerText)}>Both</li>
                <li className=' py-1 px-2 cursor-pointer hover:bg-white' onClick={(e)=>setSecondDrop(e.currentTarget.innerText)}>Beginner</li>
                <li className=' py-1 px-2 cursor-pointer hover:bg-white' onClick={(e)=>setSecondDrop(e.currentTarget.innerText)}>Intermediate</li>
            </ul>
            }
        </li>
      </ul>
    </div>
  )
}

export default PerformanceDropDown
