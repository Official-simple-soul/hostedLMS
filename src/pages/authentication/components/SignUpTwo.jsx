import React from 'react';

const SignUpTwo = ({formData,handleInput}) => {
  return (
    <div className='signup2 flex flex-col gap-2'>
      <div className='signup__form-div'>
        <label className='signup__form-label block opacity-70 m-2' htmlFor="">Age</label>
        <input value={formData.age} onChange={handleInput} name="age" className='signup__form-input border-2 w-[500px] h-[50px] p-2 border-gray-300' type="text" placeholder='Type your age'/>
      </div>

      <div className='signup__form-div'>
        <label className='signup__form-label block opacity-70 m-2' htmlFor="">Gender</label>
        <select value={formData.gender} onChange={handleInput} className='signup__form-input select 
        w-[500px] h-[50px] rounded-lg p-2 border-2 border-gray-300 bg-white opacity-60' 
        name="gender" id="gender-select">
            <option selected>Select your gender</option>
            <option value={"male"} name="male">Male</option>
            <option value={"female"} name="female">Female</option>
        </select>
      </div>

      <div className='signup__form-div'>
        <label className='signup__form-label block opacity-70 m-2' htmlFor="">Track</label>
        <select value={formData.track} onChange={handleInput} className='signup__form-input select
        w-[500px] h-[50px] rounded-lg p-2 border-2 border-gray-300 bg-white opacity-60' name="track" id="track-select">
            <option selected>Select track</option>
            <option value={"frontend"} name="frontend">Frontend</option>
            <option value={"backend"} name="backend">Backend</option>
            <option value={"mobile"} name="mobile">Mobile Development</option>
        </select>
      </div>

      <div className='signup__form-div'>
        <label className='signup__form-label block opacity-70 m-2' htmlFor="">Experience level</label>
        <select value={formData.experience} onChange={handleInput} className='signup__form-input select w-[500px] h-[50px] rounded-lg p-2 border-2 border-gray-300 bg-white opacity-60' name="experience" id="experience-select">
            <option selected>Select your level of experience</option>
            <option value={"newbie"} name="newbie">Newbie</option>
            <option value={"beginner"} name="beginner">Beginner</option>
            <option value={"intermediate"} name="intermediate">Intermediate</option>
            <option value={"advanced"} name="advanced">Advanced</option>
            <option value={"senior"} name="senior">Senior</option>
        </select>
      </div>

      <div className='signup__form-div'>
        <label className='signup__form-label block opacity-70 m-2' htmlFor="">Employment status</label>
        <select value={formData.employment} onChange={handleInput} className='signup__form-input select w-[500px] h-[50px] rounded-lg p-2 border-2 border-gray-300 bg-white opacity-60' name="employment" id="employment-select">
          <option selected>Select employment status</option>
          <option value={"student"} name="student">Student</option>
          <option value={"unemployed"} name="unemployed">Unemployed</option>
          <option value={"selfemployed"} name="selfemployed">Self employed</option>
          <option value={"fulltime"} name="fulltime">Full Time </option>
          <option value={"parttime"} name="parttime">Part Time</option>
        </select>
      </div>

      <div className='signup__form-div'>
        <label className='signup__form-label block opacity-70 m-2' htmlFor="">Educational qualification</label>
        <select name='education' value={formData.education} onChange={handleInput} className='signup__form-input select w-[500px] h-[50px] rounded-lg p-2 border-2 border-gray-300 bg-white opacity-60'  id="education-select">
            <option selected>Select your highest level of education</option>
            <option value={"primary"} name="primary">Primary</option>
            <option value={"secondary"} name="secondary">Secondary</option>
            <option value={"undergraduate"} name="undergraduate">Undergraduate</option>
            <option value={"graduate"} name="graduate">Graduate</option>
            <option value={"postgrad"} name="postgrad">Post Graduate</option>
        </select>
      </div>
      
      <div className='signup__form-div'>
        <label className='signup__form-label block opacity-70 m-2' htmlFor="">How did you hear about us?</label>
        <select name='how' value={formData.how} onChange={handleInput} className='signup__form-input select w-[500px] h-[50px] rounded-lg p-2 border-2 border-gray-300 bg-white opacity-60'  id="how-select">
            <option selected>Select one</option>
            <option value={'twitter'} name='twitter'>Twitter</option>
            <option value={"facebook"} name='facebook'>Facebook</option>
            <option value={"insta"} name='insta'>Instagram</option>
            <option value={'email'} name='email'>Email</option>
        </select>
      </div>
    </div>
  )
}

export default SignUpTwo