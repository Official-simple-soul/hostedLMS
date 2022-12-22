import React, { useState } from 'react'
import DownArrow from '../../../assets/icons/down-arrow.svg'
import Cross from '../../../assets/icons/cross.svg'
import FilterLevel from '../../../components/curriculum/curriculum-components/FilterLevel'
import AdminPageWrapper from '../../../layouts/admin/AdminPageWrapper'
import CurriculumPageWrapper from '../../../components/curriculum/CurriculumPageWrapper'


  

const CurriculumAdmin = () => {
     const [newWeekAdmin,setNewWeekAdmin]= useState(true)
  const CreateNew =()=>{
    setNewWeekAdmin(!newWeekAdmin)
  }
  // To create list of items to select for level of experience
  const [level,setLevel]= useState(true)
  const showLevel =()=>{
    setLevel(!level)
  }

  const options = ["Beginner", "Intermediate"]
  const [selected,setSelected]= useState("Beginner")

   return (
    <>
        <CurriculumPageWrapper newWeekAdmin={newWeekAdmin}>
            <div className="flex justify-between w-[100%] ">
          <h1>Curriculum</h1>
          <div className="flex items-center"></div>
          <div className='flex items-center gap-[16px]'>
              <p className='text-[16px] text-[#585858]'>Filter</p>
            <div onClick={showLevel} className='relative cursor-pointer flex justify-between items-center border-[1px] border-[#808080] rounded-[8px] w-[160px] h-[40px] bg-[#FFFFFF] px-[12px] py-[8px]'>
                <p className='text-[#808080] text-[16px]'>
                 {selected}
                </p><img className='w-[12px] h-[7.41px]' src={DownArrow} alt="down arrow" />
                <div className={`absolute left-0 top-[40px] ${level ? 'hidden' : 'block'}`} >
                  <FilterLevel  options={options} selected={selected} setSelected={setSelected} />
                </div>
            </div>
              <button onClick={CreateNew} className='w-[203px] h-[40px] bg-[#0D6EFD] border-[0] border-[0] rounded-[8px] text-[#FFFFFF] flex items-center px-[21px] py-[13px]'><img className='w-[13px] h-[13px] mr-[10px] ' src={Cross} alt="cross" /> <span>Create New Week</span></button>
            </div>
           </div>
            <div className='flex w-[100%]  gap-[24px] justify-[flex-start] mt-[32px] mb-[26px]'>
                <p className='
                    relative
                    text-[#808080]
                    text-[16px]
                    font-[400]
                    font-[Inter]
                    hover:text-[#0D6EFD]  
                    hover:cursor-pointer
                    hover:before:absolute 
                    hover:before:content-[""] 
                    hover:before:bg-[#0D6EFD]
                    hover:before:w-[100%] 
                    hover:before:h-[3px] 
                    hover:before:bottom-[-3px] 
                    hover:before:left-[0px]
                    '>UI/UX</p>
                <p
                    className='
                    relative
                    text-[#808080]
                    text-[16px]
                    font-[400]
                    font-[Inter]
                    hover:text-[#0D6EFD]  
                    hover:cursor-pointer
                    hover:before:absolute 
                    hover:before:content-[""] 
                    hover:before:bg-[#0D6EFD]
                    hover:before:w-[100%] 
                    hover:before:h-[3px] 
                    hover:before:bottom-[-3px] 
                    hover:before:left-[0px]
                    '
                >Frontend</p>
                <p
                    className='
                    relative
                    text-[#808080]
                    text-[16px]
                    font-[400]
                    font-[Inter]
                    hover:text-[#0D6EFD]  
                    hover:cursor-pointer
                    hover:before:absolute 
                    hover:before:content-[""] 
                    hover:before:bg-[#0D6EFD]
                    hover:before:w-[100%] 
                    hover:before:h-[3px] 
                    hover:before:bottom-[-3px] 
                    hover:before:left-[0px]
                    '
                >Backend</p>
                <p
                    className='
                    relative
                    text-[#808080]
                    text-[16px]
                    font-[400]
                    font-[Inter]
                    hover:text-[#0D6EFD]  
                    hover:cursor-pointer
                    hover:before:absolute 
                    hover:before:content-[""] 
                    hover:before:bg-[#0D6EFD]
                    hover:before:w-[100%] 
                    hover:before:h-[3px] 
                    hover:before:bottom-[-3px] 
                    hover:before:left-[0px]
                    '
                >Android</p>
                <p
                    className='
                    relative
                    text-[#808080]
                    text-[16px]
                    font-[400]
                    font-[Inter]
                    hover:text-[#0D6EFD]  
                    hover:cursor-pointer
                    hover:before:absolute 
                    hover:before:content-[""] 
                    hover:before:bg-[#0D6EFD]
                    hover:before:w-[100%] 
                    hover:before:h-[3px] 
                    hover:before:bottom-[-3px] 
                    hover:before:left-[0px]
                    '
                >Project Management</p>
                <p
                    className='
                    relative
                    text-[#808080]
                    text-[16px]
                    font-[400]
                    font-[Inter]
                    hover:text-[#0D6EFD]  
                    hover:cursor-pointer
                    hover:before:absolute 
                    hover:before:content-[""] 
                    hover:before:bg-[#0D6EFD]
                    hover:before:w-[100%] 
                    hover:before:h-[3px] 
                    hover:before:bottom-[-3px] 
                    hover:before:left-[0px]
                    '
                >CAD</p>
                <p
                    className='
                    relative
                    text-[#808080]
                    text-[16px]
                    font-[400]
                    font-[Inter]
                    hover:text-[#0D6EFD]  
                    hover:cursor-pointer
                    hover:before:absolute 
                    hover:before:content-[""] 
                    hover:before:bg-[#0D6EFD]
                    hover:before:w-[100%] 
                    hover:before:h-[3px] 
                    hover:before:bottom-[-3px] 
                    hover:before:left-[0px]
                    '
                >Digital Marketing</p>
            </div>
        </CurriculumPageWrapper>   
    </>
  )
}

export default CurriculumAdmin


