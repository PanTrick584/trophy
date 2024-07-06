import SectionImgGrid from "./sections/SectionImgGrid";
import SectionImgSingle from "./sections/SectionImgSingle";
import SectionText from "./sections/SectionText";
import { textTranslations } from "../context/data/texts";

const Main = () => {
    const grid_1 = [
        'grand-1.jpg',
        'grand-2.jpg',
        'grand-3.jpg',
        'grand-4.jpg'
    ]

    const grid_2 = [
        'fish-1.jpg',
        'fish-2.jpg',
        'fish-3.jpg',
        'fish-4.jpg',
        'fish-8.jpg'
    ]

    const grid_3 = ['fish-6.jpg', 'fish-7.jpg', 
    'fish-5.jpg']

    const grid_4 = ['museum-pic-0-1.jpg','found-28.jpg', 'museum-pic-3-1.jpg', 'museum-pic-8-1.jpg', 'found-16.jpg', 'museum-pic-4-1.jpg','found-2.jpg', 'museum-pic-5-1.jpg', 'museum-pic-7-1.jpg', 'museum-pic-1-1.jpg']

    // const grid_5 = []

    const grid_6 = ['found-5.jpg','piwnica-7.jpg', 'found-9.jpg', 'piwnica-1a.jpg']

    const grid_7 = [
        'piwnica-9.jpg',
        'piwnica-2a.jpg',
        'found-6.jpg',
        'found-8.jpg'
    ]

    const grid_8 = [
        'found-19.jpg',
        'found-18.jpg',
        'found-1.jpg'
        
        
    ]

    const grid_9 = [
        'found-13.jpg',
        'found-15.jpg',
        'found-25.jpg'
    ]

    const grid_10 = [
        'found-29.jpg',
        'piwnica-8.jpg',
        'found-26.jpg',
        'museum-pic-2-1.jpg'
    ]

    const grid_11 = [
        'found-22.jpg',
        'found-12.jpg',
        'found-17.jpg'
    ]

    const grid_12 = [
        'piwnica-6.jpg',
        'found-21.jpg',
        'found-23.jpg'
    ]

    return(
        <div className="main">
            <SectionText
                text={textTranslations.text_1} />
            <SectionImgGrid
                images={grid_1}
                order="1"
            />
            <SectionText 
                text={textTranslations.text_2}/>
            <SectionImgGrid
                images={grid_2}
                order="2"
            />
            <SectionImgGrid
                images={grid_3} 
                order="3"
            />
            <SectionText
                text={textTranslations.text_3} />
            <SectionImgSingle
                src="header-2.jpg"
                num="1"
            />
            <SectionImgGrid
                images={grid_4}
                order="4"
            />
            <SectionText
                text={textTranslations.text_4} />
            <SectionImgGrid
                images={grid_6}
                order="6"
            />
            <SectionImgSingle
                src="header-3.jpg"
                num="2"
            />
            <SectionImgGrid
                images={grid_7}
                order="7"
            />
            <SectionText
                text={textTranslations.text_5} />
            <SectionImgGrid
                images={grid_8}
                order="8"
            />
            <SectionImgGrid
                images={grid_9}
                order="9"
            /> 
            <SectionImgGrid
                images={grid_10}
                order="10"
            />
            <SectionImgGrid
                images={grid_11}
                order="11"
            />
            <SectionImgGrid
                images={grid_12}
                order="12"
            />
        </div>
    )
}

export default Main;