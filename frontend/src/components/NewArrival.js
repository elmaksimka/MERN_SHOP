import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favouriteActions } from '../app/favourite-slice';

import heart from '../img/heart.svg';

export const NewArrival = (props) => {
  const dispatch = useDispatch();
  //   const isActive = useSelector(state => state.favourite.isActive);

  const [favIsActive, setFavIsActive] = useState(false);

  //   const { id } = props.item;

  const toggleFavHandler = () => {
    if (favIsActive === false) {
      dispatch(favouriteActions.addItemToFavourite());
      setFavIsActive(true);
    } else {
      dispatch(favouriteActions.removeItemFromFavourite());
      setFavIsActive(false);
    }
  };

  return (
    <div className="new-arrivals__products__item" key={props.id} id={props.id}>
      <img
        src={props.url}
        alt={props.name}
        className="new-arrivals__products__item__img"
      />
      <p className="new-arrivals__products-name-text">{props.name}</p>
      <p className="new-arrivals__products-price-text">{props.price}</p>
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
