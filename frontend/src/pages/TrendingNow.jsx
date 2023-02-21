import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import classes from '../pages/Page.module.css'

function TrendingNowPage() {
  const [trendingNowProduct, setTrendingNowProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/trendingnow')
      .then((res) => res.json())
      .then((jsonRes) => setTrendingNowProduct(jsonRes))
      .catch((err) => console.log(err));
  }, [])

  return (
    <>
      <h1 className={classes.title}>
        Trending Now
      </h1>
      <div className={classes.container}>
        {trendingNowProduct.map((trendingNow) => {
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