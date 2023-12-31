import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import PasswordChecklist from 'react-password-checklist';
import Modal from './Modal';

const settingsNav = [
  { title: 'Change Password', id: 1 },
  { title: 'Notifications', id: 2 },
  { title: 'Other Settings', id: 3 },
];

const Settings = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [other, setOther] = useState(settingsNav[0].title);
  const [showModal, setShowModal] = useState(false);
  const [valid, setValid] = useState();
  const [match, setMatch] = useState(true);
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleNav = (e) => {
    setOther(e.currentTarget.innerHTML);
  };

  useEffect(() => {
    if (currentPassword !== '' && currentPassword === password) {
      setMatch(false);
    } else setMatch(true);
  }, [currentPassword, password]);

  const clearInput = () => {
    setCurrentPassword('');
    setPassword('');
    setPassword1('');
  };

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className="flex justify-center">
        <div className="content w-full">
          <h1 className="mb-4">Settings</h1>
          <main className="bg-white rounded-lg py-8 px-3 md:p-8 text-[#585858]">
            <div className="flex justify-start items-start space-x-10">
              {settingsNav.map((e) => (
                <h1
                  key={e.id}
                  className={`mb-4 cursor-pointer ${
                    other !== e.title
                      ? 'text-blue-ribbon-500'
                      : ' text-[grey] border-b border-black pb-1 w-fit'
                  }`}
                  onClick={handleNav}
                >
                  {e.title}
                </h1>
              ))}

              {/* <h1 className={`mb-4 cursor-pointer ml-8 ${other?'text-blue-ribbon-500':'text-[grey] border-b border-black pb-1 w-fit'}`} onClick={handleOther}>Other Settings</h1> */}
            </div>
            {other === 'Change Password' ? (
              <form action="" onSubmit={handleSubmit}>
                <div className="rows grid grid-cols-3">
                  <div className="col col-span-3 md:col-span-2">
                    <label htmlFor="" className="text-[#808080]">
                      Current Password
                    </label>
                    <div className="current relative">
                      <input
                        type={show ? 'text' : 'password'}
                        required
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder="Type your current password"
                        className={`px-3 py-2 border ${
                          match ? 'border-[#808080]' : 'border-[red] text-[red]'
                        } w-full mt-3 mb-4`}
                      />
                      <div
                        className="eye absolute text-3xl top-6 right-5 cursor-pointer"
                        onClick={() => setShow(!show)}
                      >
                        {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                      </div>
                    </div>
                    <p
                      className={`${
                        match ? 'hidden' : 'block'
                      } text-sm text-[red] mb-2`}
                    >
                      Current password cannot match new password
                    </p>
                    <label htmlFor="" className="text-[#808080]">
                      New Password
                    </label>
                    <div className="current relative">
                      <input
                        type={show1 ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Type your current password"
                        className={`px-3 py-2 border ${
                          match ? 'border-[#808080]' : 'border-[red] text-[red]'
                        } w-full mt-3 mb-4`}
                      />
                      <div
                        className="eye absolute text-3xl top-6 right-5 cursor-pointer"
                        onClick={() => setShow1(!show1)}
                      >
                        {show1 ? <AiFillEyeInvisible /> : <AiFillEye />}
                      </div>
                    </div>
                    <label htmlFor="" className="text-[#808080]">
                      Confirm Password
                    </label>
                    <div className="current relative">
                      <input
                        type={show2 ? 'text' : 'password'}
                        required
                        value={password1}
                        onChange={(e) => setPassword1(e.target.value)}
                        placeholder="Type your current password"
                        className="px-3 py-2 border border-[#808080] w-full mt-3 mb-4"
                      />
                      <div
                        className="eye absolute text-3xl top-6 right-5 cursor-pointer"
                        onClick={() => setShow2(!show2)}
                      >
                        {show2 ? <AiFillEyeInvisible /> : <AiFillEye />}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4 flex justify-start items-center">
                  <input
                    type="button"
                    value="cancel"
                    onClick={clearInput}
                    className="px-8 border border-[#808080] mr-6"
                  />

                  <input
                    type="submit"
                    onClick={() => setShowModal(!showModal)}
                    disabled={!valid}
                    className={`px-8 ${
                      !valid ? 'bg-[#D6E6FF]' : 'bg-blue-ribbon-500'
                    } text-white`}
                  />
                </div>
                <PasswordChecklist
                  rules={[
                    'minLength',
                    'specialChar',
                    'number',
                    'capital',
                    'match',
                  ]}
                  minLength={8}
                  value={password}
                  valueAgain={password1}
                  onChange={(isValid) => {
                    setValid(isValid);
                  }}
                />
              </form>
            ) : other === 'Other Settings' ? (
              <>
                <div className="flex justify-between items-center w-[70%] mt-7">
                  <div className="left">
                  <h1>
                    Dark mode{' '}
                    <span className="bg-[#CCF2DD] rounded-xl  ml-2 py-1 px-2 text-sm">
                      Coming Soon
                    </span>
                  </h1>
                  <p className='mt-3'>
                     Light colour text presented against a dark screen
                    </p>
                  </div>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      disabled
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#808080]"></div>
                  </label>
                </div>
                <div className="mt-8 flex justify-between items-center w-[70%]">
                  <div className="left">
                    <h1>
                      Two - step verification{' '}
                      <span className="bg-green-300 px-3 py-1 rounded-full ml-6">
                        Commin soon
                      </span>
                    </h1>
                    <p className='mt-3'>
                      A second log in step odds an extra layer of security on your account
                    </p>
                  </div>
                  <div className="right">
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        disabled
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#808080]"></div>
                    </label>
                  </div>
                </div>
                <div className="flex mt-10 space-x-4">
                  <button
                    type=""
                    className="cursor-pointer px-6 py-1 border border-grey rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="cursor-pointer px-6 py-1 bg-blue-ribbon-500 text-white rounded-lg"
                  >
                    Save changes
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between items-center w-[70%]">
                  <div className="left">
                    <h1>
                      Updates and activity{' '}
                      <span className="bg-green-300 px-3 py-1 rounded-full ml-6">
                        Commin soon
                      </span>
                    </h1>
                    <p className='mt-3'>
                      You'll be notified when anyone posts a new lesson or task
                    </p>
                  </div>
                  <div className="right">
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        disabled
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#808080]"></div>
                    </label>
                  </div>
                </div>
                <div className="flex justify-between items-center w-[70%] mt-8">
                  <div className="left">
                    <h1>Task submission</h1>
                    <p>You'll be notified when anyone submit a task</p>
                  </div>
                  <div className="right">
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        disabled
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#808080]"></div>
                    </label>
                  </div>
                </div>
                <div className="flex mt-10 space-x-4">
                  <button
                    type=""
                    className="cursor-pointer px-6 py-1 border border-grey rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="cursor-pointer px-6 py-1 bg-blue-ribbon-500 text-white rounded-lg"
                  >
                    Save changes
                  </button>
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default Settings;
