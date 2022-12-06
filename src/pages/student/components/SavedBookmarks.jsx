import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import profile_img from '../../../assets/images/stage1_profile_img.svg';

export default function SavedBookmarks() {
    const [searchInput, setSearchInput] = useState('')
    const savedData = localStorage.getItem('savedBookmarks')
    const bookmarkArr = JSON.parse(savedData)
    const searchBookmarks = bookmarkArr.filter(item=> item.title.toLowerCase().indexOf(searchInput) !== -1)
  return (
    <div>
        <div className="searchbar flex w-40 md:w-80 border px-3 bg-white py-1 absolute top-6 md:top-6 left-4 md:left-64 rounded-md">
            <i class="fa-solid fa-magnifying-glass text-sm"></i>
            <input 
            type="text" 
            placeholder='Search'
            value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
            className='ml-3 w-full focus:outline-none'/>
        </div>
      <div className="">
      <div className="top-row px-6 mt-4">
            <div className="lesson-top">
                <p className='text-blue-ribbon-500 mb-2 text-sm'>Classroom <span className='text-[grey]'>/ Saved Lessons</span></p>
                <h1>Saved Lesson</h1>
            </div>
            <p className='my-4'>{bookmarkArr.length} search</p>
        </div>
        <div className="bg-white  p-5 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
            searchBookmarks.length>0?
            searchBookmarks.map((item) => {
                let {id, title, status, img, date} = item
              return (
                  <div
                    className="group/item border rounded-xl relative"
                    key={id}
                  >
                    <Link to={`/instructor/aboutstudent/${id}`}>
                        <div className="invisible group-hover/item:visible enter flex items-center space-x-4 absolute top-14 left-28 text-white font-light">
                        <i class="fa-solid fa-right-to-bracket"></i>
                        <p className="">Enter</p>
                        </div>
                        <img src={img} alt="" className="rounded-t-xl" />
                    </Link>
                    <div className="px-4 py-6 relative">
                      <div className="flex flex-row justify-between items-center">
                        <h4 className=''>
                          {title}
                        </h4>
                        <i class={`fa-regular fa-bookmark text-[#00BD56] bg-[#00BD56]`}></i>
                      </div>
                      <p
                        className={` py-3 text-[12px]`}
                      >
                        {status}
                      </p>

                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center">
                          <img src={profile_img} alt="ProfileImage" />
                          <p className={` pl-3`}>You</p>
                        </div>
                        <div className={``}>
                          {date}
                        </div>
                      </div>
                    </div>
                  </div>
              );
            })
            :
            bookmarkArr && bookmarkArr.map((item) => {
                let {id, title, status, img, date} = item
              return (
                  <div
                    className="group/item border rounded-xl relative"
                    key={id}
                  >
                    <Link to={`/instructor/aboutstudent/${id}`}>
                        <div className="invisible group-hover/item:visible enter flex items-center space-x-4 absolute top-14 left-28 text-white font-light">
                        <i class="fa-solid fa-right-to-bracket"></i>
                        <p className="">Enter</p>
                        </div>
                        <img src={img} alt="" className="rounded-t-xl" />
                    </Link>
                    <div className="px-4 py-6 relative">
                      <div className="flex flex-row justify-between items-center">
                        <h4 className=''>
                          {title}
                        </h4>
                        <i class={`fa-regular fa-bookmark text-[#00BD56] bg-[#00BD56]`}></i>
                      </div>
                      <p
                        className={` py-3 text-[12px]`}
                      >
                        {status}
                      </p>

                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center">
                          <img src={profile_img} alt="ProfileImage" />
                          <p className={` pl-3`}>You</p>
                        </div>
                        <div className={``}>
                          {date}
                        </div>
                      </div>
                    </div>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
