import React from "react";


export const ProfileEdit = () => {
    return (
        <>
        <form action="" className="mt-4">
            <label htmlFor="" className="block text-[grey]">Full Name</label>
            <input type="text" name="text" className="md:py-1 px-1 border border-[grey] w-full md:w-96"/>
            <label htmlFor="" className="mt-3 block text-[grey]">Username</label>
            <input type="text" name="text" className="md:py-1 px-1 border border-[grey] w-full md:w-96"/>
            <label htmlFor="" className="mt-3 block text-[grey]">Email Address</label>
            <input type="text" name="text" className="md:py-1 px-1 border border-[grey] w-full md:w-96"/>
            <label htmlFor="" className="mt-3 block text-[grey]">Date of Birth</label>
            <input type="text" name="text" className="md:py-1 px-1 border border-[grey] w-full md:w-96"/>
            <label htmlFor="" className="mt-3 block text-[grey]">Gender</label>
            <input type="text" name="text" className="md:py-1 px-1 border border-[grey] w-full md:w-96"/>
            <label htmlFor="" className="mt-3 block text-[grey]">Phone Number</label>
            <input type="text" name="text" className="md:py-1 px-1 border border-[grey] w-full md:w-96"/>
            
        </form>
        <div className="flex mt-4 space-x-4">
            <button className="px-4 border border-[grey] text-sm py-1 rounded-md">Cancel</button>
            <button className="px-4 bg-blue-ribbon-500 text-white text-sm py-1 rounded-md">Save Changes</button>
        </div>
        </>
    )
}


export const ProfileEdittwo = () => {

}

