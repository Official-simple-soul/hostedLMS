import React, {useState} from 'react'
import { lessonData } from '../../../data/lessonData';
import Stages from './Stages';

function ClassroomDataRow({stageView, idx, Style, e, Stages, bookmarked, setBookmarked}) {
  
  const [stage1dropdown, setStage1dropdown] = useState(false);
  const [num, setNum] = useState()

  return (
    <div className=" bg-white mt-5 p-5 rounded-xl">
            <div
              className="cursor-pointer flex flex-row items-center justify-between"
              onClick={() => {
                setStage1dropdown(!stage1dropdown);
                setNum(idx)
              }}
            >
              <div>
                <p className={`${Style.stage1}`}>Stage {idx+1}</p>
              </div>
              <div className="flex flex-row items-center justify-center bg-white cursor-pointer">
                <p className={`${Style.lesson1}`}>{stageView[idx+1].length} Lessons</p>
                <p className="ml-4 bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="12"
                    fill="#0D6EFD"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </p>
              </div>
            </div>
            {
              stage1dropdown&&
              <Stages num={num} bookmarked={bookmarked} setBookmarked={setBookmarked} stage1dropdown={stage1dropdown} setStage1dropdow={setStage1dropdown}/>
            }
          </div>
  )
}

export default ClassroomDataRow
