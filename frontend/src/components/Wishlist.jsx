import { useSelector } from "react-redux";
import FavouriteDetail from "./FavouriteDetail";

function Wishlist() {
  const favouriteProducts = useSelector(state => state.favouriteProducts.favouriteProducts);

  return (
    <>
      {favouriteProducts.map((favouriteProduct) => <FavouriteDetail productData={favouriteProduct} id={favouriteProduct.id} />)}
    </>
  )
}

export default Wishlist