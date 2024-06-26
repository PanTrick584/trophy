import SectionImgGrid from "./sections/SectionImgGrid";
import SectionImgSingle from "./sections/SectionImgSingle";
import SectionText from "./sections/SectionText";
import { textTranslations } from "../context/data/texts";

const Main = () => {
    return(
        <div className="main">
            <SectionText text={textTranslations.text_1}/>
            <SectionImgGrid />
            <SectionText text={textTranslations.text_2}/>
            <SectionImgGrid />
            <SectionImgGrid />
            <SectionText text={textTranslations.text_3}/>
            <SectionImgSingle src="header-2.jpg" num="one"/>
            <SectionImgGrid />
            <SectionImgGrid />
            <SectionText text={textTranslations.text_4}/>
            <SectionImgGrid />
            <SectionImgGrid />
            <SectionImgSingle src="header-3.jpg" num="two"/>
            <SectionImgGrid />
            <SectionText text={textTranslations.text_5}/>
            <SectionImgGrid />
            <SectionImgGrid />
            <SectionImgGrid />
            <SectionImgGrid />
            <SectionImgGrid />
        </div>
    )
}

export default Main;