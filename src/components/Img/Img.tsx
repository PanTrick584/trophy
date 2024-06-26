import { useEffect, useState } from "react";

type ImageProps ={
    src: string;
    num: string;
    allowed?: boolean;
}

export const Img = ({src, num, allowed = true}: ImageProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMouseOver, setMouseOver] = useState(false)
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    window.innerWidth < 768 ? setMobile(true) : setMobile(false) 
  },[])

  const styleImg = {
    visibility: isVisible ? 'visible' : 'hidden',
    opacity: isVisible ? 1 : 0
  }

  const pointer = {
    cursor: allowed ? 'pointer' : 'default'
  }

  const overlay = {
    position: 'absolute',
    top: 0,
    left: 0,
    visibility: isMouseOver && allowed ? 'visible' : 'hidden',
    backgroundColor: 'rgba(0, 0, 0, .2)',
    width: '100%',
    height: '100%'
  }
  
  return (
    <div className={`image-box image-box-${num}`} 
         style={pointer} 
        //  onMouseEnter={() => setMouseOver(prev => !prev)}
         >
        <img onClick={() => setIsVisible(prev => allowed && !prev)}
             className="image-item" src={`img/${isMobile ? 'mobile/' : ''}${src}`}
             alt="/" />
        <div onClick={() => setIsVisible(prev => allowed && !prev)}
             className="image-popup"  
             style={styleImg}>
          <img className="image-item" 
               src={`img/${isMobile ? 'mobile/' : ''}${src}`}
               alt="/" />
        </div>
        <div className="image-overlay" style={overlay}></div>
    </div>
  )
}
