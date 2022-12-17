// import React, { useState } from 'react'
import { useParams } from 'react-router'
import EditorConvertToHTML from './EditorConvertToHTML'

const CreateNewTask = () => {
    const { id } = useParams()

  return (
    <div>
        <p className="text-sm text-blue-ribbon-500">Tasks <span className='text-grey-500'>/ New Task</span></p>

        <form>
            <div className="flex items-center justify-between mt-2">
                <h2 className="text-2xl">New Task</h2>
                <div className="flex items-center gap-2">
                    <button className='border border-[#585858] bg-white px-4 py-2 rounded-lg text-base'>Cancel</button>
                    <button className='bg-blue-ribbon-500 px-4 py-2 rounded-lg text-white text-base'>Create Task</button>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-6 mt-6">
                <div className="col-span-3 bg-white p-6 rounded-xl flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <label className='text-base text-grey-500'>Task Title</label>
                        <input 
                            type="text" 
                            placeholder='Give your task a name'
                            className='border border-grey-500 px-4 py-3 '
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className='text-base text-grey-500'>Task Description</label>
                        <EditorConvertToHTML />
                    </div>
                </div>
                <div className="col-span-2 bg-white p-6 rounded-xl">2</div>
            </div>
        </form>
    </div>
  )
}

export default CreateNewTask