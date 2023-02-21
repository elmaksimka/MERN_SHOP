import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import classes from '../pages/Page.module.css'

function NewArrivalsPage() {
  const [newArrivalProduct, setNewArrivalProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/newarrivals')
      .then((res) => res.json())
      .then((jsonRes) => setNewArrivalProduct(jsonRes))
      .catch((err) => console.log(err));
  }, [])

  return (
    <>
      <h1 className={classes.title}>
        New Arrivals
      </h1>
      <div className={classes.container}>
        {newArrivalProduct.map((newArrival) => {
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