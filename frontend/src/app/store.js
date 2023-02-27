import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import favouriteSlice from './favourite-slice';
import cartSlice from './cart-slice';
import authorizingSlice from './isAuthorizing-slice';
import categorySlice from './categories-slice';
import popularCategorySlice from './popularCategories-slice';
import instagramImageSlice from './instagramImages-slice';
import fashionBlogSlice from './fashionBlogs-slice';
import newArrivalSlice from './newArrivals-slice';
import trendingNowSlice from './trendingNow-slice';
import saleSlice from './sales-slice';
import favouritesReducer from '../features/favourites/favouritesSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favourites: favouritesReducer,
    favouriteProducts: favouriteSlice.reducer,
    cart: cartSlice.reducer,
    authorizing: authorizingSlice.reducer,
    categories: categorySlice.reducer,
    popularCategories: popularCategorySlice.reducer,
    instagramImages: instagramImageSlice.reducer,
    fashionBlogs: fashionBlogSlice.reducer,
    newArrivals: newArrivalSlice.reducer,
    trendingNow: trendingNowSlice.reducer,
    sales: saleSlice.reducer
  },
});
