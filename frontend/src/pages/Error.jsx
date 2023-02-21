import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';
import CarouselLine from "../components/CarouselLine";
import Footer from "../components/UI/Footer";
import Header from "../components/UI/Header";

const ErrorPage = ({ onShowLogin, onShowRegister }) => {
    const error = useRouteError();

    let title = 'An error occurred!';
    let message = 'Something went wrong!';

    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        title = 'Not found!';
        message = 'Could not find resource or page.';
    }

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Header onLogin={onShowLogin} onRegister={onShowRegister} />
            <CarouselLine />
            <main className="content">
                <h1>{title}</h1>
                <p>{message}</p>
            </main>
            <Footer />
        </>
    );
};

export default ErrorPage;