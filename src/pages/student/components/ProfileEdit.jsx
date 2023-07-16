import React from "react";

export const ProfileEdit = ({ setEditOption, updateData, handleInput, handleSubmit }) => {
  return (
    <>
      <form action="" className="mt-4" onSubmit={handleSubmit}>
        <label htmlFor="" className="block text-[grey]">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={updateData.name}
          onChange={handleInput}
          className="md:py-1 px-1 border border-[grey] w-full md:w-96"
        />
        <label htmlFor="" className="mt-3 block text-[grey]">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={updateData.username}
          onChange={handleInput}
          className="md:py-1 px-1 border border-[grey] w-full md:w-96"
        />
        <label htmlFor="" className="mt-3 block text-[grey]">
          Email Address
        </label>
        <input
          type="text"
          name="email"
          value={updateData.email}
          disabled
          className="md:py-1 px-1 border border-[grey] w-full md:w-96"
        />
        <label htmlFor="" className="mt-3 block text-[grey]">
          Date of Birth
        </label>
        <input
          type="text"
          name="dob"
          value={updateData.dob}
          disabled
          className="md:py-1 px-1 border border-[grey] w-full md:w-96"
        />
        <label htmlFor="" className="mt-3 block text-[grey]">
          Gender
        </label>
        <input
          type="text"
          name="gender"
          value={updateData.gender}
          disabled
          className="md:py-1 px-1 border border-[grey] w-full md:w-96"
        />
        <label htmlFor="" className="mt-3 block text-[grey]">
          Phone Number
        </label>
        <input
          type="text"
          name="phone"
          value={updateData.phone}
          onChange={handleInput}
          className="md:py-1 px-1 border border-[grey] w-full md:w-96"
        />
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
      </form>
    </>
  );
};

export const ProfileEdittwo = ({ setEditOption, updateData, handleInput, handleSubmit }) => {
  return (
    <>
      <form action="" className="mt-4" onSubmit={handleSubmit}>
        <label htmlFor="" className="block text-[grey]">
          Track
        </label>
        <input
          type="text"
          name="track"
          value={updateData.track}
          disabled
          className="md:py-1 px-1 border border-[grey] w-full md:w-96"
        />
        <label htmlFor="" className="mt-3 block text-[grey]">
          Experience Level
        </label>
        <input
          type="text"
          name="experience"
          value={updateData.experience}
          disabled
          className="md:py-1 px-1 border border-[grey] w-full md:w-96"
        />
        <label htmlFor="" className="mt-3 block text-[grey]">
          Employment Status
        </label>
        <select
          className="signup__form-input select w-full md:w-96 h-[50px] rounded-lg p-2 border border-gray-300 bg-white opacity-60"
          name="employment"
          id="employment-select"
          onChange={handleInput}
          value={updateData.employement}
        >
          <option value="">Select employment status</option>
          <option value="student">Student</option>
          <option value="unemployed">Unemployed</option>
          <option value="selfemployed">Self employed</option>
          <option value="fulltime">Full Time </option>
          <option value="parttime">Part Time</option>
        </select>
        <label htmlFor="" className="mt-3 block text-[grey]">
          Educational Qualification
        </label>
        <select
          className="signup__form-input select w-full md:w-96 h-[50px] rounded-lg p-2 border border-gray-300 bg-white opacity-60"
          name="education"
          id="education-select"
          onChange={handleInput}
          value={updateData.education}
        >
          <option value="">Select your highest level of education</option>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="graduate">Graduate</option>
          <option value="postgrad">Post Graduate</option>
        </select>
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
      </form>
    </>
  );
};
