import React from 'react'

const SignUpTwo = ({handleInput,formData}) => {
  return (
    <div>
      <input onChange={handleInput} type="text" value={formData.test} name='test' />
    </div>
  )
}

export default SignUpTwo