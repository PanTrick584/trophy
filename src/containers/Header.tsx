import { Img } from "../components/Img/Img";
import './styles/header.scss';

type HeaderProps = {
    headerImg: string;
    headerText: string;
}

const Header = ({headerImg, headerText}: HeaderProps) => {
    return(
        <div className="header">
            <Img src={headerImg} num={''} allowed={false} />
            <h1 className="header-h1">
                {headerText}
            </h1>
        </div>
    )
}

export default Header;