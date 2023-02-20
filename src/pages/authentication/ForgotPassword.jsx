import React, { useState } from "react";
import { Logo } from "../../assets";
import ForgotPasswordModal from "./components/ForgotPasswordModal";

const ForgotPassword = () => {
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState('')
  const handleForgotPassword = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  return (
    <>
    <ForgotPasswordModal 
    showModal={showModal}
    setShowModal={setShowModal}
    title={'Check your email'}
    body={`A 4-digit code has been sent to`}
    emails={`${email}`}
    button={'Open Mail'}
    font={<i class="fa-solid fa-envelope text-[#00BD56]"></i>}
    />
    {/* Forgot Password page */}
      <main className="w-full h-screen md:flex bg-[conic-gradient(from_142.8deg_at_58.75%_50%,_#44BF93_-56.25deg,_#4BCA84_37.5deg,_#0D6EFD_191.25deg,_#44BF93_303.75deg,_#4BCA84_397.5deg)]">
        <div className="hidden md:block w-full md:flex items-center hero">
          <div className="h-[582px] w-[92%] ml-auto flex items-center justify-center rounded-tl-3xl rounded-bl-3xl shadow-4xl bg-[conic-gradient(from_142.8deg_at_58.75%_50%,_#44BF93_-56.25deg,_#4BCA84_37.5deg,_#0D6EFD_191.25deg,_#44BF93_303.75deg,_#4BCA84_397.5deg)]">
            <div className="font-inter text-white text-center">
              <p className="font-bold text-5xl">Kodecamp LMS</p>
              <p className="text-lg mt-3">
                Learning has been made simple, interactive and fun.
              </p>
            </div>
          </div>
        </div>

        <div className="h-screen w-full bg-white flex items-center">
          <div className="relative md:h-[582px] md:w-[92%] mr-auto bg-inherit md:rounded-tr-3xl md:rounded-br-3xl md:shadow-3xl">

            <div className=" w-full overflow-clip absolute bg-gray-100 rounded-full h-1 w-[98%]">
              <div className="bg-green-500 h-1 rounded-tr-3xl rounded-br-3xl w-2/5"></div>
            </div>

            <div className="flex flex-col gap-[1.3rem] items-center text-center my-7">
                <div className="w-20 h-20 rounded-lg bg-transparent shadow-md mt-4 grid place-items-center">
                    <img src={Logo} alt="kodecamp-logo" />
                </div>

                <p className="font-medium text-[28px] text-[#303030]">
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
              <p className="text-center text-[18.2px] font-medium w-[82%] mx-auto leading-[22px]">
                Please enter your email address below for verification. A 4-digit code will be sent to your johndoe@gmail.com
              </p>

              <form onSubmit={handleForgotPassword} className="pt-6 flex flex-col gap-10">
                <div>
                  <label htmlFor="email" className="text-[#808080] text-[16px]">Email</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Type your email address"
                    className="w-full px-3 h-[54px] border-[1.5px] rounded-lg mt-1 border-[#808080]"
                  />
                </div>
                <button type="submit" className="bg-blue-ribbon-500 h-[54px] rounded-lg text-white">Send Code</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ForgotPassword;