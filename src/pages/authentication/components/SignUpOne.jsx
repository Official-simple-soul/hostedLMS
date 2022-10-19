import React, { useState } from 'react'
import FormInput, { userInputs } from './FormInput'


const SignUpOne = ({}) => {
    const [data, setData]=useState({})

            const handleInput =(e)=>{
                    const id= e.target.id;
                    const value= e.target.value;
                    setData({...data,[id]:value})
                }
                console.log(data)
            // const handleSubmit =(e)=>{
            //     e.preventDefault()
            //     }
  return (
    <div>
        <FormInput handleInput={handleInput}/>   
    </div>
  )
}

export default SignUpOne