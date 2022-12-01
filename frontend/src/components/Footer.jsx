import facebook from '../img/facebook.svg'
import instagram from '../img/instagram.svg'
import twitter from '../img/twitter.svg'
import youtube from '../img/youtube.svg'
import pinterest from '../img/pinterest.svg'
import googlePlay from '../img/google-play.svg'
import appStore from '../img/app-store.svg'
import heart from '../img/heart.svg'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer__content">
                    <div className="footer__categories">
                        <div className="footer__help">
                            <div className="footer__text-white">
                                Help
                            </div>
                            <Link to='/deliveryreturns'>
                                <div className="footer__text-graywhite">
                                    Delivery and returns
                                </div>
                            </Link>
                            <Link to='/faq'>
                                <div className="footer__text-graywhite">
                                    FAQ
                                </div>
                            </Link>
                            <Link to='/trackorder'>
                                <div className="footer__text-graywhite">
                                    Track order
                                </div>
                            </Link>
                            <Link to='/contacts'>
                                <div className="footer__text-graywhite">
                                    Contacts
                                </div>
                            </Link>
                            <Link to='/blog'>
                                <div className="footer__text-graywhite">
                                    Blog
                                </div>
                            </Link>
                        </div>
                        <div className="footer__shop">
                            <div className="footer__text-white">
                                Shop
                            </div>
                            <Link to='/newarrivals'>
                                <div className="footer__text-graywhite">
                                    New arrivals
                                </div>
                            </Link>
                            <Link to='/trendingnow'>
                                <div className="footer__text-graywhite">
                                    Trending now
                                </div>
                            </Link>
                            <Link to='/sales'>
                                <div className="footer__text-graywhite">
                                    Sales
                                </div>
                            </Link>
                            <Link to='/brands'>
                                <div className="footer__text-graywhite">
                                    Brands
                                </div>
                            </Link>
                        </div>
                        <div className="footer__get-in-touch">
                            <div className="footer__text-white">
                                Get in touch
                            </div>
                            <div className="footer__text-call">
                                Call:
                                <span className="footer__call">
                                    (405) 555-0128
                                </span>
                            </div>
                            <div className="footer__text-email">
                                Email:
                                <span className="footer__email">
                                    hello@createx.com
                                </span>
                            </div>
                            <div className="footer__socials">
                                <div>
                                    <img src={facebook} alt="facebook" />
                                </div>
                                <div>
                                    <img src={instagram} alt="instagram" />
                                </div>
                                <div>
                                    <img src={twitter} alt="twitter" />
                                </div>
                                <div>
                                    <img src={youtube} alt="youtube" />
                                </div>
                                <div>
                                    <img src={pinterest} alt="pinterest" />
                                </div>
                            </div>
                        </div>
                        <div className="footer__download">
                            <div className="footer__text-white">
                                Download our app
                            </div>
                            <div className="footer__apps">
                                <div>
                                    <img src={googlePlay} alt="google-play" />
                                </div>
                                <div>
                                    <img src={appStore} alt="app-store" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__divider">
                    </div>
                    <div className="footer__down-text">
                        <div>
                            © All rights reserved. Made with
                        </div>
                        <img src={heart} alt="heart" />
                        <div>
                            by Createx Studio
                        </div>
                    </div>
                    <div className="footer__go-to-top">
                        <a href="#top">
                            Go to top
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer