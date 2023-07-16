import React, { useState } from "react";
import { lessonData } from "../../../data/lessonData";
import Stages from "./Stages";

function ClassroomDataRow({ Style, bookmarked, setBookmarked }) {
  const stages = [1, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {stages.map((stage) => (
        <StageData
          key={stage}
          Style={Style}
          bookmarked={bookmarked}
          setBookmarked={setBookmarked}
          stage={lessonData.filter((e) => e.stage === stage)}
          stageTitle={`Stage ${stage}`}
        />
      ))}
    </>
  );
}

export default ClassroomDataRow;

export const StageData = ({
  stageTitle,
  Style,
  stage,
  bookmarked,
  setBookmarked,
}) => {
  const [stage1dropdown, setStage1dropdown] = useState(false);

  const handleStageClick = () => {
    if (stage.length > 0) {
      setStage1dropdown(!stage1dropdown);
    }
  };

  return (
    <>
      <div
        className={`mt-5 p-5 rounded-xl ${
          stage.length < 1 ? "opacity-50 bg-gray-300" : "opacity-100 bg-white "
        }`}
      >
        <div
          className="cursor-pointer flex flex-row items-center justify-between"
          onClick={handleStageClick}
        >
          <div>
            <p className={`${Style.stage1}`}>{stageTitle}</p>
          </div>
          <div className="flex flex-row items-center justify-center cursor-pointer">
            <p className={`${Style.lesson1}`}>{stage.length} Lessons</p>

            <p className="ml-4"></p>
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
          </div>
        </div>
        {stage1dropdown && (
          <Stages
            bookmarked={bookmarked}
            stageData={stage}
            setBookmarked={setBookmarked}
          />
        )}
      </div>
    </>
  );
};
