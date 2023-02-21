import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import classes from '../pages/Page.module.css'

function SalesPage() {
  const [saleProduct, setSaleProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/sales')
      .then((res) => res.json())
      .then((jsonRes) => setSaleProduct(jsonRes))
      .catch((err) => console.log(err));
  }, [])

  return (
    <>
      <h1 className={classes.title}>
        Sales
      </h1>
      <div className={classes.container}>
        {saleProduct.map((sale) => {
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