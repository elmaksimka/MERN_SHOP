import { useDispatch } from 'react-redux';
import classes from '../components/FavouriteDetail.module.css'
import heart from '../img/heart.svg';
import { favouriteActions } from '../app/favourite-slice';

const FavouriteDetail = ({ productData, id }) => {
    const dispatch = useDispatch();

    const removeFavHandler = () => {
        dispatch(favouriteActions.removeFavourite({ id }));
    }

    return (
        <div className={classes.container}>
            <div className={classes.box}>
                <img src={productData.url} alt={productData.name} className={classes.image} />
                <img
                    src={heart}
                    alt="heart"
                    onClick={removeFavHandler}
                    className={classes.heart}
                />
            </div>
            <h1 className={classes.name}>{productData.name}</h1>
            <h2 className={classes.price}>{productData.price}</h2>
        </div>
    )
}

export default FavouriteDetail