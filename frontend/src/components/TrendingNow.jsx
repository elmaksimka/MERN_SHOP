import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { favouriteActions } from '../app/favourite-slice';

import heart from '../img/heart.svg';

export const TrendingNow = ({ id, url, name, price }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const favIsActive = useSelector(state => state.favourite.favHeartIsActive);

  const toggleFavHandler = () => {
    if (favIsActive === false) {
      dispatch(favouriteActions.addItemToFavourite());
    } else {
      dispatch(favouriteActions.removeItemFromFavourite());
    }
  };

  return (
    <>
      <div className="trending-now__product" key={id} id={id}>
        <img src={url} alt={name} />
        <Link to={`/trendingnow/${id}`} className="trending-now__text">{name}</Link>
        <div className="trending-now__text_price">{price}</div>
        <div onClick={toggleFavHandler}>
          <img
            src={heart}
            alt="heart"
            className={
              favIsActive ? 'trending-now__heart_active' : 'trending-now__heart'
            }
          />
        </div>
      </div>
    </>
  );
};
