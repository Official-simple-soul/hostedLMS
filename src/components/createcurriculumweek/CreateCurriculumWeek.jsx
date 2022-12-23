import React from 'react'
import "./createcurriculumweek.css"
import { useState } from 'react'

const CreateCurriculumWeek = () => {
    const [user,setUser] = useState({
        weekTitle:"",
        weekNumber:"",
        lessonTitle:"",
      })
    
      const handleChange=(e)=>{
        setUser(prevUser =>{
        return{
          ...prevUser,
          [e.target.name]:[e.target.value]
        }
        })
      }
  return (
    <div className='hero-admin w-full'>
      <form >
        {/* <section className='first-section md:flex gap-4  pb-10'>
          <div className='w-full'>
            <label>Week Title</label><br/>
            <input type="text" name="weekTitle" value={user.weekTitle} onChange={handleChange} placeholder="e.g Intro to UI/UX" className='input-admin w-full border-2 indent-2 rounded-lg p-2'/>
          </div>

          <div className='md:w-2/4'>
            <label>Track</label><br/>
            <select className='w-full select-admin border-2 indent-2 rounded-lg p-2'>
              <option>UI/UX</option>
              <option>Frontend Development</option>
              <option>Backend Development</option>
              <option>Product Management</option>
              <option>Cloud Computing</option>
              <option>Cyber Security</option>
            </select>
          </div>
        </section>
        
        <section className='second-section md:flex gap-4'>
          <div className='w-full'>
            <label>Week Number</label><br/>
            <input type="text" name="weekNumber" value={user.weekNumber} onChange={handleChange} placeholder="e.g Week 1" className='input-admin w-full border-2 indent-2 rounded-lg p-2'/>
          </div>

          <div className='md:w-2/4'>
            <label>Level</label><br/>
            <select className='select-admin w-full border-2 indent-2 rounded-lg p-2'>
              <option>Beginner</option>
              <option>Entry Level</option>
              <option>Mid Level/Intermediate</option>
              <option>Senior Level/Expert</option>
            </select>
          </div>
        </section> */}

        <p className="text-sm text-blue-ribbon-500">Curriculum <span className='text-grey-500'>/ New Curriculum Week</span></p>

        <div className="flex items-center justify-between mt-2">
          <h2 className="text-2xl text-black">New Curriculum Week</h2>
          <div className="flex items-center gap-2">
            <button className='border border-[#585858] bg-white px-4 py-2 rounded-lg text-base'>Cancel</button>
            <button className='bg-blue-ribbon-500 px-4 py-2 rounded-lg text-white text-base'>Create Task</button>
          </div>
        </div>

        <section className='rounded-xl p-6 bg-white mt-7'>
          <div className="grid grid-cols-5 gap-8 mt-4 items-center">
            <div className="col-span-3 flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label>Week Title</label>
                <input type="text" name="weekNumber" value={user.weekNumber} onChange={handleChange} placeholder="e.g. Intro to UI/UX" className='w-full border rounded-lg px-3 py-4'/>
              </div>

              <div className="flex flex-col gap-1">
                <label>Week Number</label>
                <input type="text" name="weekTitle" value={user.weekTitle} onChange={handleChange} placeholder="e.g. Week 1" className='w-full border rounded-lg px-3 py-4'/>
              </div>
            </div>

            <div className="col-span-2 flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label>Track</label>
                <select className='w-full border rounded-lg px-3 py-4'>
                  <option>UI/UX</option>
                  <option>Frontend Development</option>
                  <option>Backend Development</option>
                  <option>Product Management</option>
                  <option>Cloud Computing</option>
                  <option>Cyber Security</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label>Level</label>
                <select className='w-full border rounded-lg px-3 py-4'>
                  <option>Beginner</option>
                  <option>Entry Level</option>
                  <option>Mid Level/Intermediate</option>
                  <option>Senior Level/Expert</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <section className='grid grid-cols-5 gap-4 mt-6'>
          <form className='rounded-xl p-6 bg-white col-span-3'>
            <h2 className='text-xl mb-3 text-black'>Add Lessons</h2> 
            <div className="flex flex-col gap-1">
                <label>Lesson Title</label>
                <input type="text" placeholder="Give your lesson a name"  value={user.lessonTitle} name="lessonTitle" onChange={handleChange} className='w-full border rounded-lg px-3 py-4'/>
            </div>
            <button type='submit' className='mt-3 btn-admin px-4 py-2 rounded-lg'>Add Lesson</button>
          </form>
  
          <div className='rounded-xl p-6 bg-white col-span-2'>
            <h2 className='text-xl mb-6 text-black'>Added Lessons</h2>
            <p>Nil</p>
          </div>
        </section>

      </form>


    </div>
  )
}

export default CreateCurriculumWeek
