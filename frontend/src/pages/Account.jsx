import profile from '../img/profile.svg'
import bag from '../img/bag.svg'
import heart from '../img/heart.svg'
import eye from '../img/eyes.svg'
import star from '../img/star.svg'
import logout from '../img/logout.svg'
import deleteAcc from '../img/delete.svg'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

function AccountPage() {
    const location = useLocation();
    let category = location.pathname.slice(1);

    if (category !== 'account') {
        category = category.split('/')[1].replace('_', ' ');
    }

    const { user } = useSelector((state) => state.auth);
    const favouriteCounter = useSelector(state => state.favourite.favouriteCounter);

    return (
        <div className="account">
            <div className="account__content">
                <div className="account__menu">
                    <div className="account__main-data">
                        <span className="account__name">
                            {user.name}
                            {/* Annette Black */}
                        </span>
                        <span className="account__email">
                            {user.email}
                            {/* annetteb@example.com */}
                        </span>
                    </div>
                    <NavLink to='profile' className={({ isActive }) => (isActive ? "account__my-profile account_active" : "account__my-profile")}>
                        <img src={profile} alt="my-profile" />
                        My profile
                    </NavLink>
                    <NavLink to='orders' className={({ isActive }) => (isActive ? "account__my-orders account_active" : "account__my-orders")}>
                        <img src={bag} alt="my-orders" />
                        My orders
                    </NavLink>
                    <NavLink to='wishlist' className={({ isActive }) => (isActive ? "account__wishlist account_active" : "account__wishlist")}>
                        <img src={heart} alt="wishlist" />
                        Wishlist
                        <span className="account__wishlist__quantity">
                            {favouriteCounter}
                        </span>
                    </NavLink>
                    <NavLink to='recently_viewed' className={({ isActive }) => (isActive ? "account__recently-viewed account_active" : "account__recently-viewed")}>
                        <img src={eye} alt="recently-viewed" />
                        Recently viewed
                    </NavLink>
                    <NavLink to='reviews' className={({ isActive }) => (isActive ? "account__my-reviews account_active" : "account__my-reviews")}>
                        <img src={star} alt="my-reviews" />
                        My reviews
                    </NavLink>
                    <NavLink to='sign_out' className={({ isActive }) => (isActive ? "account__sign-out account_active" : "account__sign-out")}>
                        <img src={logout} alt="signout" />
                        Sign out
                    </NavLink>
                </div>
                <div className="account__main-content">
                    <div className="account__title">
                        My {category}
                    </div>
                    <div className="account__delete-account">
                        <img src={deleteAcc} alt="delete" />
                        Delete account
                    </div>
                    <div className="account__description">
                        {category === 'account' ? 'Welcome to your Account Page!' : <Outlet />}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AccountPage