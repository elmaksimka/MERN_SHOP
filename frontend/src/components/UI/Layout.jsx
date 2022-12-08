import CarouselLine from "../CarouselLine";
import Footer from "./Footer";
import Header from "./Header";


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
