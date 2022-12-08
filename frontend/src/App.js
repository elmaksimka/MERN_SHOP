import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './pages/NotFound';
import Homepage from './pages/Homepage';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Women from './pages/Women';
import Men from './pages/Men';
import Girls from './pages/Girls';
import Boys from './pages/Boys';
import Sales from './pages/Sales';
import DeliveryReturns from './pages/DeliveryReturns';
import TrackOrder from './pages/TrackOrder';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import Faq from './pages/Faq';
import NewArrivals from './pages/NewArrivals';
import TrendingNow from './pages/TrendingNow';
import Brands from './pages/Brands';
import Layout from './components/UI/Layout';

import { useSelector } from 'react-redux';
import Profile from './components/Profile';
import Account from './pages/Account';
import Orders from './components/Orders';
import Wishlist from './components/Wishlist';
import RecentlyViewed from './components/RecentlyViewed';
import Reviews from './components/Reviews';
import Logout from './Auth/Logout';

function App() {
  const { user } = useSelector((state) => state.auth);
  const isLoggingIn = useSelector((state) => state.authorizing.isLoggingIn);
  const isRegistering = useSelector((state) => state.authorizing.isRegistering);

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                isLoggingIn && !isRegistering ? (
                  <Login />
                ) : !isLoggingIn && isRegistering ? (
                  <Register />
                ) : (
                  <Homepage />
                )
              }
            />
            <Route path="/deliveryreturns" element={<DeliveryReturns />} />
            <Route path="/trackorder" element={<TrackOrder />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/girls" element={<Girls />} />
            <Route path="/boys" element={<Boys />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/newarrivals" element={<NewArrivals />} />
            <Route path="/trendingnow" element={<TrendingNow />} />
            <Route path="/brands" element={<Brands />} />
            {user && (
              <Route path="/account" element={<Account />}>
                <Route path="profile" element={<Profile />} />
                <Route path="orders" element={<Orders />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="recently_viewed" element={<RecentlyViewed />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="sign_out" element={<Logout />} />
              </Route>
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
