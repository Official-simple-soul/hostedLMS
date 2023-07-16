import React, { useEffect, useState } from "react";
import Stylest1 from "../components/Stage1Trainer.module.css";
import profile_img from "../../../assets/images/stage1_profile_img.svg";
import { lessonData } from "../../../data/lessonData";
import StagesRow from "./StagesRow";

const Stages = ({ setBookmarked, stageData, bookmarked }) => {
  const [classroomData, setClassroomData] = useState([]);
  const [addNum, setAddNum] = useState([]);

  const statusText = [
    "LIVE IN 2 HOURS",
    "RECORDING NOT ADDED",
    "RECORDING ADDED",
  ];

  useEffect(() => {
    setClassroomData(lessonData);
  }, []);

  const handleBookmark = (item) => {
    if (bookmarked.some((e) => e.id === item.id)) {
      setBookmarked(bookmarked.filter((e) => e.id !== item.id));
    } else {
      setBookmarked((prev) => [...prev, item]);
    }
  };

  return (
    <>
      <div className="">
        <div className="bg-white  md:p-5 rounded-xl">
          <div className="w-full border mb-5"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stageData.map((item) => {
              return (
                <StagesRow
                  item={item}
                  profile_img={profile_img}
                  Stylest1={Stylest1}
                  handleBookmark={handleBookmark}
                  statusText={statusText}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stages;
