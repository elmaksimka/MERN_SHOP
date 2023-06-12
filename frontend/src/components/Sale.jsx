import cart from '../img/cart.svg'
import heart from '../img/heart.svg'
// import ellipseActive from '../img/ellipse-active.svg'
import ellipseInactive from '../img/ellipse-inactive.svg'
import circleBlack from '../img/circle-black.svg'
import circleBrown from '../img/circle-brown.svg'
import circleBlue from '../img/circle-blue.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { favouriteActions } from '../app/favourite-slice'

const Sale = ({ id, url, name, price, oldprice, inkognitoAddToCartHandler, addToCartHandler, onAddToFav }) => {
    const dispatch = useDispatch();
    const [ellipseClass, setEllipseClass] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const isFavourite = useSelector(state => state.favouriteProducts.isFavourite[id] || false);

    const toggleFavHandler = () => {
        dispatch(favouriteActions.toggleFavourite({ id, url, name, price }));
    }

    return (
        <div className="sale__product" key={id}>
            <img src={url} alt={name} className="sale__product__img" />
            <div className='sale__text'>{name}</div>
            <div className='sale__text_price'>{price}</div>
            <div className='sale__text_price_old'>{oldprice}</div>
            <div className="sale__heart">
                <img src={heart} alt="heart" className={isFavourite ? 'sale__heart_active' : 'sale__heart'} onClick={user ? toggleFavHandler : onAddToFav} />
            </div>
            <div className="sale__cart">
                <div className="sale__cart__properties">
                    <div className="sale__cart__properties__size">
                        <span>
                            36
                        </span>
                        <span>
                            37
                        </span>
                        <span>
                            38
                        </span>
                        <span>
                            39
                        </span>
                        <span>
                            40
                        </span>
                    </div>
                    <div className="sale__cart__properties__colors">
                        <div onClick={() => { ellipseClass ? setEllipseClass(false) : setEllipseClass(true); }}>
                            <img src={circleBlack} alt="circle" />
                            <img src={ellipseInactive} alt="ellipse" />
                        </div>
                        <div onClick={() => { ellipseClass ? setEllipseClass(false) : setEllipseClass(true); }}>
                            <img src={circleBrown} alt="circle" />
                            <img src={ellipseInactive} alt="ellipse" />
                        </div>
                        <div onClick={() => { ellipseClass ? setEllipseClass(false) : setEllipseClass(true); }}>
                            <img src={circleBlue} alt="circle" />
                            <img src={ellipseInactive} alt="ellipse" />
                        </div>
                    </div>
                </div>
                <button className="sale__cart__button" onClick={user ? addToCartHandler : inkognitoAddToCartHandler}>
                    <img src={cart} alt="cart" />
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default Sale