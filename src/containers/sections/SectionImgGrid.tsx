import { ReactNode } from "react";
import { Img } from "../../components/Img/Img";
import { Image } from "../../types/types";

type Images = {
    images: string[]
}
const SectionImageGrid = ({images}: Images) => {
    return(
        <div className="section-img-grid">
            {images.forEach( (img, id): Image => {
                return(
                    <Img 
                        src={img} 
                        num={id} 
                        allowed={false}
                    />
                )
            })}
        </div>
    )
}

export default SectionImageGrid;