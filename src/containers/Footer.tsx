import './styles/footer.scss';

const Footer = () => {
    return(
        <div className="footer">
            <h4>created by</h4>
            <h3>Patryk Chodacki</h3>
            <ul className='list'>
                <li className='list-item'><a href='mailto:chodacki.pc@gmail.com' target='_blank'>chodacki.pc@gmail.com</a></li>
                <li className='list-item'><a href='https://www.instagram.com/chodackipatryk/'>instagram@chodackipatryk</a></li>
            </ul>
            <h4 className='year'>2023</h4>
        </div>
    )
}

export default Footer;