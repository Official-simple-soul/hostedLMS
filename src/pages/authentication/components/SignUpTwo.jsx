import {useState} from 'react';
import './SignUp2.css';
import Signup2Modal from './Signup2Modal';

function SignUpTwo({formData,handleInput}) {
    const [show,setShow] = useState(false);
    const handleClose=()=>{
      setShow(false)
    }
    return (
  <>
    <div className='signup__form-div'>
    <label className='signup__form-label block' htmlFor="">Age</label>
    <input className='signup__form-input border-2' type="text" onChange={handleInput} value={formData.age} name='age' placeholder='Type your age'/>
    </div>
    <div className='signup__form-div'>
    <label className='signup__form-label block' htmlFor="">Gender</label>
    <select className='signup__form-input select' onChange={handleInput} name="gender"  id="gender-select">
        <option value="">Select your gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
    </div>
    <div className='signup__form-div'>
    <label className='signup__form-label block' htmlFor="">Track</label>
    <select className='signup__form-input select' onChange={handleInput} name="track" id="track-select">
        <option value="">Select track</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="mobile">Mobile Development</option>
    </select>
    </div>
    <div className='signup__form-div'>
    <label className='signup__form-label block' htmlFor="">Experience level</label>
    <select className='signup__form-input select' onChange={handleInput} name="experience" id="experience-select">
        <option value="">Select your level of experience</option>
        <option value="newbie">Newbie</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
        <option value="senior">Senior</option>
      
    </select>
    </div>
    <div className='signup__form-div'>
    <label className='signup__form-label block' htmlFor="">Employment status</label>
    <select className='signup__form-input select'  onChange={handleInput} name="education" id="employment-select">
      <option value="">Select employment status</option>
      <option value="student">Student</option>
      <option value="unemployed">Unemployed</option>
      <option value="selfemployed">Self employed</option>
      <option value="fulltime">Full Time </option>
      <option value="parttime">Part Time</option>
  </select>
    </div>
    <div className='signup__form-div'>
    <label className='signup__form-label block' htmlFor="">Educational qualification</label>
    <select className='signup__form-input select' onChange={handleInput} name="education2" id="education-select">
        <option value="">Select your highest level of education</option>
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="undergraduate">Undergraduate</option>
        <option value="graduate">Graduate</option>
        <option value="postgrad">Post Graduate</option>
        
    </select>
    </div>
    <div className='signup__form-div'>
    <label className='signup__form-label block' htmlFor="">How did you hear about us?</label>
    <select className='signup__form-input select' onChange={handleInput} name="how" id="how-select">
        <option value="">Select one</option>
        <option value={twitter} name='twitter'>Twitter</option>
        <option value="facebook" name='facebook'>Facebook</option>
        <option value="insta" name='insta'>Instagram</option>
        <option value="email" name='email'>Email</option>
    </select>
    
     {/* <div className='signup__form-submit cursor-pointer' onClick={()=>setShow(true)}> Create Account </div> */}
      <Signup2Modal show={show} handleClose={handleClose}/>
    
    </div>
  </>
  );
  }

export default SignUpTwo;