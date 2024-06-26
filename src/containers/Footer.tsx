import './styles/footer.scss';

const Footer = () => {
    return(
        <div className="footer">
            <p className='footer-text-small'>created by</p>
            <h3 className='footer-header'>Patryk Chodacki</h3>
            <ul className='footer-list'>
                <li className='footer-list-item'><a className='footer-list-item-link' href='mailto:chodacki.pc@gmail.com' target='_blank'>chodacki.pc@gmail.com</a></li>
                <li className='footer-list-item'><a className='footer-list-item-link' href='https://www.instagram.com/chodackipatryk/'>instagram@chodackipatryk</a></li>
            </ul>
            <h4 className='footer-text-mid'>2023</h4>
        </div>
    )
}

export default Footer;