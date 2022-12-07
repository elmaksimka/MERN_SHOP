import CarouselLine from "../components/CarouselLine";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Layout = (props) => {
  return (
    <>
      <Header onLogin={props.onShowLogin} onRegister={props.onShowRegister} />
      <CarouselLine />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
