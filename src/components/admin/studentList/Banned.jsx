import { BigTick } from "../../../assets";

function Banned({setBan}) {
  return (
    <div className="bg-[#404040]/10 fixed z-[50] top-0 left-0 h-screen w-full overflow-y-hidden flex justify-center items-center">
    <div className="bg-white py-10 rounded-2xl md:w-[450px] z-50 w-11/12 flex flex-col justify-center items-center mx-auto text-center fixed shadow-lg">
      <img src={BigTick} alt="big-tick" className="my-2" />
      <p className="text-[28px] font-medium">Student Banned</p>
      <p className="font-medium my-2 w-3/4">
      Sammy Smith has been banned from the LMS
      </p>
      <div className="flex justify-center items-center my-2.5">
        <button className="px-32 py-3 bg-[#0D6EFD] rounded-lg text-white" onClick={() => setBan(false)}>Okay</button>
      </div>
    </div>
    </div>
  );
}

export default Banned;
