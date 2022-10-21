import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Welcome from './components/Welcome'
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

function App() {
  return (
    <>
    <Router>
      <div>
      {/* <Welcome /> */}
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/deliveryreturns" element={<DeliveryReturns />}></Route>
          <Route path="/trackorder" element={<TrackOrder />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/women" element={<Women />}></Route>
          <Route path="/men" element={<Men />}></Route>
          <Route path="/girls" element={<Girls />}></Route>
          <Route path="/boys" element={<Boys />}></Route>
          <Route path="/sales" element={<Sales />}></Route>
          <Route path="/newarrivals" element={<NewArrivals />}></Route>
          <Route path="/trendingnow" element={<TrendingNow />}></Route>
          <Route path="/brands" element={<Brands />}></Route>
        </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
