import React, { useState } from 'react'
import DownArrow from '../../../assets/icons/down-arrow.svg'
import Cross from '../../../assets/icons/cross.svg'
import BlueDownArrow from '../../../assets/icons/arrow-down-blue.svg'
import MenuDots from '../../../assets/icons/Dots.svg'
import AdminPageWrapper from '../../../layouts/admin/AdminPageWrapper'
import { DeleteWeek, FilterLevel, UpdateCurriculum } from './curr-admin-components'
import CreateNewCurriculumWeek from './CreateNewCurriculumWeek'
// import UpdateCurriculum from './UpdateCurriculum'
// import DeleteWeek from './DeleteWeek'
// import AdminPageWrapper from '../../../layouts/admin/AdminPageWrapper'

  const WeeklyCurriculum = [
        {
            id:1,
            week: "week 1",
            weekTopic:"Introduction to UI, UX & Design Thinking",
            weeksSubTopics:  [
              {
                id:1,
                text:"Distinguish between User Interface and User Experience"
              },
              {
                id:2,
                text:"Understand problem solving using User Experience Design"
              },
              {
                id:3,
                text:"Differentiate between Good UX and Bad UX"
              },
              {
                id:4, 
                text:"Promotional Task"
              },
            ],
            open:false
        },
        {
            id:2,
            week: "week 2",
            weekTopic:"Information Architecture & User Flow",
            weeksSubTopics: [
              {
                id:1,
                text:"Distinguish between User Interface and User Experience"
              },
              {
                id:2,
                text:"Understand problem solving using User Experience Design"
              },
              {
                id:3,
                text:"Differentiate between Good UX and Bad UX"
              },
              {
                id:4,
                text:"Promotional Task"
              },
            ],
            open:false
        },
        {
            id:3,
            week: "week 3",
            weekTopic:"Sketches, Wireframe & Mid-Fidelity Design",
            weeksSubTopics: [
              {
                id:1,
                text:"Distinguish between User Interface and User Experience"
              },
              {
                id:2,
                text:"Understand problem solving using User Experience Design"
              },
              {
                id:3,
                text:"Differentiate between Good UX and Bad UX"
              },
              {
                id:4,
                text:"Promotional Task"
              },
            ],
            open:false
        },
        {
            id:4,
            week: "week 4",
            weekTopic:"High-Fidelity Design & Prototyping",
            weeksSubTopics: [
              {
                id:1,
                text:"Distinguish between User Interface and User Experience"
              },
              {
                id:2,
                text:"Understand problem solving using User Experience Design"
              },
              {
                id:3,
                text:"Differentiate between Good UX and Bad UX"
              },
              {
                id:4,
                text:"Promotional Task"
              },
            ],
            
        },
        {
            id:5,
            week: "week 5",
            weekTopic:"Usability Testing & Heuristics",
            weeksSubTopics: [
              {
                id:1,
                text:"Distinguish between User Interface and User Experience"
              },
              {
                id:2,
                text:"Understand problem solving using User Experience Design"
              },
              {
                id:3,
                text:"Differentiate between Good UX and Bad UX"
              },
              {
                id:4,
                text:"Promotional Task"
              },
            ],
            
        },
        
    ] 


const CurriculumAdmin = () => {

  const [show,setShow] = useState(-1)
  const [deletePop,setDeletePop] = useState(true)

  const showOption = (index)=>{
    if(index === show){
      setShow(-1)
      return
    }
      setShow(index)
  }
  const [update,setUpdate] = useState(-1)

  const updateOptions = (index)=>{
    if(index === update){
      setUpdate(-1)
      return
    }
      setUpdate(index)
  }
  const [newWeek,setNewWeek]= useState(true)
  const CreateNew =()=>{
    setNewWeek(!newWeek)
  }
  const [level,setLevel]= useState(true)
  const showLevel =()=>{
    setLevel(!level)
  }
  return (
    <>
    <AdminPageWrapper>
    {
  // if create new week is not clicked then we have the below ui
      newWeek ? 
  //  Curriculum Admin section 
    <div>
    {
      deletePop ?
      <div onClick={()=>show && showOption()}  className='w-[100%] h-full flex flex-col justify-center items-center mt-[54px]'>
        <div className="flex justify-between w-[100%] ">
          <h1>Curriculum</h1>
          <div className="flex items-center">
            <div className='flex items-center gap-[16px]'>
              <p className='text-[16px] text-[#585858]'>Filter</p>
            <div onClick={showLevel} className='relative cursor-pointer flex justify-between items-center border-[1px] border-[#808080] rounded-[8px] w-[160px] h-[40px] bg-[#FFFFFF] px-[12px] py-[8px]'>
                <p className='text-[#808080] text-[16px]'>
                  Beginner
                </p><img className='w-[12px] h-[7.41px]' src={DownArrow} alt="down arrow" />
                <div className={`absolute left-0 top-[40px] ${level ? 'hidden' : 'block'}`} >
                  <FilterLevel/>
                </div>
            </div>
              <button onClick={CreateNew} className='w-[203px] h-[40px] bg-[#0D6EFD] border-[0] border-[0] rounded-[8px] text-[#FFFFFF] flex items-center px-[21px] py-[13px]'><img className='w-[13px] h-[13px] mr-[10px] ' src={Cross} alt="cross" /> <span>Create New Week</span></button>
            </div>
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
        <ul className='w-[100%] mt-[28px]'>
          
            {WeeklyCurriculum.map((curi,index)=>{
                return(
              <li key={index}  className={`${show === index ? 'pb-[24px]' : 'pb-[0]'} hover:shadow-[5px_5px_5px_5px_rgba(0.1,_0.1,_0.1,_0.1)] cursor-pointer mb-[24px] rounded-[12px] px-[24px]  w-[100%] bg-[#FFFFFF]`}>
              <div  className="flex justify-between items-center w-[100%] h-[72px] bg-[#FFFFFF]">
              <div onClick={()=>showOption(index)} className=' flex justify-between items-center h-[72px] w-[98%]'>
              <p >{curi.week}</p>
              <div  className="flex items-center">
                <button className="flex items-center h-[72px] border-[0] border-[0]">
                  <span className='pr-[14px] text-[#0D6EFD] text-[16px]'>{curi.weekTopic}</span>
                  <img  className={`${show === index ? 'rotate-[175deg]' : 'rotate-[0deg]'} w-[12px] h-[7.41px]`} src={BlueDownArrow} alt="down arrow" />
                </button>
              </div>
                </div>

                <div className="flex items-center justify-center relative">
                  <img onClick={()=>updateOptions(index)} className='pl-[32px]' src={MenuDots} alt="menu" />
                    <div className={` ${update !== index ? "hidden" : "block"} absolute top-[20px] right-[-24px] `}>
                      <UpdateCurriculum updateOptions={updateOptions} index={index} deletePop={deletePop} setDeletePop={setDeletePop}/>
                    </div>
                </div>
            </div>

          <div className={`${show === index ? 'block' : 'hidden'}  bg-[#FFFFFF]  w-[100%]`}>
            <hr />
            {curi.weeksSubTopics.map((subtopic,i)=>{
              return(

              <div key={subtopic.id} className=''>
              <div className="w-[100%]">
                <p className='mt-[24px] text-[#1C1C1C]'>{subtopic.text}</p> 
              </div>
                </div>
              )
            })}
              </div>
            </li>
                )
            })}
        </ul>
    </div>
    // deletePop useState is passed as prop to DeleteWeek to be able to navigate back
    : <DeleteWeek deletePop={deletePop} setDeletePop={setDeletePop}/>
    }
    </div>
    :
    // Create new week component here
      <CreateNewCurriculumWeek/>
    }
  </AdminPageWrapper>
</>
  )
}

export default CurriculumAdmin


