import { ReactNode, createContext, useContext, useState } from "react";

interface MyContextType {

}

interface MyContextProviderProps {
    children: ReactNode;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyContextProvider: React.FC<MyContextProviderProps> = ({children}) => {
    const [text, setText] = useState('');
    const [language, setLanguage] = useState('en');

    return (
        <MyContext.Provider 
            value={{
                text, 
                setText,
                language,
                setLanguage
            }}>
            {children}
        </MyContext.Provider>
    )
}

export const useContextProvider = () => {
	const state = useContext(MyContext);
	if (!state) throw new Error("You forgot CartStateContextProvider");
	return state;
};