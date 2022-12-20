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
    <div className='hero-admin p-5 md:p-8 w-full'>Admin
      <form className='m-auto md:w-4/5 rounded-xl px-4 md:px-8 py-6 bg-white'>
        <section className='first-section md:flex gap-4  pb-10'>
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
        </section>
      </form>

      <section className='lesson md:flex gap-4 m-auto md:w-4/5 '>
        <form className='md:w-11/12 rounded-xl px-4 md:px-8 py-6 mt-6 bg-white'>
          <h2 className='font-semibold text-xl mb-3'>Add Lessons</h2>
          <label>Lesson Title</label><br/>
          <input type="text" placeholder="Give your lesson a name"  value={user.lessonTitle} name="lessonTitle" onChange={handleChange} className="mt-2 input-admin w-full border-2 indent-2 rounded-lg p-2"/>
          <button type='submit' className='mt-3 btn-admin px-4 py-2 font-semibold rounded-lg'>Add Lesson</button>
        </form>
        <div className='md:w-2/5 rounded-xl px-8 py-6 mt-6 bg-white'>
          <h2 className='font-semibold text-xl mb-6'>Added Lessons</h2>
          <p>Nil</p>
        </div>
      </section>
    </div>
  )
}

export default CreateCurriculumWeek
