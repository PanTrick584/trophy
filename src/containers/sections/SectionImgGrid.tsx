import { ReactNode } from "react";
import { Img } from "../../components/Img/Img";
import './styles/section-img-grid.scss';

type ImagesGrid = {
    images: string[],
    order: string
}

const SectionImageGrid = ({images, order}: ImagesGrid) => {
    return(
        <div className={`section-img-grid grid-${order}`}>
            {images.map( (img, id): ReactNode => {
                return(
                    <Img 
                        src={img}
                        num={id.toString()}
                    />
                )
            })}
        </div>
    )
}

export default SectionImageGrid;