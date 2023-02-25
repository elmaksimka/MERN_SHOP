import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTrendingNow } from '../app/api/API';
import Navigation from '../components/UI/Navigation';
import classes from '../pages/Page.module.css'

function TrendingNowPage() {
  const dispatch = useDispatch();
  const { trendingNow } = useSelector((state) => state.trendingNow);

  useEffect(() => {
    dispatch(fetchTrendingNow());
  }, [dispatch]);

  return (
    <>
      <Navigation catName='TrendingNow' isProd={false} />
      <h1 className={classes.title}>
        Trending Now
      </h1>
      <div className={classes.container}>
        {trendingNow.map((trendingNow) => {
          return (
            <div key={trendingNow._id} className={classes.item}>
              <div className={classes.image}>
                <img src={trendingNow.url} alt={trendingNow.name} />
              </div>
              <Link to={trendingNow._id} className={classes.name}>{trendingNow.name}</Link>
              <h3>{trendingNow.price}</h3>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default TrendingNowPage