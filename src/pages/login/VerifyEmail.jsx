import { useState } from "react";
import Otp from "../../components/login/Otp";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  return (
    <div className="h-screen w-screen flex">
      <div className="w-1/2 flex justify-center items-center bg-gradient-to-r from-[#4BCA84] via-[#0D6EFD] to-[#44BF93] pl-10">
        <div className="w-full h-[480px] bg-transparent flex justify-center items-center rounded-l-3xl shadow-2xl">
          <div className="text-center text-white">
            <h2 className="text-[45px] font-bold text-white mb-4">
              Kodecamp LMS
            </h2>
            <p className="text-lg text-white">
              Learning has been made simple, interactive and fun.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center pr-10">
        <div className="w-full h-[480px] flex flex-col justify-center items-center rounded-r-3xl shadow-2xl">
          <div className="grid place-items-center mx-auto text-center">
            <h2 className="text-2xl font-medium">Verify email</h2>
            <div className="grid grid-cols-4 md:gap-x-4 gap-x-2 my-3 isolate">
              <Otp otp={otp} setOtp={setOtp} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
