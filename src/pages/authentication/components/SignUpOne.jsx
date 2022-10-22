import React, { useState } from 'react'
import FormInput from './FormInput'


const SignUpOne = ({eye,setEye,showPassword,handleInput,formData}) => {
  
  return (
    <div>
        <FormInput handleInput={handleInput} formData={formData} eye={eye} setEye={setEye} showPassword={showPassword}/>   
    </div>
  )
}

export default SignUpOne