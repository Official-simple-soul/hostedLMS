import rightIcon from '../../assets/icons/right.svg'
import './Signup2Modal.css';

const Modal = props => {
   
    
    if(!props.show){
        return null
    }
  return (
    <div className='modal-bg'>
      <div className='modal p-[30px] w-[480px] h-[380px]'>
        <img className='w-20 mb-3' src={rightIcon} alt="right icon" />
        <h1 className=' text-3xl'>Account created </h1>
        <h1 className=' text-3xl'>successfully!</h1>
        <p className='m-2 text-lg'>You can now access the Kodecamp LMS</p>
        <div className='modal-button cursor-pointer' onClick={props.handleClose}>Proceed to Dashboard</div>

      </div>
    </div>
  )
}

export default Modal;
