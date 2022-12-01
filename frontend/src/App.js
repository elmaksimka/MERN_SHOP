import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './pages/NotFound';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
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
import Layout from './pages/Layout';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
