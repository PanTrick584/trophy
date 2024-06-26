import { useState } from 'react';
import { useContextProvider } from '../context/context';
import './styles/menu.scss'

const Menu = () => {
  const [showMenu, setShoweMenu] = useState(false)
  const context = useContextProvider();
  const language = context.language;
  const handleLang: (language: string) => void = context.handleLanguage;

  return (
    <div className={showMenu ? 'menu menu-show' : 'menu'}>
        <div className={showMenu ? 'menu-nav-btn btn-transform' : 'menu-nav-btn'} onClick={ () => setShoweMenu( prev => !prev )}>
          <div className='menu-nav-btn-item'></div>
          <div className='menu-nav-btn-item'></div>
          <div className='menu-nav-btn-item'></div>
        </div>
        <nav className={showMenu ? 'menu-nav' : 'menu-nav hide'}>
        <ul className='menu-nav-list'>
            <li className='menu-nav-list-item'>O Autorze</li>
            <li className='menu-nav-list-item'>Kontakt</li>
            <li className='menu-nav-list-item'>Media</li>
        </ul>
        </nav>
        <div onClick={() => handleLang(language)} className={showMenu ? 'language' : 'language hide'}>
            {language}
        </div>
    </div>
  )
}

export default Menu;