import { useState } from "react";
import { BanBlack } from "../../../assets";
import axios from "axios";
import Banned from "./Banned";

function BanRequest({ setBanReq, list, banReq }) {
  const [banConfirm, setBanConfirm] = useState(false);
  const banSuccess = () => {
    BanUpdate();
    setBanConfirm(true);
    console.log(banConfirm);
    setBanReq(false);
    console.log(list);
  };
  const BanUpdate = async () => {
    const response = await axios
      .patch(
        `http://localhost:8000/students/${list.id}`,
        {
          banned: "Yes",
        },
        {
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      )
      .then((data) => console.log(data));
    return response;
  };
  return (
    <>
      {banReq && (
        <div className="bg-[#404040]/10 fixed z-[20] top-0 left-0 h-screen w-full overflow-y-hidden flex justify-center items-center">
          <div className="bg-white py-6 rounded-2xl md:w-[450px] w-11/12 flex flex-col justify-center items-center mx-auto text-center fixed shadow-lg">
            <img src={BanBlack} alt="ban" className="my-2" />
            <p className="text-[28px] font-medium">Ban this student?</p>
            <p className="font-medium my-2 w-3/4">
              Are you sure you want to ban {list.name} from the LMS? This action
              cannot be undone
            </p>
            <div className="flex justify-center items-center my-2.5">
              <button
                className="bg-transparent rounded-lg border border-[#585858] text-[#585858] py-2 px-3 mr-4"
                onClick={() => setBanReq(false)}
              >
                Cancel
              </button>
              <button
                className="bg-[#F41717] rounded-lg text-white py-2.5 px-16 mr-4"
                onClick={() => banSuccess()}
              >
                Yes, ban
              </button>
            </div>
          </div>
        </div>
      )}
      {banConfirm && <Banned setBan={setBanConfirm} />}
    </>
  );
}

export default BanRequest;
