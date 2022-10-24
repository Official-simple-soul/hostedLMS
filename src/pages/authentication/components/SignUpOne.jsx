import React, { useState } from 'react'
import FormInput from './FormInput';



const SignUpOne = ({eye,setEye,showPassword,formData,handleInput}) => {

  return (
    <div>
        <FormInput handleInput={handleInput} formData={formData} eye={eye} setEye={setEye} showPassword={showPassword}/>   
    </div>
  )
}

export default SignUpOne