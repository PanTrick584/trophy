import { Img } from "../components/Img/Img";

type HeaderProps = {
    headerImg: string;
    headerText: string
}

const Header = ({headerImg, headerText}: HeaderProps) => {
    return(
        <>
            <Img src={headerImg} num={''} allowed={false} />
            <h1>
                {headerText}
            </h1>
        </>
    )
}

export default Header;