import React from 'react'
import ImageUploadVector from '../../../assets/icons/uplaodImageVector.png'

const CreateEditSaveLessonDefaultPage = () => {

    const colors = {
        red: '#FF3F3F',
        ash: '#808080',
        but: '#CEDEF6'
    }

    const loop = (num) => {
        const stage = [];
        for(let i=1;i<=num;i++){
        stage.push(i)
        }
        return stage
    }

  return (
        <div className=''>
            <div className="first-row grid grid-cols-1 md:grid-cols-3">
                <div className="left p-6 bg-white m-4 rounded-xl col-span-2">
                    <form action="" className=''>
                        <label className='' style={{color:colors.ash}}>Lesson Title</label><br></br>
                        <input type="text"
                        style={{borderColor:colors.ash}}
                        className='w-full px-3 py-6 mt-2 mb-4 border bg-transparent'
                        placeholder='Give your lesson a name'
                        required
                        />
                        <label htmlFor="" className='' style={{color:colors.ash}}>Lesson Description</label><br></br>
                        <textarea required rows="6"
                        style={{borderColor:colors.ash}}
                        placeholder='Whats the lesson about'
                        className='p-3 border w-full mt-2 rounded-lg bg-transparent'
                        ></textarea>
                    </form>
                </div>
                <div className="right p-6 bg-white m-4 rounded-xl">
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
                <div className="left p-6 bg-white m-4 rounded-xl col-span-2">
                    <form action="">
                        <select name="" className='bg-transparent mb-4'>
                            <option value="">Live Class</option>
                            <option value="">Lesson Recording</option>
                        </select><br></br>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="left col-span-3">
                                <label htmlFor="">Live Class Link</label>
                                <input type="text"
                                style={{borderColor:colors.ash}}
                                className='w-full px-3 py-6 mt-2 mb-4 border border-blue-ribbon-1000 bg-transparent'
                                placeholder='Enter zoom link to live class'
                                required
                                />
                            </div>
                            <div className="right">
                                <label htmlFor="">Time</label>
                                <input type="time"
                                style={{borderColor:colors.ash}}
                                className='w-full px-3 py-6 mt-2 mb-4 border border-blue-ribbon-1000 bg-transparent'
                                placeholder='00:00                   PM'
                                required
                                />
                            </div>
                        </div>
                        <input type="submit" 
                        className='px-4 py-1 bg-blue-ribbon-500 text-white'
                        value='Add Link'
                        />
                    </form>
                </div>
                <div className="right p-6 bg-white m-4 rounded-xl">
                    <div className="head flex justify-between">
                        <h1>Live Class Link</h1>
                        <h2 className='' style={{color:colors.ash}}>Link Added</h2>
                    </div>
                    <p style={{color:colors.ash}} className="time mt-8"></p>
                    <p style={{color:colors.ash}} className='mt-2'></p>
                </div>
            </div>
            <div className="third-row p-6 bg-white m-4 rounded-xl">
                <div className="first flex justify-between items-center">
                    <h1>Add Cover Picture</h1>
                    <p style={{color:colors.ash}}>Picture Added</p>
                </div>
                <p style={{color:colors.ash}} className='mt-3'>Uplaod your file</p>
                <div className="mt-3 rounded-lg upload border-dashed border-2 text-center py-10" style={{borderColor:colors.ash}}>
                    <div className="imageUpload flex justify-center items-center ">
                        <img src={ImageUploadVector} alt="" />
                    </div>
                    <p style={{color:colors.ash}} className='my-4'>Drag and drop your image here</p>
                    <p style={{color:colors.ash}} className='mb-6'>or</p>
                    <input type="file" className='hidden' id='img'/>
                    <label htmlFor="img" className='my-4 border border-blue-ribbon-500 px-5 py-2 rounded-lg text-blue-ribbon-500'>Browse File</label>
                    <p style={{color:colors.ash}} className='mt-6'>Supports JPEG, JPG, PNG <br></br> Max file size 2MB</p>
                </div>
            </div>
            <div className="second-row grid grid-cols-1 md:grid-cols-3">
                <div className="left p-6 bg-white m-4 rounded-xl col-span-2">
                    <h1 className='mb-2'>Add Resources</h1>
                    <form action="">
                        <div className="left">
                            <label htmlFor="" style={{color:colors.ash}}>Live Class Link</label>
                            <input type="text"
                            style={{borderColor:colors.ash}}
                            className='w-full px-3 py-6 mt-2 mb-4 border border-blue-ribbon-1000 bg-transparent'
                            placeholder='Enter link to file'
                            required
                            />
                        </div>
                        <input type="submit" 
                        className='px-4 py-1 bg-transparent border border-blue-ribbon-500 text-blue-ribbon-500'
                        value='Add Resources'
                        />
                    </form>
                </div>
                <div className="right p-6 bg-white m-4 rounded-xl">
                    <div className="head flex justify-between">
                        <h1>Added Resources</h1>
                    </div>
                    <div className="addresource">
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CreateEditSaveLessonDefaultPage