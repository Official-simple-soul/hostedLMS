import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../../App.css'
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import PopUp from '../../../../components/global/PopUp';

const CreateNewTaskAdmin = () => {
    const [resources, setResources] = useState('')
    const [addResources, setAddResources] = useState([])
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDesc, setTaskDesc] = useState('')
    const [stage, setStage] = useState('')
    const [track, setTrack] = useState('')
    const [level, setLevel] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [points, setPoints] = useState('')
    const [submission, setSubmission] = useState('')
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
        const task = { taskTitle, taskDesc, stage, dueDate, track, points, level }

        setIsPending(true)

        fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: { 'content-Type': "application/json"},
            body: JSON.stringify(task)
        }).then ( () => {
            console.log("new task addeed");
            // setIsPending(false);
            // navigate('/instructor/task')
        })
    }

  return (
    <div className='relative'>
        { isPending && 
            <PopUp 
                title="Task created successfully!"
                message="The task “Redesign KodeCamp Website” has been created. You’ll need to post this task before it can be visible to students."
            />
        }

        <p className="text-sm text-blue-ribbon-500">Tasks <span className='text-grey-500'>/ New Task</span></p>

        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 md:flex-row md:items-center justify-between mt-2">
                <h2 className="text-xl md:text-2xl">New Task</h2>
                <div className="flex items-center gap-2">
                    <button className='border border-[#585858] bg-white py-[1px] px-4 md:px-4 md:py-2 rounded-lg text-base'>Cancel</button>
                    { !isPending && <button 
                        className='bg-blue-ribbon-500 py-[1px] px-4 md:px-4 md:py-2 rounded-lg text-white text-base'
                    >
                        Create Task
                    </button>}
                </div>
            </div>

            <div className="grid md:grid-cols-5 gap-6 mt-6">
                <div className="w-full md:col-span-3 bg-white p-6 rounded-xl">
                    <div className='flex flex-col gap-3'>
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
                            <div className="CkEditor">
                                <CKEditor
                                    className='h-full'
                                    editor={Editor}
                                    //   config={editorConfiguration
                                    data={taskDesc}
                                    onReady={(editor) => {
                                        // You can store the "editor" and use when it is needed.
                                        // console.log("Editor is ready to use!", editor);
                                    }}
                                    onChange={(event, editor) => {
                                        setTaskDesc(editor.getData())
                                        // console.log({ event, editor, data });
                                        console.log(taskDesc);
                                    }}
                                    onBlur={(event, editor) => {
                                        console.log("Blur.", editor);
                                    }}
                                    onFocus={(event, editor) => {
                                        console.log("Focus.", editor);
                                    }}
                                />
                            </div>
                        </div> 
                    </div>
                </div>

                <div className="w-full md:col-span-2 bg-white p-6 rounded-xl">
                    <div className='flex flex-col gap-3'>
                        <div className="flex flex-col gap-1">
                            <label className='text-base text-grey-500'>Stage</label>
                            <select 
                                className='border border-grey-500 px-2 py-3 rounded-lg'
                                value={stage}
                                onChange={(e) => setStage(e.target.value)}
                            >
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
                            <select  
                                value={track}
                                onChange={(e) => setTrack(e.target.value)}
                                className='border border-grey-500 bg-[#E4E4E4] px-2 py-3 rounded-lg'
                            >
                                <option value="ui/ux">UI/UX</option>
                                <option value="Frontend">Frontend</option>
                                <option value="Backend">Backend</option>
                                <option value="Graphics">Graphics</option>
                                <option value="AutoCad">AutoCad</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className='text-base text-grey-500'>Level</label>
                            <select
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                                className='border border-grey-500 px-2 py-3 rounded-lg'
                            >
                                <option value="">What level is this task for?</option>
                                <option value='beginner'>Beginner</option>
                                <option value='intermediate'>Intermediate</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className='text-base text-grey-500'>Due date</label>
                            <input 
                                type='datetime-local' 
                                className='border border-grey-500 px-2 py-3 rounded-lg'
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className='text-base text-grey-500'>Points</label>
                            
                            <input 
                                type="number" 
                                className='border border-grey-500 px-2 py-3 rounded-lg'
                                max='100'
                                placeholder='No points'
                                value={points}
                                onChange={(e) => setPoints(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className='text-base text-grey-500'>Submission</label>
                            <select 
                                value={submission}
                                onChange={(e) => setSubmission(e.target.value)}
                                className='border border-grey-500 px-2 py-3 rounded-lg'
                            >
                                <option value="">Select submission type</option>
                                <option value='both'>Both</option>
                                <option value='link'>Link</option>
                                <option value='attachment'>Attachment</option>
                            </select>
                        </div>
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

export default CreateNewTaskAdmin