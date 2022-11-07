import React from 'react'
import Sidebar from './Sidebar'

const StudentPageWrapper = ({ children }) => {
  return (
    <div>
        <div className="flex items-stretch mt-0 gap-4">
            <div>
                <div id="sidebar">
                    <Sidebar />
                </div>
            </div>
            <div className="main-content w-100 h-screen">{children}</div>
        </div>
    </div>
  )
}

export default StudentPageWrapper