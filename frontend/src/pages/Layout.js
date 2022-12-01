import Footer from "../components/Footer";
import Header from "../components/Header";


const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
