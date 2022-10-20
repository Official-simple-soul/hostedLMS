import {useState} from 'react';
import './SignUp2.css';
import Background from '../../../assets/images/image 1.svg';
import KodeImg from '../../../assets/images/IMG-20210810-WA0038 3.svg';
import rightIcon from '../../../assets/icons/right.svg';
import twoIcon from '../../../assets/icons/frame.svg';
import Signup2Modal from './Signup2Modal';

function SignUpTwo() {
  const [show,setShow] = useState(false);
  const handleClose=()=>{
    setShow(false)
  }
  return (
    <div className="App w-[100vw] h-[200vh] flex items-center justify-center "style={{backgroundImage:`url(${Background})`}}>
      <div className='container flex w-[80vw] max-h-[180vh] rounded-2xl' >
        <div className='signup__leftcard w-[50vw] h-[170vh] text-white flex flex-col items-center mt-[10rem]'>
          <h1 className='signup__leftcard-h1'>Kodecamp LMS</h1>
          <p className='signup__leftcard-p'>Learning has been made simple, interesting and fun.</p>
        </div>
        <div className='signup__rightcard'>
          <div className='signup__form-container'>
            <img className='signup__img' src={KodeImg} alt="kodeImg" />
            <h1 className='signup__form-h1'>Create account</h1>
            <div className='signup__form-icons m-3 flex'>
              
             
                 <img src={rightIcon} alt="rightIcon" />
                 <hr className='iconline text-red-500'/>
              <img src={twoIcon} alt="twoIcon" />
             
            </div>
            <form action="" className='signup__form'>
              <div className='signup__form-div'>
              <label className='signup__form-label' htmlFor="">Age</label>
              <input className='signup__form-input' type="text" placeholder='Type your age'/>
              </div>
              <div className='signup__form-div'>
              <label className='signup__form-label' htmlFor="">Gender</label>
              <select className='signup__form-input select' name="gender" id="gender-select">
                  <option value="">Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
              </select>
              </div>
              <div className='signup__form-div'>
              <label className='signup__form-label' htmlFor="">Track</label>
              <select className='signup__form-input select' name="track" id="track-select">
                  <option value="">Select track</option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="mobile">Mobile Development</option>
              </select>
              </div>
              <div className='signup__form-div'>
              <label className='signup__form-label' htmlFor="">Experience level</label>
              <select className='signup__form-input select' name="experience" id="experience-select">
                  <option value="">Select your level of experience</option>
                  <option value="newbie">Newbie</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="senior">Senior</option>
                
              </select>
              </div>
              <div className='signup__form-div'>
              <label className='signup__form-label' htmlFor="">Employment status</label>
              <select className='signup__form-input select' name="education" id="employment-select">
                <option value="">Select employment status</option>
                <option value="student">Student</option>
                <option value="unemployed">Unemployed</option>
                <option value="selfemployed">Self employed</option>
                <option value="fulltime">Full Time </option>
                <option value="parttime">Part Time</option>
            </select>
              </div>
              <div className='signup__form-div'>
              <label className='signup__form-label' htmlFor="">Educational qualification</label>
              <select className='signup__form-input select' name="education" id="education-select">
                  <option value="">Select your highest level of education</option>
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="graduate">Graduate</option>
                  <option value="postgrad">Post Graduate</option>
                  
              </select>
              </div>
              <div className='signup__form-div'>
              <label className='signup__form-label' htmlFor="">How did you hear about us?</label>
              <select className='signup__form-input select' name="how" id="how-select">
                  <option value="">Select one</option>
                  <option value="twitter">Twitter</option>
                  <option value="facebook">Facebook</option>
                  <option value="insta">Instagram</option>
                  <option value="email">Email</option>
              </select>
              
               <div className='signup__form-submit cursor-pointer' onClick={()=>setShow(true)}> Create Account </div>
                <Signup2Modal show={show} handleClose={handleClose}/>
              
              </div>
          <div className='already'><p><span className='already-span'>Already have an account? </span><span className="login text-blue-600 font-semibold">Log in</span></p></div>
            </form>
          </div>

        </div>
      </div>
    
    </div>
  );
}

export default SignUpTwo;