import { useDispatch, useSelector } from 'react-redux';
import { favouriteActions } from '../app/favourite-slice';

import heart from '../img/heart.svg';

export const TrendingNow = (props) => {
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
      <div className="trending-now__product" key={props.id} id={props.id}>
        <img src={props.url} alt={props.name} />
        <div className="trending-now__text">{props.name}</div>
        <div className="trending-now__text_price">{props.price}</div>
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
