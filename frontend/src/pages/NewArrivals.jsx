import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNewArrival } from '../app/api/API';
import Navigation from '../components/UI/Navigation';
import classes from '../pages/Page.module.css'

function NewArrivalsPage() {
  const dispatch = useDispatch();
  const { newArrivals } = useSelector((state) => state.newArrivals);

  useEffect(() => {
    dispatch(fetchNewArrival());
  }, [dispatch]);

  return (
    <>
      <Navigation catName='NewArrivals' isProd={false} />
      <h1 className={classes.title}>
        New Arrivals
      </h1>
      <div className={classes.container}>
        {newArrivals.map((newArrival) => {
          return (
            <div key={newArrival._id} className={classes.item}>
              <div className={classes.image}>
                <img src={newArrival.url} alt={newArrival.name} />
              </div>
              <Link to={newArrival._id} className={classes.name}>{newArrival.name}</Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default NewArrivalsPage