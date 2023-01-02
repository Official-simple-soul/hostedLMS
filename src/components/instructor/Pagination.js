import React from 'react'
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
    const pages = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }

  return ( 
    <div className='flex items-center justify-end mt-14'>
        <div className='flex gap-8 items-center'>
            <p 
                className={currentPage <= 1 ? "hidden" : "block text-xs text-[#585858] cursor-pointer"}
                onClick={() => setCurrentPage(currentPage - 1) }
            >
                Prev
            </p>
                
                    {console.log(pages)}
                    {pages && pages.map((page, index) =>{
                        return <p 
                                    key={index} 
                                    onClick={() => setCurrentPage(page)}
                                    className={currentPage === page ? "text-xs bg-[#0D6EFD] rounded py-4 px-5 text-center text-white" : "text-xs cursor-pointer"}
                                >
                                    {page}
                                </p>
                    })}
               
            <p 
                className={currentPage === pages[pages.length - 1] ? "hidden" : "block text-xs text-[#585858] cursor-pointer"}
                onClick={() => setCurrentPage(currentPage + 1) }
            >
                Next
            </p>

        </div>
    </div>
  )
}

export default Pagination