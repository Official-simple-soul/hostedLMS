import { useEffect, useState } from "react";
import { Logo, Tick, Time } from "../../assets";
import Otp from "../../components/login/Otp";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <div className="min-h-screen max-w-screen flex">
      <div className="w-1/2 min-h-screen flex justify-center items-center bg-auth pl-10 py-20">
        <div className="w-full xl:h-[687px] h-[720px] bg-transparent flex justify-center items-center rounded-l-3xl shadow-2xl">
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
      <div className="w-1/2 flex flex-col justify-center pr-10">
        <span className="w-2/3 h-[3px] bg-green-500 "></span>
        <div className="w-full xl:h-[684px] h-[716px] flex flex-col rounded-r-3xl shadow-2xl px-6">
          <div className="grid place-items-center mx-auto text-center my-10">
            <div className="w-20 h-20 rounded-lg bg-transparent shadow-md mb-6 grid place-items-center">
              <img src={Logo} alt="kodecamp-logo" />
            </div>
            <h2 className="text-2xl font-medium mb-3">Verify email</h2>
            <div className="flex my-6 isolate">
              <span className="w-8 h-8 rounded-full flex justify-center items-center bg-green-600">
                <img src={Tick} alt="tick" />
              </span>
              <div className="flex justify-center items-center">
                <hr className="w-14 h-px flex place-items-center text-center bg-gray-600" />
              </div>
              <span className="w-8 h-8 rounded-full flex justify-center items-center bg-blue-600">
                <p className="font-medium text-lg text-center text-white">2</p>
              </span>
              <div className="flex justify-center items-center">
                <hr className="w-14 h-px flex place-items-center text-center bg-gray-600" />
              </div>
              <span className="w-8 h-8 rounded-full flex justify-center items-center bg-gray-600">
                <p className="font-medium text-lg text-center text-white">3</p>
              </span>
            </div>
            <p className="font-medium text-lg text-gray-600 mb-5">
              Kindly enter the 4-digit code sent to sammysmith@gmail.com
            </p>
            <div className="grid grid-cols-4 md:gap-x-6 gap-x-3 my-3 isolate">
              <Otp otp={otp} setOtp={setOtp} />
            </div>
            <div className="mb-8 flex">
              <img src={Time} alt="time" />
              <p className="text-sm ml-1">
                {dateState.toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </p>
            </div>
            <button className="bg-blue-600 rounded-lg text-white py-4 px-6 w-full text-lg font-medium cursor-pointer">
              Submit
            </button>
            <div className="text-center mt-5">
              <p className="text-gray-600 text-lg mb-4">
                It may take a minute to receive your code. Haven’t received it?{" "}
                <br />{" "}
                <span className="text-blue-600 cursor-pointer text-lg font-medium">
                  Resend a new code
                </span>{" "}
              </p>
              <p className="text-gray-600 text-lg">
                Remember Password?{" "}
                <span className="text-blue-600 cursor-pointer text-lg font-semibold">
                  Log in
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
