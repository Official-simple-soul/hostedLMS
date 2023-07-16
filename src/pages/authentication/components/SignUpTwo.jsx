import React from 'react';

const SignUpTwo = ({formData,handleInput}) => {
  return (
    <div className="signup2 flex flex-col gap-4">
      <div className="signup__form-div">
        <label className="signup__form-label block opacity-70 m-2" htmlFor="">
          Age
        </label>
        <input
          name="age"
          value={formData.age}
          onChange={handleInput}
          className="signup__form-input border w-full h-[50px] p-2 border-gray-300"
          type="text"
          placeholder="Type your age"
        />
      </div>

      <div className="signup__form-div">
        <label className="signup__form-label block opacity-70 m-2" htmlFor="">
          Gender
        </label>
        <select
          className="signup__form-input select 
          w-full h-[50px] rounded-lg p-2 border border-gray-300 bg-white opacity-60"
          name="gender"
          onChange={handleInput}
          value={formData.gender}
          id="gender-select"
        >
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="signup__form-div">
        <label className="signup__form-label block opacity-70 m-2" htmlFor="">
          Track
        </label>
        <select
          className="signup__form-input select
          w-full h-[50px] rounded-lg p-2 border border-gray-300 bg-white opacity-60"
          name="track"
          id="track-select"
          onChange={handleInput}
          value={formData.track}
        >
          <option value="">Select track</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="mobile">Mobile Development</option>
        </select>
      </div>

      <div className="signup__form-div">
        <label className="signup__form-label block opacity-70 m-2" htmlFor="">
          Experience level
        </label>
        <select
          className="signup__form-input select w-full h-[50px] rounded-lg p-2 border border-gray-300 bg-white opacity-60"
          name="experience"
          id="experience-select"
          onChange={handleInput}
          value={formData.experience}
        >
          <option value="">Select your level of experience</option>
          <option value="newbie">Newbie</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="senior">Senior</option>
        </select>
      </div>

      <div className="signup__form-div">
        <label className="signup__form-label block opacity-70 m-2" htmlFor="">
          Employment status
        </label>
        <select
          className="signup__form-input select w-full h-[50px] rounded-lg p-2 border border-gray-300 bg-white opacity-60"
          name="employment"
          id="employment-select"
          onChange={handleInput}
          value={formData.employement}
        >
          <option value="">Select employment status</option>
          <option value="student">Student</option>
          <option value="unemployed">Unemployed</option>
          <option value="selfemployed">Self employed</option>
          <option value="fulltime">Full Time </option>
          <option value="parttime">Part Time</option>
        </select>
      </div>

      <div className="signup__form-div">
        <label className="signup__form-label block opacity-70 m-2" htmlFor="">
          Educational qualification
        </label>
        <select
          className="signup__form-input select w-full h-[50px] rounded-lg p-2 border border-gray-300 bg-white opacity-60"
          name="education"
          id="education-select"
          onChange={handleInput}
          value={formData.education}
        >
          <option value="">Select your highest level of education</option>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="graduate">Graduate</option>
          <option value="postgrad">Post Graduate</option>
        </select>
      </div>

      <div className="signup__form-div">
        <label className="signup__form-label block opacity-70 m-2" htmlFor="">
          How did you hear about us?
        </label>
        <select
          className="signup__form-input select w-full h-[50px] rounded-lg p-2 border border-gray-300 bg-white opacity-60"
          name="how"
          id="how-select"
          onChange={handleInput}
          value={formData.how}
        >
          <option value="">Select one</option>
          <option value="twitter">Twitter</option>
          <option value="facebook">Facebook</option>
          <option value="insta">Instagram</option>
          <option value="email">Email</option>
        </select>
      </div>
    </div>
  );
}

export default SignUpTwo