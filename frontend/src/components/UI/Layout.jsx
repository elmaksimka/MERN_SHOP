import { Outlet } from "react-router-dom";
import CarouselLine from "../CarouselLine";
import Footer from "./Footer";
import Header from "./Header";
import { useLocation } from "react-router";
import { useEffect } from "react";

const Layout = ({ onShowLogin, onShowRegister }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header onLogin={onShowLogin} onRegister={onShowRegister} />
      <CarouselLine />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
