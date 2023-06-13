import { MyContextProvider } from '@/context/createContext'
import '@/styles/globals.scss'
export default function App({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
  ) 
}
