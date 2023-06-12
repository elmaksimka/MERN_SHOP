import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSale } from '../app/api/API';
import Navigation from '../components/UI/Navigation';
import classes from '../pages/Page.module.css'

function SalesPage() {
  const dispatch = useDispatch();
  const { sales } = useSelector((state) => state.sales);

  useEffect(() => {
    dispatch(fetchSale());
  }, [dispatch]);

  return (
    <>
      <Navigation catName='Sales' catPath='sales' isProd={false} />
      <h1 className={classes.title}>
        Sales
      </h1>
      <div className={classes.container}>
        {sales.map((sale) => {
          return (
            <div key={sale._id} className={classes.item}>
              <div className={classes.image}>
                <img src={sale.url} alt={sale.name} />
              </div>
              <Link to={sale._id} className={classes.name}>{sale.name}</Link>
              <h3 className='sale__text_price'>
                New price: {sale.price}
              </h3>
              <h3 className="sale__text_price_old">
                Old price: {sale.oldprice}
              </h3>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SalesPage