import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';


function StagesRow({item, statusText, handleBookmark, Stylest1, profile_img}) {
    // const [bookedIcon, setBookedIcon] = useState(false)
    let { id, title, status, img, date, isBooked } = item;
    // console.log(item)
    return (
    <div className="group/item border rounded-xl relative" key={id}>
                  <Link to={`/student/aboutstudent/${id}`}>
                    <div className="invisible group-hover/item:visible enter flex items-center space-x-4 absolute top-14 left-28 text-white font-light">
                      <i class="fa-solid fa-right-to-bracket"></i>
                      <p className="">Enter</p>
                    </div>
                    <img src={img} alt="" className="rounded-t-xl" />
                  </Link>
                  <div className="px-4 py-6 relative">
                    <div className="flex flex-row justify-between items-center">
                      <h4 className={`${Stylest1.stage1_heading}`}>{title}</h4>
                      {
                        isBooked?
                        <BsBookmarkFill className='cursor-pointer text-green-500' onClick={() => {
                            handleBookmark(item)
                            }}/>
                            :
                            <BsBookmark className='cursor-pointer' onClick={() => {
                                handleBookmark(item)
                                }}/>
                      }
                    </div>
                    <p
                      className={`${
                        status === statusText[0]
                          ? 'text-blue-ribbon-500'
                          : status === statusText[1]
                          ? 'text-[red]'
                          : 'text-[green]'
                      } py-3 text-[12px]`}
                    >
                      {status}
                    </p>

                    <div className="flex flex-row justify-between items-center">
                      <div className="flex flex-row items-center">
                        <img src={profile_img} alt="ProfileImage" />
                        <p className={`${Stylest1.profile_text} pl-3`}>You</p>
                      </div>
                      <div className={`${Stylest1.profile_text}`}>{date}</div>
                    </div>
                  </div>
                </div>
  )
}

export default StagesRow
