import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { favouriteActions } from '../app/favourite-slice';
import heart from '../img/heart.svg';

export const TrendingNow = ({ id, url, name, price, onAddToFav }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const isFavourite = useSelector(state => state.favouriteProducts.isFavourite[id] || false);

  const toggleFavHandler = () => {
    dispatch(favouriteActions.toggleFavourite({ id, url, name, price }));
  }

  return (
    <>
      <div className="trending-now__product" key={id} id={id}>
        <img src={url} alt={name} />
        <Link to={`/trendingnow/${id}`} className="trending-now__text">{name}</Link>
        <div className="trending-now__text_price">{price}</div>
        <div>
          <img
            src={heart}
            alt="heart"
            className={
              isFavourite ? 'trending-now__heart_active' : 'trending-now__heart'
            }
            onClick={user ? toggleFavHandler : onAddToFav}
          />
        </div>
      </div>
    </>
  );
};
