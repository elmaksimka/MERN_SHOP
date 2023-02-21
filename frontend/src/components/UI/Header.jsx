import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authorizingActions } from '../../app/isAuthorizing-slice'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import logo from '../../img/logo.svg'
import search from '../../img/search.svg'
import flagUsa from '../../img/flag-usa.svg'
import flagUA from '../../img/flag-ua.svg'
import flagRus from '../../img/flag-rus.png'
import profile from '../../img/profile.svg'
import heart from '../../img/heart.svg'
import cart from '../../img/cart.svg'
import badge1 from '../../img/badge1.svg'

function Header() {
    const ENG = 'Eng / $', UA = 'Ukr / ₴', RUS = 'Rus / ₽';
    const [countryLang, setCountryLang] = useState(ENG);

    const goToEngHandler = () => {
        setCountryLang(ENG);
    }

    const goToUkrHandler = () => {
        setCountryLang(UA);
    }

    const goToRusHandler = () => {
        setCountryLang(RUS);
    }

    const favouriteCounter = useSelector(state => state.favourite.favouriteCounter);
    const cartCounter = useSelector(state => state.cart.cartCounter);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const showLoginModalHandler = () => {
        // navigate('/');
        dispatch(authorizingActions.loggingIn());
    }

    const showRegisterModalHandler = () => {
        // navigate('/');
        dispatch(authorizingActions.registering());
    }

    const { user } = useSelector((state) => state.auth);

    return (
        <div className="header">
            <div className="topbar">
                <div className="topbar__content">
                    <div className="topbar__start topbar__text">
                        Available 24/7 at (405) 555-0128
                    </div>
                    <div className="topbar__categories">
                        <NavLink to='/deliveryreturns' className={({ isActive }) => (isActive ? "topbar__text_active" : "topbar__text")}>
                            Delivery and returns
                        </NavLink>
                        <NavLink to='/trackorder' className={({ isActive }) => (isActive ? "topbar__text_active" : "topbar__text")}>
                            Track order
                        </NavLink>
                        <NavLink to='/blog' className={({ isActive }) => (isActive ? "topbar__text_active" : "topbar__text")}>
                            Blog
                        </NavLink>
                        <NavLink to='/contacts' className={({ isActive }) => (isActive ? "topbar__text_active" : "topbar__text")}>
                            Contacts
                        </NavLink>
                    </div>
                    <div className="topbar__language">
                        <img className="topbar__img" src={countryLang === ENG ? flagUsa : countryLang === UA ? flagUA : countryLang === RUS ? flagRus : flagUsa} alt="flag" />
                        <div className="topbar__text">
                            {countryLang}
                        </div>
                        <DropdownButton
                            title=''
                        >
                            <Dropdown.Item onClick={goToEngHandler}>
                                <img src={flagUsa} alt="flag-usa" /> {ENG}
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={goToUkrHandler}>
                                <img src={flagUA} alt="flag-ua" /> {UA}
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={goToRusHandler}>
                                <img src={flagRus} alt="flag-rus" /> {RUS}
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className="topbar__login">
                        <div className="topbar__login__item">
                            {!user ? (
                                <>
                                    <img className="topbar__img" src={profile} alt="profile" />
                                    <Link to='/?mode=login' className="topbar__text" onClick={showLoginModalHandler}>
                                        Log in
                                    </Link>
                                    <span>
                                        /
                                    </span>
                                    <Link to='/?mode=register' className="topbar__text" onClick={showRegisterModalHandler}>
                                        Register
                                    </Link>
                                </>) : (
                                <>
                                    <span>
                                        Hello,
                                    </span>
                                    <NavLink to='/account'>
                                        {user.name}
                                    </NavLink>!
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainbar">
                <div className="mainbar__content">
                    <div className="mainbar__logo">
                        <NavLink to='/'>
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    <div className="mainbar__categories">
                        <NavLink to='/women' className={({ isActive }) => (isActive ? "mainbar__text_active" : "")}>
                            Women
                        </NavLink>
                        <NavLink to='/men' className={({ isActive }) => (isActive ? "mainbar__text_active" : "")}>
                            Men
                        </NavLink>
                        <NavLink to='/girls' className={({ isActive }) => (isActive ? "mainbar__text_active" : "")}>
                            Girls
                        </NavLink>
                        <NavLink to='/boys' className={({ isActive }) => (isActive ? "mainbar__text_active" : "")}>
                            Boys
                        </NavLink>
                        <NavLink to='/sales' className={({ isActive }) => (isActive ? "mainbar__text_active" : "mainbar__text_color_red")}>
                            Sales
                        </NavLink>
                    </div>
                    <form className="mainbar__form">
                        <input type="text" placeholder="Search for products..." />
                        <img className="mainbar__img" src={search} alt="search" />
                    </form>
                    <div className="mainbar__favourite">
                        <img className="mainbar__img" src={heart} alt="heart" />
                        <div className="mainbar__item">
                            {favouriteCounter}
                        </div>
                        <div className="mainbar__item">
                            &#124;
                        </div>
                        <div className="mainbar__item">
                            <img className="mainbar__img" src={cart} alt="cart" />
                        </div>
                        <div className="mainbar__item">
                            {cartCounter}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header