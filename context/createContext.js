import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({children}) => {
    const [text, setText] = useState('');

    return (
        <MyContext.Provider 
            value={{
                text, 
                setText
            }}>
            {children}
        </MyContext.Provider>
    )
}