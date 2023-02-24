import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Auth/Login';
import Register from './Auth/Register';
import HomePage from './pages/Home';
import WomenPage from './pages/Women';
import MenPage from './pages/Men';
import GirlsPage from './pages/Girls';
import BoysPage from './pages/Boys';
import SalesPage from './pages/Sales';
import DeliveryReturnsPage from './pages/DeliveryReturns';
import TrackOrderPage from './pages/TrackOrder';
import BlogPage from './pages/Blog';
import ContactsPage from './pages/Contacts';
import FaqPage from './pages/Faq';
import NewArrivalsPage from './pages/NewArrivals';
import TrendingNowPage from './pages/TrendingNow';
import BrandsPage from './pages/Brands';
import AccountPage from './pages/Account';
import ErrorPage from './pages/Error';
import Layout from './components/UI/Layout';

import { useSelector } from 'react-redux';
import Profile from './components/Profile';
import Orders from './components/Orders';
import Wishlist from './components/Wishlist';
import RecentlyViewed from './components/RecentlyViewed';
import Reviews from './components/Reviews';
import Logout from './Auth/Logout';
import NewArrivalDetailPage from './pages/DetailPages/NewArrivalDetail';
import { loader as newArrivalLoader } from './pages/DetailPages/NewArrivalDetail'
import { loader as trendingNowLoader } from './pages/DetailPages/TrendingNowDetail'
import { loader as saleLoader } from '../src/pages/DetailPages/SalesDetail'
import { action as applySubAction } from '../src/components/BannerForm/BannerForm'
import SalesDetailPage from './pages/DetailPages/SalesDetail';
import TrendingNowDetailPage from './pages/DetailPages/TrendingNowDetail';
import { action as applySubWithCatAction } from '../src/components/Subscribe'

function App() {
  const { user } = useSelector((state) => state.auth);
  const isLoggingIn = useSelector((state) => state.authorizing.isLoggingIn);
  const isRegistering = useSelector((state) => state.authorizing.isRegistering);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: isLoggingIn && !isRegistering ? (
            <Login />
          ) : !isLoggingIn && isRegistering ? (
            <Register />
          ) : (
            <HomePage />
          ),
          action: applySubAction
          // action: applySubWithCatAction,
        },
        {
          path: 'deliveryreturns',
          element: <DeliveryReturnsPage />
        },
        {
          path: 'trackorder',
          element: <TrackOrderPage />
        },
        {
          path: 'blog',
          element: <BlogPage />
        },
        {
          path: 'contacts',
          element: <ContactsPage />
        },
        {
          path: 'faq',
          element: <FaqPage />
        },
        {
          path: 'women',
          element: <WomenPage />
        },
        {
          path: 'men',
          element: <MenPage />
        },
        {
          path: 'girls',
          element: <GirlsPage />
        },
        {
          path: 'boys',
          element: <BoysPage />
        },
        {
          path: 'sales',
          children: [
            {
              index: true,
              element: <SalesPage />,
            },
            {
              path: ':saleId',
              element: <SalesDetailPage />,
              loader: saleLoader
            }
          ]
        },
        {
          path: 'newarrivals',
          children: [
            {
              index: true,
              element: <NewArrivalsPage />,
            },
            {
              path: ':newArrivalId',
              element: <NewArrivalDetailPage />,
              loader: newArrivalLoader
            }
          ]
        },
        {
          path: 'trendingnow',
          children: [
            {
              index: true,
              element: <TrendingNowPage />,
            },
            {
              path: ':trendingNowId',
              element: <TrendingNowDetailPage />,
              loader: trendingNowLoader
            }
          ]
        },
        {
          path: 'brands',
          element: <BrandsPage />
        },
        user && {
          path: 'account',
          element: <AccountPage />,
          children: [
            {
              index: true,
            },
            {
              path: 'profile',
              element: <Profile />
            },
            {
              path: 'orders',
              element: <Orders />
            },
            {
              path: 'wishlist',
              element: <Wishlist />
            },
            {
              path: 'recently_viewed',
              element: <RecentlyViewed />
            },
            {
              path: 'reviews',
              element: <Reviews />
            },
            {
              path: 'sign_out',
              element: <Logout />
            }
          ]
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />;
      <ToastContainer />
    </>
  )
}

export default App;