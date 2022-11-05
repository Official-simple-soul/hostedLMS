import React from "react";
import { Logo } from "../../assets";

const ForgotPassword = () => {
  return (
    <>
    {/* Forgot Password page */}
      <main className="w-full h-screen flex bg-[conic-gradient(from_142.8deg_at_58.75%_50%,_#44BF93_-56.25deg,_#4BCA84_37.5deg,_#0D6EFD_191.25deg,_#44BF93_303.75deg,_#4BCA84_397.5deg)]">
        <div className="w-full flex items-center hero">
          <div className="h-5/6 w-10/12 ml-auto flex items-center justify-center rounded-tl-3xl rounded-bl-3xl shadow-4xl bg-[conic-gradient(from_142.8deg_at_58.75%_50%,_#44BF93_-56.25deg,_#4BCA84_37.5deg,_#0D6EFD_191.25deg,_#44BF93_303.75deg,_#4BCA84_397.5deg)]">
            <div className="font-inter text-white text-center">
              <p className="font-bold text-5xl">Kodecamp LMS</p>
              <p className="text-lg mt-3">
                Learning has been made simple, interactive and fun.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-white flex items-center">
          <div className="relative h-5/6 w-10/12 mr-auto bg-inherit rounded-tr-3xl rounded-br-3xl shadow-3xl">

            <div className=" w-full overflow-clip absolute bg-gray-100 rounded-full h-1 w-[98%]">
              <div className="bg-green-500 h-1 rounded-tr-3xl rounded-br-3xl w-2/5"></div>
            </div>

            <div className="flex flex-col gap-2 items-center text-center my-7">
                <div className="w-20 h-20 rounded-lg bg-transparent shadow-md mb-4 grid place-items-center">
                    <img src={Logo} alt="kodecamp-logo" />
                </div>

                <p className="font-semibold text-2xl mb-4 text-[#303030]">
                    Forgot Password
                </p>

                <div className="w-2/5 flex text-white">
                    <div className="flex w-full items-center">
                        <p className="px-3 py-1 border-2 rounded-full bg-blue-ribbon-500">
                            1
                        </p>
                        <hr className="w-full" />
                    </div>

                    <div className="flex w-full items-center">
                        <p className="px-3 py-1 rounded-full bg-[#808080]">
                            2
                        </p>
                        <hr className="w-full" />
                    </div>

                    <div className="flex items-center">
                        <p className="px-3 py-1 rounded-full bg-[#808080]">
                            3
                        </p>
                    </div>
                </div>
                </div>

            <div className="px-10 text-lg font-inter text-gray-600">
              <p className="text-center text-[18.2px] font-semibold w-full">
                Please enter your email address below for verification. A 4-digit code will be sent to your johndoe@gmail.com
              </p>

              <form className="pt-6 flex flex-col gap-4">
                <div>
                  <label htmlFor="email" className="text-[#808080]">Email</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Type your email address"
                    className="w-full px-3 h-[50px] border-[1.5px] rounded-lg mt-1 border-[#808080]"
                  />
                </div>
                <button type="submit" className="bg-blue-ribbon-500 h-[50px] rounded-lg text-white">Send Code</button>
                
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ForgotPassword;