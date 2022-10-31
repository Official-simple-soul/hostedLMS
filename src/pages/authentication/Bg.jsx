import React from 'react'

const Bg = () => {
  return (
    <>
        <div className='relative'>
            <div className="grid grid-cols-2 w-full h-screen">
                <div className='bg-[conic-gradient(from_142.8deg_at_58.75%_50%,_#44BF93_-56.25deg,_#4BCA84_37.5deg,_#0D6EFD_191.25deg,_#44BF93_303.75deg,_#4BCA84_397.5deg)]'></div>
                <div className='bg-white'></div>
            </div>

            <div className="absolute w-10/12 m-auto grid grid-cols-2 inset-0 items-center h-[562px]">
                <div className='bg-[conic-gradient(from_142.8deg_at_58.75%_50%,_#44BF93_-56.25deg,_#4BCA84_37.5deg,_#0D6EFD_191.25deg,_#44BF93_303.75deg,_#4BCA84_397.5deg)] shadow-[-15px_15px_24px_rgba(22, 51, 102, 0.25)] h-full '>
                    <div className="flex flex-col items-center justify-end">
                        <h1 className='text-4xl font-bold text-white'>Kodecamp LMS</h1>
                        <p className=' text-white'>Learning has been made simple, interactive and fun.</p>
                    </div>
                    <h1 className='py-10 px-3'>Hello</h1>
                </div>
                <div className='bg-white h-full shadow-[15px_15px_24px_rgba(22, 51, 102, 0.25)] '>
                    <h1 className='py-10 px-3'>Hello</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Bg