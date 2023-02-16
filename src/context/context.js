import React, { useContext, useState } from 'react'



const RestContext = React.createContext()

const ContextProvider = ({children}) => {
    const [bookmarked, setBookmarked] = useState([]);
    const [studentSearchInput, setStudentSearchInput] = useState('');
   
    return <RestContext.Provider value={{bookmarked, setBookmarked, studentSearchInput, setStudentSearchInput}}>
                {children}
            </RestContext.Provider>
}

const useGlobalContext = () => {
    return useContext(RestContext)
}

export {useGlobalContext, ContextProvider}