import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { favouriteActions } from '../app/favourite-slice';

import heart from '../img/heart.svg';

export const NewArrival = ({ id, url, name, price }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const favIsActive = useSelector(state => state.favourite.favHeartIsActive);

  // const toggleFavHandler = () => {
  //   if (favIsActive === false) {
  //     dispatch(favouriteActions.addItemToFavourite());
  //   } else {
  //     dispatch(favouriteActions.removeItemFromFavourite());
  //   }
  // };

  const toggleFavHandler = () => {
    dispatch(favouriteActions.toggleFavourite());
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
      {/* <div onClick={user ? toggleFavHandler : props.onAddToFav}> */}
      <div onClick={toggleFavHandler}>
        <img
          src={heart}
          alt="heart"
          className={
            favIsActive ? 'new-arrivals__heart_active' : 'new-arrivals__heart'
          }
        />
      </div>
    </div>
  );
};
