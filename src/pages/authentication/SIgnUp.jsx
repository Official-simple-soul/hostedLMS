import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo, Eye, Lock, Mail } from "../../assets";
import Good from "../../assets/images/good2.png";
import SignUpOne from "./components/SignUpOne";
import SignUpTwo from "./components/SignUpTwo";
import Signup2Modal from "./components/SignUpModal";
import Style from "./Login.module.css";

const SignUp = () => {
  const userInput = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
    age: 0,
    gender: "",
    track: "",
    experience: "",
    employment: "",
    education: "",
    how: "",
  };

  const [page, setPage] = useState(0);
  const [eye, setEye] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState(userInput);

  const handleInput = (e) => {
    //get user inputs
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //  console.log(formData)
  localStorage.setItem("userinfo", JSON.stringify(formData));

  //function to show modal
  const showModal = () => {
    setSuccess(true);
  }; 
  
  //function to show password
  const showPassword = () => {
    setEye(!eye);
  };

  //function to display form
  const PageDisplay = () => {
    if (page === 0) {
      return (
        <SignUpOne
          formData={formData}
          handleInput={handleInput}
          eye={eye}
          setEye={setEye}
          showPassword={showPassword}
        />
      );
    }
    if (page === 1) {
      return <SignUpTwo formData={formData} handleInput={handleInput} />;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  };

  return (
    <div className="">
      <div className="flex items-center">
        <div
          className={`${Style.col1_bg} h-screen w-[50%] hidden md:flex flex-col items-center justify-center pl-20`}
        >
          <div
            className={`${Style.box_shadow} h-[90%] w-full rounded-l-3xl flex flex-col items-center justify-center`}
          >
            <h2 className={`${Style.col1_heading} text-center`}>
              Kodecamp LMS
            </h2>
            <p className={`${Style.col1_para}`}>
              Learning has been made simple, interactive and fun.
            </p>
          </div>
        </div>
        <div
          className={`bg-white h-screen w-full md:w-[50%] flex flex-col items-center justify-center md:pr-20`}
        >
          <div
            className={`${Style.box_shadow} h-full md:h-[90%]  w-full md:rounded-r-3xl flex flex-col items-center px-4 ${Style.overflow}`}
          >
            <div className="flex flex-col gap-7 justify-center items-center">
              <div className="w-20 h-[80px] rounded-lg bg-transparent shadow-md mt-8 grid place-items-center">
                <img
                  src={Logo}
                  alt=""
                  className={`${Style.logo_shadow} bg-white rounded-lg p-3 m-auto`}
                />
              </div>
              {/* heading title */}
              <h2 className="text-[#303030] text-[28px] font-[500] leading-[36px] tracking-[1px]">
                Create account
              </h2>

              <div className="flex justify-center items-center w-[120px] text-[#ffffff] text-[18px] font-[500] leading-[22px]">
                <span
                  className={
                    page === 0
                      ? `w-[30px] h-[30px] bg-[#0D6EFD] flex justify-center items-center  rounded-[50%]`
                      : `w-[30px] h-[30px] bg-[#00BD56] flex justify-center items-center  rounded-[50%]`
                  }
                >
                  {page === 0 ? <>1</> : <img src={Good} alt="mark good" />}
                </span>
                <span className="w-[60px] h-[1px] bg-[#D9D9D9]"></span>
                <span
                  className={
                    page === 0
                      ? `w-[30px] h-[30px] bg-[#000000] flex justify-center items-center  rounded-[50%]`
                      : `w-[30px] h-[30px] bg-[#808080] flex justify-center items-center  rounded-[50%]`
                  }
                >
                  2
                </span>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex w-full md:w-[80%] justify-center mt-[10px] items-center flex-col"
            >
              <div className="w-full md:w-[100%]">
                {!success ? PageDisplay() : <Signup2Modal />}
              </div>
              <div className="w-[100%]">
                <button
                  type={page === 0 ? "button" : "submit"}
                  onClick={() => {
                    setPage((currPage) => currPage + 1) && setEye(!eye);
                  }}
                  className="text-[18px] font-[500] leading-[22px] tracking-[0.1px] mt-[40px] w-[100%] outline-[0] border border-solid rounded-[8px] h-[56px] bg-[#0D6EFD] text-[#ffffff]"
                >
                  {/* set onclick on create account */}
                  {page === 0 ? (
                    <p>Next</p>
                  ) : (
                    <p onClick={showModal}>Create Account</p>
                  )}
                </button>
                {/* show modal */}
                {/* { success && <Signup2Modal/>} */}
              </div>
              <p className="mb-[40px] mt-[24px]">
                Already have an account?{" "}
                <Link to={"/"} className="text-[blue]" href="">
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
