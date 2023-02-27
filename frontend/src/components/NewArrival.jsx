import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFavourite } from '../app/favourite-slice';

import heart from '../img/heart.svg';

export const NewArrival = ({ id, url, name, price, onAddToFav }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const isFavourite = useSelector(state => state.favouriteProducts.isFavourite[id] || false);

  const toggleFavHandler = () => {
    dispatch(toggleFavourite({id, url, name, price}));
  }

  return (
    <div className="new-arrivals__products__item" key={id} id={id}>
      <img
        src={url}
        alt={name}
        className="new-arrivals__products__item__img"
      />
      <Link to={`/newarrivals/${id}`} className="new-arrivals__products-name-text">{name}</Link>
      <p className="new-arrivals__products-price-text">{price}</p>
      <div>
        <img
          src={heart}
          alt="heart"
          className={
            isFavourite ? 'new-arrivals__heart_active' : 'new-arrivals__heart'
          }
          onClick={user ? toggleFavHandler : onAddToFav}
        />
      </div>
    </div>
  );
};
