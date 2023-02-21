import classes from '../components/ProductDetail.module.css'

const ProductDetail = ({ productData }) => {
    return (
        <div>
            <div className={classes.container}>
                <h1 className={`${classes.center} ${classes.name}`}>{productData.name}</h1>
                <div className={classes.center}>
                    <img src={productData.url} alt={productData.name} />
                </div>
                <h2 className={classes.center}>{productData.price}</h2>
                <p className={classes.center}>Product description</p>
            </div>
        </div>
    )
}

export default ProductDetail