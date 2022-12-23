import React, { useState } from 'react'
import DownArrow from '../../../assets/icons/down-arrow.svg'
import Cross from '../../../assets/icons/cross.svg'
import FilterLevel from '../../../components/curriculum/curriculum-components/FilterLevel'
import CurriculumPageWrapper from '../../../components/curriculum/CurriculumPageWrapper'

const StudentCurriculum = () => {
 const [studentCurr,setStudentCurri]= useState(true)
  const CreateNew =()=>{
    setStudentCurri(studentCurr)
  }

   return (
    <>
      <div>
         <CurriculumPageWrapper studentCurr={studentCurr} setStudentCurri={setStudentCurri} CreateNew={CreateNew}>
          <h1>Curriculum</h1>
         </CurriculumPageWrapper>
      </div>
    </>
  )
}

export default StudentCurriculum
