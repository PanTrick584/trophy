import Container from './containers/Container';
import { MyContextProvider } from './context/context';

function App() {
    return (
        <MyContextProvider>
            <Container />
        </MyContextProvider>
    )
}

export default App
