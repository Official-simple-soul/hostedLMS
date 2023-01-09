import { useState } from "react";
import { Link } from "react-router-dom";
import BanRequest from "./BanRequest";
function More({ studentId, setMore, list, openmore, Id,  }) {
    const [banReq, setBanReq] = useState(false);
  const popUp = () => {
    setBanReq(true);
    setMore(false)
  };
  return (
    <div>
      <div
        className={`${list.id == Id && openmore ? "flex" : "hidden"} bg-white text-black rounded-lg flex-col gap-y-2 absolute z-10 py-2.5 right-0 mr-6 mt-10 shadow`}
      >
        <div className="flex flex-col gap-y-3 px-3">
          <Link to={`/student/profile/${list.name}`}>View Profile</Link>
          <Link to={`/student/profile/${list.name}`}>Performance</Link>
          <Link to={`/student/profile/${list.name}`}>Upload Certificate</Link>
        </div>
        <hr />
        <p
          className="text-[#FF3F3F] cursor-pointer px-3"
          onClick={() => popUp()}
        >
          Ban Student
        </p>
      </div>
        <BanRequest banReq={banReq} setBanReq={setBanReq} list={list} />
    </div>
  );
}

export default More;
