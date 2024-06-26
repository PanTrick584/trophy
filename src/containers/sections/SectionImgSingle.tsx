import { Img } from "../../components/Img/Img";
import { Image } from "../../types/types";
import './styles/section-img-single.scss'

const SectionImgSingle = ({src, num}: Image) => {
    return(
        <div className="section-img-single">
            <Img 
                src={src} 
                num={num} 
                allowed={false}
            />
        </div>
    )
}

export default SectionImgSingle;