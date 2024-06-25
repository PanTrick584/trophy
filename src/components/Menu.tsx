import React, { useContext, useState } from 'react'
import { useContextProvider } from '@/context/createContext'

export const Menu = () => {
  const [showMenu, setShoweMenu] = useState(false)
  const context = useContextProvider();
  const language = context.language;
  const handleLang = context.setLanguage;

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
        <div onClick={() => handleLang( prev => prev === 'pl' ? 'en' : 'pl')} className={showMenu ? 'language' : 'language hide'}>
            {language}
        </div>
    </div>
  )
}
