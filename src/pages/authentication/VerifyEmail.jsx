import { useEffect, useState } from "react";
import { Logo, Tick, Time } from "../../assets";
import Otp from "../../components/login/Otp";
import { Link } from "react-router-dom";
const VerifyEmail = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const hoursMinSecs = { initialMinute: 2, initialSeconds: 0 };
  const { initialMinute = 0, initialSeconds = 0 } = hoursMinSecs;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="h-screen max-w-screen md:flex">
      <div className="hidden md:block md:pt-[83px] md:w-1/2 h-screen flex justify-center items-center bg-auth pl-10 py-4">
        <div className="w-full xl:h-[581px] h-[635px] bg-transparent flex justify-center items-center rounded-l-3xl shadow-2xl">
          <div className="text-center text-white">
            <h2 className="text-5xl font-bold text-white mb-2">
              Kodecamp LMS
            </h2>
            <p className="text-lg font-normal text-white">
              Learning has been made simple, interactive and fun.
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center md:pr-10">
        <span className="w-2/3 h-[3px] bg-green-500 "></span>
        <div className="w-full xl:h-[578px] h-[635px] flex flex-col md:rounded-r-3xl md:shadow-2xl px-6">
          <div className="grid place-items-center mx-auto text-center my-6">
            <div className="w-20 h-20 rounded-lg bg-transparent shadow-md mb-4 grid place-items-center">
              <img src={Logo} alt="kodecamp-logo" />
            </div>
            <h2 className="text-[28px] font-medium mb-3">Verify email</h2>
            <div className="flex my-4 isolate">
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
              <span className="w-8 h-8 rounded-full flex justify-center items-center bg-[#808080]">
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
              {minutes === 0 && seconds === 0 ? (
                <p className="text-sm ml-1"> 2:00 </p>
              ) : (
                <p className="text-sm ml-1">
                  {" "}
                  {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </p>
              )}
            </div>
            <Link to={'/forgot-password/new-password'}><button className="bg-blue-600 rounded-lg text-white h-[54px] px-6 w-full text-lg font-medium cursor-pointer">
              Submit
            </button>
            </Link>
            <div className="text-center mt-5">
              <p className="text-gray-600 text-lg mb-4">
                It may take a minute to receive your code. Haven’t received it?{" "}
                <br />{" "}
                <span className="text-blue-600 cursor-pointer text-lg font-medium">
                  Resend a new code
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
