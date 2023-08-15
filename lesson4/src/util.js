import {createContext, useState} from "react";


export const CustomContext = createContext()

export const CustomContextWrapper = ({ children }) => {
    const [list, setlist] = useState([])
    const [isLoad, setIsLoad] = useState([])

    return(
        <CustomContext.Provider value={{list, setlist, isLoad}}>
            {children}
        </CustomContext.Provider>
    )
}