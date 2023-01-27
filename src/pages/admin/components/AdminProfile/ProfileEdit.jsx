import React from 'react';

export const ProfileEdit = ({ setEditOption }) => {
  return (
    <>
      <form action="" className="mt-4">
        <div className="md:flex justify-between items-center md:space-x-4">
          <div className="left md:w-[50%]">
            <label htmlFor="" className="block text-[grey]">
              Full Name
            </label>
            <input
              type="text"
              name="text"
              className="md:py-1 px-1 border border-[grey] w-full md:w-full"
            />
          </div>
        </div>
        <div className="my-6 md:flex justify-between items-center md:space-x-4">
          <div className="left md:w-[50%]">
            <label htmlFor="" className="block text-[grey]">
              Last Name
            </label>
            <input
              type="text"
              name="text"
              className="md:py-1 px-1 border border-[grey] w-full md:w-full"
            />
          </div>
        </div>
        <div className="my-6 md:flex justify-between items-center md:space-x-4">
        <div className="left md:w-[50%]">
            <label htmlFor="" className="block text-[grey]">
              User Name
            </label>
            <input
              type="text"
              name="text"
              className="md:py-1 px-1 border border-[grey] w-full md:w-full"
            />
          </div>
        </div>
        <div className="my-6 md:flex justify-between items-center md:space-x-4">
        <div className="right md:w-[50%]">
            <label htmlFor="" className="block text-[grey]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="md:py-1 px-1 border border-[grey] w-full md:w-full"
            />
          </div>
        </div>
        <div className="my-6 md:flex justify-between items-center md:space-x-4">
        <div className="right md:w-[50%]">
            <label htmlFor="" className="block text-[grey]">
              Phone Number
            </label>
            <input
              type="tel"
              name="tel"
              className="md:py-1 px-1 border border-[grey] w-full md:w-full"
            />
          </div>
        </div>


       
      </form>
      <div className="flex mt-4 space-x-4">
        <button
          className="px-4 border border-[grey] text-sm py-1 rounded-md"
          onClick={() => setEditOption(false)}
        >
          Cancel
        </button>
        <button className="px-4 bg-blue-ribbon-500 text-white text-sm py-1 rounded-md">
          Save Changes
        </button>
      </div>
    </>
  );
};

export const ProfileEdittwo = () => {};
