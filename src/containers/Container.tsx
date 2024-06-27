import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';
import { useContextProvider } from '../context/context';

import './styles/container.scss';
import Main from './Main';

const Container = () => {
    const {language} = useContextProvider();

  return (
    <div className='container'>
        <div className="container-layout">
            <Menu />
            <Header
                headerImg={'header-1.jpg'}
                headerText={language === 'pl' ? 'Trofeum' : 'Trophy'}
            />
            <Main />
            <Footer />
        </div>
    </div>
  )
}

export default Container