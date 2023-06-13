import React from 'react'

export const Header = ({src, headerName, sectionNum, headerNum}) => {
  return (
    <div style={{backgroundImage: `url(img/${src})`}} className={`section section-${sectionNum} header header-${headerNum}`}>
       {headerName && <h1 className="header-h-one">{headerName}</h1>}
    </div>
  )
}