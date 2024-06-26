import { ReactNode, createContext, useContext, useState } from "react";

interface MyContextType {
    text: string,
    handleText: (text: string) => void,
    language: string,
    handleLanguage: (language: string) => void
}

interface MyContextProviderProps {
    children: ReactNode;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const useContextProvider = () => {
	const context = useContext(MyContext);
	if (!context) throw new Error("You forgot something");
	return context;
};

export const MyContextProvider: React.FC<MyContextProviderProps> = ({children}) => {
    const [text, setText] = useState('');
    const [language, setLanguage] = useState('en');

    const handleText = () => setText(text)
    const handleLanguage = () => setLanguage(prev => prev === 'pl' ? 'en' : 'pl')

    return (
        <MyContext.Provider 
            value={{
                text, 
                handleText,
                language,
                handleLanguage
            }}>
            {children}
        </MyContext.Provider>
    )
}