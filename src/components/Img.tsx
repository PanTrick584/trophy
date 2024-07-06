import { useEffect, useState } from "react";
import './styles/img.scss';

type ImageProps ={
    src: string;
    num: string;
    allowed?: boolean;
}

export const Img = ({src, num, allowed = true}: ImageProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMobile, setMobile] = useState<boolean>(false);

  useEffect(() =>  window.innerWidth < 768 ? setMobile(true) : setMobile(false), [])

//   const styleImg: React.CSSProperties = {
//     visibility: isVisible ? 'visible' : 'hidden',
//     opacity: isVisible ? 1 : 0
//   }

  const pointer: React.CSSProperties = {
    cursor: allowed ? 'pointer' : 'default'
  }
  
  return (
    <div 
        className={`image-box image-box-${num}`} 
         style={pointer} 
    >
        <img
            onClick={() => setIsVisible(prev => allowed && !prev)}
            className="image-item"
            src={`img/${isMobile ? 'mobile/' : ''}${src}`}
            alt="/"
            loading="lazy"
        />
        {isVisible &&
            <div
                onClick={() => setIsVisible(prev => allowed && !prev)}
                className="image-popup"  
            >
                <img
                    className="image-item" 
                    src={`img/${isMobile ? 'mobile/' : ''}${src}`}
                    alt="/"
                    loading="lazy"
                />
            </div>
        }
    </div>
  )
}
