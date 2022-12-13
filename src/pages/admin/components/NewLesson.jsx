import React, { useState, useEffect } from 'react'
import ImageUploadVector from '../../../assets/icons/uplaodImageVector.png';
import {v4 as uuidv4} from 'uuid'
import ModalTrainer from './Modal'
import ClassroomHeader from './ClassroomHeader';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import LessonLogo from '../../../assets/images/Rectangle.png';
import LessonLogo1 from '../../../assets/images/Rectangle1.png';
import LessonLogo2 from '../../../assets/images/Rectangle2.png';
import LessonLogo3 from '../../../assets/images/Rectangle3.png';
import LessonLogo4 from '../../../assets/images/Rectangle4.png';
import LessonLogo5 from '../../../assets/images/Rectangle5.png';


const NewLesson = () => {
    const {id} = useParams()
    const [linkToClass, setLinkToClass] = useState('')
    const [resources, setResources] = useState('')
    const [addLinkToClass, setAddLinkToClass] = useState('Nill')
    const [displayLinkToClass, setDisplayLinkToClass] = useState([])
    const [addResources, setAddResources] = useState([])
    const [notAdded, setNotAdded] = useState(false)
    const [pictureUpload, setPictureUpload] = useState(false)
    const [time, setTime] = useState('')
    const [addTime, setAddTime] = useState('')
    const [imageUpload, setImageUplaod] = useState()
    const [showModal, setShowModal] = useState(false)
    const [saveModal, setSaveModal] = useState(false)
    const [lessonTitle, setLessonTitle] = useState('')
    const [lessonDesc, setLessonDescr] = useState('')
    const [liveLesson, setLivelesson] = useState('Live Class')
    const [lessonRecording, setLessonRecording] = useState('')
    // console.log(id)
    
    const status = ['LIVE IN 2 HOURS', 'RECORDING NOT ADDED', 'RECORDING ADDED'];

    const lessonData = [
      {
        title: 'Design Principle',
        status: status[0],
        img: LessonLogo,
        date: '22-09-22',
        id: '1',
        about:
          'Design Principles are a set of considerations that form the basis of any good product. Design Principles help teams with decision making. A few simple principles or constructive questions will guide your team towards making appropriate decisions',
        link: 'meet.google.now',
        resources: [
          'DP 101',
          'Days of the Design',
          'Ux and considerations',
          'Basic Designing',
          'Principles of Design',
        ],
      },
      {
        title: 'Intro to UI/UX',
        status: status[1],
        img: LessonLogo1,
        date: '25-09-22',
        id: '2',
        about:
          'Introduction to user interface and user experience in design and its fundamentals',
        link: 'meet.google.now',
        resources: [
          'UI/UX part 1',
          'UI/UX part 2',
          'Using Figma 1',
          'Using Figma 2',
        ],
      },
      {
        title: 'Front-End Basics',
        status: status[2],
        img: LessonLogo2,
        date: '12-09-22',
        id: '3',
        about:
          'Using Html, Css and javascript. How and when to add sythax and elements to a page',
        link: 'meet.google.now',
        resources: ['Front End', 'Who is a developer'],
      },
      {
        title: 'Intro to DevOps',
        status: status[2],
        img: LessonLogo3,
        date: '02-09-22',
        id: '4',
        about:
          'and introduction to development operations, working with team and using code writing best practices',
        link: 'meet.google.now',
        resources: ['DevOps to Master', 'Zero to Hero'],
      },
      {
        title: 'Master of Css',
        status: status[2],
        img: LessonLogo4,
        date: '04-09-22',
        id: '5',
        about:
          'The basic application of css is never enough. Thus, the introduction of master of css. This should take you through that aspect',
        link: 'meet.google.now',
        resources: [
          'Css and Variables',
          'Getting started with Css',
          'Css with Simple-Soul',
        ],
      },
      {
        title: 'Javascript Loop',
        status: status[2],
        img: LessonLogo5,
        date: '11-09-22',
        id: '6',
        about:
          'one of the common function used in javascript is the loop, while loop, for loop, for each, map, reduce, for of, for in, filter, and many more',
        link: 'meet.google.now',
        resources: [
          'Eloquent Javascript',
          'Javascript 101',
          'One Time Javascript developer',
        ],
      },
    ];
    
    const handleUpload =(e)=>{
        setImageUplaod(e.target.files[0])
        setPictureUpload(true)
    }
    const addLink = (e) => {
        e.preventDefault()
        setAddLinkToClass(linkToClass)
        setAddTime(time)
        setTime('')
        setLinkToClass('')
    }
        const handleResources =(event)=>{
            setResources(event.target.value)
        }

        const onFrormSubmit =(event)=>{
            event.preventDefault()
            setAddResources([...addResources, {title: resources, id: uuidv4()}])
            setResources('')
        }
        
    const removeResources =({id})=>{
        setAddResources(addResources.filter(item=>item.id!==id));
    }
    
    useEffect(()=>{
            axios.get(`https://api.linkpreview.net/?key=9bb525045561f833c7254362017f7c5b&q=${addLinkToClass}`)
            .then((data)=> setDisplayLinkToClass(data.data))
            .catch((err)=>console.log(err))
    },[addLinkToClass])

    useEffect(()=> {
        if(addLinkToClass !== 'Nill'){
            setNotAdded(true)
        }
    },[addLinkToClass])

    const goTo =()=> {
            window.location.href = `${displayLinkToClass.url}`
    }

    const clearInputs =()=>{
        window.location.href = '/instructor/dashboard'
    }
    
    const filteredData = lessonData.filter(item=>item.id === id)
        useEffect(()=> {
            if(id>0){
                
                setLessonTitle(filteredData[0].title)
                setLessonDescr(filteredData[0].about)
                setLinkToClass(filteredData[0].link)
                setImageUplaod(filteredData[0].img)
                setAddResources(filteredData[0].resources)
                setLivelesson('Lesson Recording')
            }
        }, [])


    const loop = (num) => {
        const stage = [];
        for(let i=1;i<=num;i++){
        stage.push(i)
        }
        return stage
    }
    const colors = {
        red: '#FF3F3F',
        ash: '#808080',
        but: '#CEDEF6',
        grin: '#00BD56'
    }
  return (
    <div className=''>
        <ClassroomHeader 
        showModal={showModal}
        setShowModal={setShowModal}
        saveModal={saveModal}
        setSaveModal={setSaveModal}
        lessonTitle={lessonTitle}
        clearInputs={clearInputs}/>
        <div className="first-row grid grid-cols-1 md:grid-cols-3">
            <div className="left p-6 bg-white my-4 md:m-4 rounded-xl col-span-2">
                <form action="" className=''>
                    <label className='' style={{color:colors.ash}}>Lesson Title</label><br></br>
                    <input type="text"
                    style={{borderColor:colors.ash}}
                    className='w-full px-3 py-6 mt-2 mb-4 border bg-transparent'
                    placeholder='Give your lesson a name'
                    value={lessonTitle}
                    onChange={(e)=> setLessonTitle(e.target.value)}
                    required
                    />
                    <label htmlFor="" className='' style={{color:colors.ash}}>Lesson Description</label><br></br>
                    <textarea required rows="6"
                    style={{borderColor:colors.ash}}
                    value={lessonDesc}
                    placeholder='Whats the lesson about'
                    className='p-3 border w-full mt-2 rounded-lg bg-transparent'
                    ></textarea>
                </form>
            </div>
            <div className="right p-6 bg-white md:m-4 rounded-xl">
                <form action="">
                    <label className='' style={{color:colors.ash}}>Stage</label><br></br>
                    <select name="" style={{borderColor:colors.ash}} className='mb-4 mt-2 w-full border bg-transparent py-4 px-3 rounded-lg' required>
                        <option value="" disabled selected>What stage is this lesson for</option>
                        {loop(8).map(item=> {
                            return <option value="">Stage {item}</option>
                        })}
                    </select>
                    <label className='' style={{color:colors.ash}}>Track</label><br></br>
                    <input type="text"
                    style={{borderColor:colors.ash}}
                    className='w-full px-3 py-7 mt-2 mb-4 border bg-transparent'
                    placeholder='UI/UX'
                    required
                    />
                    <label className='' style={{color:colors.ash}}>Level</label><br></br>
                    <select name="" style={{borderColor:colors.ash}} className='mb-4 mt-2 w-full border bg-transparent py-4 px-3 rounded-lg' required>
                        <option value="" disabled selected>What level is this lesson for</option>
                        <option value="">Beginner</option>
                        <option value="">Intermediate</option>
                    </select>
                </form>
            </div>
        </div>
        <div className="second-row grid grid-cols-1 md:grid-cols-3">
            <div className="left p-6 bg-white md:m-4 rounded-xl col-span-2">
                <form action="">
                    <select name="" defaultValue={liveLesson} onChange={(e)=> setLivelesson(e.target.value)} className='bg-transparent mb-4'>
                        <option selected={liveLesson === 'Live Class'} value="Live Class">Live Class</option>
                        <option selected={liveLesson === 'Lesson Recording'} value="Lesson Recording">Lesson Recording</option>
                    </select><br></br>
                    {
                        liveLesson === 'Live Class'?
                    <>
                        <div className="grid grid-cols-4 gap-4">
                        <div className="left col-span-3">
                            <label htmlFor="">Live Class Link</label>
                            <input type="text"
                            style={{borderColor:colors.ash}}
                            className='w-full px-3 py-6 mt-2 mb-4 border border-blue-ribbon-1000 bg-transparent'
                            placeholder='Enter zoom link to live class'
                            value={linkToClass}
                            onChange={(e)=>setLinkToClass(e.target.value)}
                            required
                            />
                        </div>
                        <div className="right">
                            <label htmlFor="">Time</label>
                            <input type="time"
                            style={{borderColor:colors.ash}}
                            className='w-full px-3 py-6 mt-2 mb-4 border border-blue-ribbon-1000 bg-transparent'
                            placeholder='00:00'
                            value={time}
                            onChange={(e)=>setTime(e.target.value)}
                            required
                            />
                        </div>
                    </div>
                    <input type="submit" 
                    className='px-4 py-1 bg-blue-ribbon-500 text-white'
                    value='Add Link'
                    onClick={addLink}
                    />
                    </>
                    :
                    <>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="left col-span-3">
                            <label htmlFor="">Add lesson recording</label>
                            <input type="text"
                            style={{borderColor:colors.ash}}
                            className='w-full px-3 py-6 mt-2 mb-4 border border-blue-ribbon-1000 bg-transparent'
                            placeholder='Enter youtube embed link'
                            value={lessonRecording}
                            onChange={(e)=>setLessonRecording(e.target.value)}
                            required
                            />
                        </div>
                        <div className="right">
                            <label htmlFor="">Duration</label>
                            <input type="time"
                            style={{borderColor:colors.ash}}
                            className='w-full px-3 py-6 mt-2 mb-4 border border-blue-ribbon-1000 bg-transparent'
                            placeholder='00:00'
                            value={time}
                            onChange={(e)=>setTime(e.target.value)}
                            required
                            />
                        </div>
                    </div>
                    <input type="submit" 
                    className='px-4 py-1 bg-blue-ribbon-500 text-white'
                    value='Add Recording'
                    onClick={addLink}
                    />
                    </>
                    }
                    
                </form>
            </div>
            <div className="right p-2 bg-white my-4 md:m-4 rounded-xl">
                {
                    liveLesson === 'Live Class'?
                    <>
                    <div className="head flex justify-between p-2">
                    <h1>Live Class Link</h1>
                    <h2 className='' style={{color:notAdded?colors.grin:colors.red}}>{notAdded?'Link Added':'Link Not Added'}</h2>
                    </div>
                    <p style={{color:colors.ash}} className="time mt-8">{addTime} {addTime[0]==='0'?'AM':Number(addTime[0])+Number(addTime[1])===3&&addTime[0]!=='0'&&Number(addTime[4])>0?'PM':Number(addTime[0])+Number(addTime[1])===3&&addTime[0]!=='0'?'Noon':Number(addTime[0])+Number(addTime[1])>3&&addTime[0]!=='0'?'PM':'Nill'}</p>
                    <div onClick={goTo} className="linkdetails border p-2 rounded-lg flex space-x-2">
                        <img src={displayLinkToClass.image} alt="" width='50px'/>
                        <div className="right overflow-hidden">
                            <h1 className=''>{displayLinkToClass.title}</h1>
                            <h1 className='text-sm mt-2'>{displayLinkToClass.url}</h1>
                        </div>
                    </div>
                    </>
                    :
                    <>
                    <div className="head flex justify-between p-2 mb-6">
                    <h1 className='text-sm'>Lesson Recording Link</h1>
                    <h2 className='text-sm' style={{color:notAdded?colors.grin:colors.red}}>{notAdded?'Link Added':'Link Not Added'}</h2>
                    </div>
                    <div onClick={goTo} className="linkdetails border p-2 rounded-lg flex space-x-2">
                        <img src={displayLinkToClass.image} alt="" width='50px'/>
                        <div className="right overflow-hidden">
                            <h1 className=''>{displayLinkToClass.title}</h1>
                            <h1 className='text-sm mt-2'>{displayLinkToClass.url}</h1>
                        </div>
                    </div>
                    </>
                }
                
            </div>
        </div>
        <div className="third-row p-6 bg-white md:m-4 rounded-xl">
            <div className="first flex justify-between items-center">
                <h1>Add Cover Picture</h1>
                <p style={{color:pictureUpload?colors.grin:colors.red}}>{pictureUpload?'Picture Added':'Picture Not Added'}</p>
            </div>
            <p style={{color:colors.ash}} className='mt-3'>Uplaod your file</p>
            <div className="mt-3 rounded-lg upload border-dashed border-2 text-center py-10 relative z-50" style={{borderColor:colors.ash}}>
                <img src={ImageUploadVector} alt="" className='absolute right-[50%] top-4'/>
                <div className="imageUpload flex justify-center items-center absolute left-0 top-0 bottom-0 right-0 -z-20">
                    <img src={imageUpload} alt="" className='w-full h-[278px] object-cover' width=''/>
                </div>
                <div className="content">
                    <p style={{color:imageUpload?'white':colors.ash}} className='my-4 z-20'>Drag and drop your image here</p>
                    <p style={{color:imageUpload?'white':colors.ash}} className='mb-6 z-20'>or</p>
                    <input type="file" className='hidden' id='img' onChange={handleUpload}/>
                    <label htmlFor="img" className={`my-4 border z-20 border-blue-ribbon-500 px-5 py-2 rounded-lg text-blue-ribbon-500 ${imageUpload?'bg-white':'bg-transparent'}`}>Browse File</label>
                    <p style={{color:imageUpload?'white':colors.ash}} className='mt-6'>Supports JPEG, JPG, PNG <br></br>Max file size 2MB</p>
                </div>
            </div>
        </div>
        <div className="fourth-row grid grid-cols-1 md:grid-cols-3">
            <div className="left p-6 bg-white my-4 md:m-4 rounded-xl col-span-2">
                <h1 className='mb-2'>Add Resources</h1>
                <form action="" onSubmit={onFrormSubmit}>
                    <div className="left">
                        <label htmlFor="" style={{color:colors.ash}}>Live Class Link</label>
                        <input type="text"
                        style={{borderColor:colors.ash}}
                        className='w-full px-3 py-6 mt-2 mb-4 border border-blue-ribbon-1000 bg-transparent'
                        placeholder='Enter link to file'
                        value={resources}
                        onChange={handleResources}
                        required
                        />
                    </div>
                    <input type="submit" 
                    className='px-4 py-1 bg-transparent border border-blue-ribbon-500 text-blue-ribbon-500'
                    value='Add Resources'
                    />
                </form>
            </div>
            <div className="right p-6 bg-white md:m-4 rounded-xl">
                <div className="head flex justify-between">
                    <h1>Added Resources</h1>
                </div>
                <div className="addresource">
                {
                addResources.map((item)=>{
                    return <li className='my-3 border border-2 py-2 px-2 list-none flex justify-between items-center' style={{color:colors.ash}} key={item.id}>
                            <p>{item.title}</p>
                            <button className="text-[red] font-bold" onClick={()=>removeResources(item)}>x</button>
                    </li>
                })
                }
                </div>
            </div>
        </div>
        <ModalTrainer 
        showModal = {showModal}
        saveModal= {saveModal}
        setSaveModal = {setSaveModal}
        setShowModal = {setShowModal}
        lessonTitle = {lessonTitle}
        />
        <img src='' alt="" />
    </div>
  )
}

export default NewLesson