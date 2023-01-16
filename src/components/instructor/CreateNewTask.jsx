import React, { useState } from 'react'
// import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import EditorConvertToHTML from './EditorConvertToHTML'
import '../../App.css'
import CkEditor from '../ckEditor/CkEditor'

const CreateNewTask = () => {
    // const { id } = useParams()
    const [resources, setResources] = useState('')
    const [addResources, setAddResources] = useState([])
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDesc, setTaskDesc] = useState('')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    const handleResources =(event)=>{
        setResources(event.target.value)
    }

    const onFrormSubmit = (event)=> {
        event.preventDefault()
        setAddResources([...addResources, {title: resources, id: new Date()}])
        setResources('')
    }

    const removeResources =({id})=>{
        setAddResources(addResources.filter(item=>item.id!==id));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = { taskTitle, taskDesc}

        setIsPending(true)

        fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: { 'content-Type': "application/json"},
            body: JSON.stringify(task)
        }).then ( () => {
            console.log("new task addeed");
            setIsPending(false);
            navigate('/instructor/task')
        })
    }

  return (
    <div>
        <p className="text-sm text-blue-ribbon-500">Tasks <span className='text-grey-500'>/ New Task</span></p>

        <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-between mt-2">
                <h2 className="text-2xl">New Task</h2>
                <div className="flex items-center gap-2">
                    <button className='border border-[#585858] bg-white px-4 py-2 rounded-lg text-base'>Cancel</button>
                    { !isPending && <button 
                        className='bg-blue-ribbon-500 px-4 py-2 rounded-lg text-white text-base'
                    >
                        Create Task
                    </button>}

                    { isPending && <button
                        disabled
                        className='bg-blue-ribbon-500 px-4 py-2 rounded-lg text-white text-base'
                    >
                        Creating Task...
                    </button>}
                </div>
            </div>

            <div className="grid md:grid-cols-5 gap-6 mt-6">
                <div className="md:col-span-3 bg-white p-6 rounded-xl flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <label className='text-base text-grey-500'>Task Title</label>
                        <input 
                            type="text" 
                            placeholder='Give your task a name'
                            className='border border-grey-500 px-4 py-3'
                            value={taskTitle}
                            onChange={ (e) => setTaskTitle(e.target.value) }
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className='text-base text-grey-500'>Task Description</label>
                        <EditorConvertToHTML
                            value={taskDesc}
                            onChange={ (e) => setTaskDesc(e.target.value) }
                        />
                        {console.log(taskDesc)}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className='text-base text-grey-500'>Task Description</label>
                        <CkEditor />
                    </div>
                </div>

                <div className="md:col-span-2 bg-white p-6 rounded-xl flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <label className='text-base text-grey-500'>Stage</label>
                        <select className='border border-grey-500 px-2 py-3 rounded-lg'>
                            <option value="">What stage is this task for?</option>
                            <option value='1'>Stage 1</option>
                            <option value='2'>Stage 2</option>
                            <option value='3'>Stage 3</option>
                            <option value='4'>Stage 4</option>
                            <option value='5'>Stage 5</option>
                            <option value='6'>Stage 6</option>
                            <option value='7'>Stage 7</option>
                            <option value='8'>Stage 8</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className='text-base text-grey-500'>Track</label>
                        <select disabled className='border border-grey-500 bg-[#E4E4E4] px-2 py-3 rounded-lg'>
                            <option value="">UI/UX</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className='text-base text-grey-500'>Level</label>
                        <select className='border border-grey-500 px-2 py-3 rounded-lg'>
                            <option value="">What level is this task for?</option>
                            <option value='beginner'>Beginner</option>
                            <option value='intermediate'>Intermediate</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className='text-base text-grey-500'>Due date</label>
                        <select className='border border-grey-500 px-2 py-3 rounded-lg'>
                            <option value="">When is the deadline for this task?</option>
                            <option value='Stage 1'>Stage 1</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className='text-base text-grey-500'>Points</label>
                        <select className='border border-grey-500 px-2 py-3 rounded-lg'>
                            <option value="">No points</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className='text-base text-grey-500'>Submission</label>
                        <select className='border border-grey-500 px-2 py-3 rounded-lg'>
                            <option value="">Select submission type</option>
                            <option value='Stage 1'>Both</option>
                            <option value='Stage 2'>Link</option>
                            <option value='Stage 3'>Attachment</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-5 gap-6 mt-6">
                <div className="md:col-span-3 bg-white p-6 rounded-xl">
                    <h1 className='text-xl'>Add Resources</h1>
                    <form action="" onSubmit={onFrormSubmit}>
                        <div className="flex flex-col gap-1 mt-2 mb-4">
                            <label className='text-base text-grey-500'>Resource Link</label>
                            <input type="text"
                                className='py-4 px-3 border border-gray'
                                placeholder='Enter link to file'
                                value={resources}
                                onChange={handleResources}
                                required
                            />
                            </div>
                        <button 
                            className='bg-blue-ribbon-500 px-4 py-2 text-white text-base'
                            onClick={onFrormSubmit}
                        >
                            Add Resource
                        </button>
                    </form>
                </div>

                <div className="md:col-span-2 bg-white p-6 rounded-xl">
                    <h1 className='text-xl'>Added Resources</h1>
                    <div>
                        { addResources ? <p className='text-sm text-[#585858] mt-4'>Nil</p> :
                        addResources.map((item)=>{
                            return (
                                <li className='my-3 border border-2 py-2 px-2 list-none flex justify-between items-center' key={item.id}>
                                    <p>{item.title}</p>
                                    <button className="text-[red] font-bold" onClick={()=>removeResources(item)}>x</button>
                                </li>
                            )
                        })
                        }
                    </div>
                </div>
            </div>


        </form>
    </div>
  )
}

export default CreateNewTask