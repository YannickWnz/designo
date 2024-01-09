import { Link } from 'react-router-dom'

import './Footer.scss'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-nav">
                    <div className="logo-wrapper">
                        <Link to='/' ><img src="../assets/shared/desktop/logo-light.png" alt="" /></Link>
                    </div>
                    <div className={`nav-links-wrapper`}>
                        <ul>
                            <li><Link to='/company'>OUR COMPANY</Link></li>
                            <li><Link to='/locations'>LOCATIONS</Link></li>
                            <li><Link to='/contact'>CONTACT</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="infos">
                    <div className="address">
                        <h3>Designo Central Office</h3>
                        <p>3886 Wellington Street</p>
                        <p>Toronto Ontario M9C 3J5</p>
                    </div>
                    <div className="contact">
                        <h3>Contact Us (Central Office)</h3>
                        <p>P: +1 253-865-8967</p>
                        <p>M: contact@designo.co</p>
                    </div>
                    <div className="socials">
                        <a href='#'> <img src="../assets/shared/desktop/icon-facebook.svg" alt="" /> </a>
                        <a href='#'> <img src="../assets/shared/desktop/icon-youtube.svg" alt="" /> </a>
                        <a href='#'> <img src="../assets/shared/desktop/icon-twitter.svg" alt="" /> </a>
                        <a href='#'> <img src="../assets/shared/desktop/icon-pinterest.svg" alt="" /> </a>
                        <a href='#'> <img src="../assets/shared/desktop/icon-instagram.svg" alt="" /> </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}