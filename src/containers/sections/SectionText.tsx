import { Translations } from "../../types/types";
import { useContextProvider } from '../../context/context';
import './styles/section-text.scss'

interface SectionTextProp {
    text: Translations
}

const SectionText = ({text}: SectionTextProp) => {
    const {language} = useContextProvider();
    const translatedText: string = text[language] || 'Translation not available';;

    return(
        <div className="section-text">
            {translatedText}
        </div>
    )
}

export default SectionText;