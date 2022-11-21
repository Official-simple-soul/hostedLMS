import React, { useState, useEffect } from 'react'
import Modal from './Modal';
const Support = () => {
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')
    const [btn, setBtn] = useState(false);
    const [showModal, setShowModal] = useState(false);

    
    const colors = 
        {
            arsh: '#E5E5E5',
            red: '#FF3F3F',
            but: '#CEDEF6',
            grin: '#00BD56',
            grey: '#585858',
            input: '#808080'
        }
    
    useEffect(()=> {
        if(title&&message&&subject){
            setBtn(true)
        }
    }, [title, message, subject])

    const handleSubmit =(e)=>{
        e.preventDefault()
        setShowModal(true)
        console.log(title, message, subject)
    }
    

  return (
    <>

        <Modal 
        showModal={showModal}
        setShowModal={setShowModal}/>
        <div className='px-8 py-8 w-full flex justify-center items-center bg-[#F5F5F5]'>
        <div className="content w-full">
            <header className='text-2xl mb-6'>Support</header>
            <form action="" className='bg-white rounded-lg shadow px-8 py-8' onSubmit={handleSubmit}>
                <h1 style={{color:colors.grey}}>Send us a message</h1>
                <div className="grid grid-cols-2 gap-8 my-4">
                    <div className="left">
                        <label htmlFor="text" className='text-sm' style={{color:colors.grey}}>Title</label>
                        <input 
                        type="text" 
                        placeholder='e.g Bug'
                        value={title}
                        style={{borderColor:colors.input}}
                        onChange={(e)=>setTitle(e.target.value)}
                        className='px-3 py-2 border border-1 w-full rounded-lg mt-3 focus:outline-none'
                        name=""/>
                    </div>
                    <div className="right">
                        <label htmlFor="select" className='text-sm' style={{color:colors.grey}}>Subject</label>
                        <select name="select" value={subject} onChange={(e)=>setSubject(e.target.value)} className='border border-1 w-full px-1 rounded-lg py-4 mt-3 text-[grey] focus:outline-none' style={{borderColor:colors.input}}>
                            <option value=""  disabled selected>Select an option</option>
                            <option value="General">General</option>
                            <option value="My Track">My Track</option>
                            <option value="LMS">LMS</option>
                            <option value="Career Aid">Career Aid</option>
                            <option value="Program Structure">Program Structure</option>
                            <option value="Stage/Task">Stage/Task</option>
                        </select>
                    </div>
                </div>
                <label htmlFor="text" className='text-sm' style={{color:colors.grey}}>Message</label>
                <textarea 
                name="" 
                rows="7"
                placeholder='Description'
                value={message}
                style={{borderColor:colors.input}}
                onChange={(e)=>setMessage(e.target.value)}
                className='w-full border border-1 rounded-lg p-3 mb-4 mt-3 focus:outline-none'></textarea>
                <input 
                type="submit"
                value='submit'
                disabled={!btn}
                className={`${btn?'bg-blue-ribbon-500': 'bg-[#CEDEF6]'} px-8 text-2xl rounded-md text-white`}/>
            </form>
        </div>
    </div>
    </>
  )
}

export default Support