import React, { useState } from 'react'

export const Menu = () => {
  const [showMenu, setShoweMenu] = useState(false)

  // const menuStyle = {
  //   marginLeft: showMenu ? 0 : '-15%',
  //   backgroundColor: showMenu ? 'rgba(black,  .6)' : 'none'
  // }

  return (
    <div className={showMenu ? 'menu menu-show' : 'menu'}>
      <nav className='menu-nav'>
        <ul className='menu-nav-list'>
          <li className='menu-nav-list-item'>O Autorze</li>
          <li className='menu-nav-list-item'>Kontakt</li>
          <li className='menu-nav-list-item'>Media</li>
        </ul>
        <div className='menu-nav-btn' onClick={ () => setShoweMenu( prev => !prev )}>
          <div className='menu-nav-btn-item'></div>
          <div className='menu-nav-btn-item'></div>
          <div className='menu-nav-btn-item'></div>
        </div>
      </nav>
        <div></div>
        <div></div>
    </div>
  )
}
