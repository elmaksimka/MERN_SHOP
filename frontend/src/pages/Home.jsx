import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import shopping from '../img/shopping.svg'
import googlePlay from '../img/google-play.svg'
import appStore from '../img/app-store.svg'
import Subscribe from '../components/Subscribe'
import inDepthConsultingLogo from '../img/in-depth-consulting-logo.svg'
import higherFitLogo from '../img/higher-fit-logo.svg'
import sentinalConsultingLogo from '../img/sentinal-consulting-logo.svg'
import nationalHeathLogo from '../img/national-health-logo.svg'
import forSaleLogo from '../img/for-sale-logo.svg'
import delMarStrategyLogo from '../img/del-mar-strategy-logo.svg'
import icDelivery from '../img/ic-delivery.svg'
import icCallCenter from '../img/ic-call-center.svg'
import icShield from '../img/ic-shield.svg'
import icCreditCard from '../img/ic-credit-card.svg'
import chat from '../img/chat.svg'
import banner1 from '../img/banner-1.svg'
import banner2 from '../img/banner-2.svg'
import banner3 from '../img/banner-3.svg'
import banner4 from '../img/background.svg'
// import delivery from '../img/delivery.svg'
import leftBtn from '../img/left.svg'
import rightBtn from '../img/right.svg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPaginate from 'react-paginate'
import CountdownTimer from '../components/Countdowntimer/CountdownTimer'
import { NewArrival } from '../components/NewArrival'
import { TrendingNow } from '../components/TrendingNow'
import { cartActions } from '../app/cart-slice'
import BannerForm from '../components/BannerForm/BannerForm'
import { toast } from 'react-toastify'
import { fetchCategory, fetchFashionBlog, fetchInstagramImage, fetchNewArrival, fetchPopularCategory, fetchSale, fetchTrendingNow } from '../app/api/API'
import Sale from '../components/Sale'
import Spinner from '../components/Spinner'
import { sendFavData } from '../app/favourite-actions'

let isInitial = true;

function HomePage() {
    const dispatch = useDispatch();

    const { categories, status, error } = useSelector((state) => state.categories);
    const { popularCategories } = useSelector((state) => state.popularCategories);
    const { instagramImages } = useSelector((state) => state.instagramImages);
    const { fashionBlogs } = useSelector((state) => state.fashionBlogs);
    const { newArrivals } = useSelector((state) => state.newArrivals);
    const { trendingNow } = useSelector((state) => state.trendingNow);
    const { sales } = useSelector((state) => state.sales);

    const favourites = useSelector((state) => state.favouriteProducts);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }

        if (favourites.changed) {
            dispatch(sendFavData(favourites.favouriteProducts, ''));
            console.log(favourites.favouriteProducts);
        }
    }, [favourites, dispatch]);

    useEffect(() => {
        dispatch(fetchCategory());
        dispatch(fetchPopularCategory());
        dispatch(fetchInstagramImage());
        dispatch(fetchFashionBlog());
        dispatch(fetchNewArrival());
        dispatch(fetchTrendingNow());
        dispatch(fetchSale());
    }, [dispatch]);

    const inkognitoAddToCartHandler = () => {
        toast.error('You need to sign in for adding to cart!');
    }

    const inkognitoFavHandler = () => {
        toast.error('You need to sign in for marking product as favourite!');
    }

    const [newArrivalPageNumber, setNewArrivalPageNumber] = useState(0);
    const newArrivalItemsPerPage = 6;
    const newArrivalPagesVisited = newArrivalPageNumber * newArrivalItemsPerPage;

    const displayNewArrivalItems = newArrivals
        .slice(newArrivalPagesVisited, newArrivalPagesVisited + newArrivalItemsPerPage)
        .map((newArrival) => {
            return (
                <NewArrival key={newArrival._id} id={newArrival._id} name={newArrival.name} price={newArrival.price} url={newArrival.url} onAddToFav={inkognitoFavHandler} />
            );
        });

    const newArrivalPageCount = Math.ceil(newArrivals.length / newArrivalItemsPerPage);

    const changeNewArrivalPage = ({ selected }) => {
        setNewArrivalPageNumber(selected);
    };

    const [trendingNowPageNumber, setTrendingNowPageNumber] = useState(0);
    const trendingItemsPerPage = 3;
    const trendingNowPagesVisited = trendingNowPageNumber * trendingItemsPerPage;

    const displayTrendingItems = trendingNow
        .slice(trendingNowPagesVisited, trendingNowPagesVisited + trendingItemsPerPage)
        .map((trendingNow) => {
            return (
                <TrendingNow key={trendingNow._id} id={trendingNow._id} name={trendingNow.name} price={trendingNow.price} url={trendingNow.url} onAddToFav={inkognitoFavHandler} />
            );
        });

    const trendingNowPageCount = Math.ceil(trendingNow.length / trendingItemsPerPage);

    const changeTrendingNowPage = ({ selected }) => {
        setTrendingNowPageNumber(selected);
    };

    const [salePageNumber, setSalePageNumber] = useState(0);
    const saleItemsPerPage = 3;
    const salePagesVisited = salePageNumber * saleItemsPerPage;

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart());
    }

    const displaySaleItems = sales
        .slice(salePagesVisited, salePagesVisited + saleItemsPerPage)
        .map((sale) => {
            return (
                <Sale key={sale._id} id={sale._id} name={sale.name} url={sale.url} price={sale.price} oldprice={sale.oldprice} addToCartHandler={addToCartHandler} onAddToFav={inkognitoFavHandler} inkognitoAddToCartHandler={inkognitoAddToCartHandler} />
            );
        });

    const salePageCount = Math.ceil(sales.length / saleItemsPerPage);

    const changeSalePage = ({ selected }) => {
        setSalePageNumber(selected);
    };

    if (status === 'loading') {
        return <Spinner />;
    }

    if (status === 'failed') {
        return <div>{error}</div>;
    }

    return (
        <>
            <div className="hero-slider">
                <div className="hero-slider__content">
                    <Carousel>
                        <div>
                            <img src={banner1} alt="banner1" />
                            <div className="hero-slider__caption">
                                <div className="hero-slider__new-collection">
                                    New collection
                                </div>
                                <div className="hero-slider__menswear">
                                    Menswear 2020
                                </div>
                                <div className="hero-slider__shop-buttons">
                                    <button className="hero-slider__button-sale">
                                        Shop sale
                                    </button>
                                    <button className="hero-slider__button-menswear">
                                        Shop the menswear
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={banner2} alt="banner2" />
                            <div className="hero-slider__caption">
                                <div className="hero-slider__new-collection">
                                    New collection
                                </div>
                                <div className="hero-slider__menswear">
                                    Menswear 2020
                                </div>
                                <div className="hero-slider__shop-buttons">
                                    <button className="hero-slider__button-sale">
                                        Shop sale
                                    </button>
                                    <button className="hero-slider__button-menswear">
                                        Shop the menswear
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={banner3} alt="banner3" />
                            <div className="hero-slider__caption">
                                <div className="hero-slider__new-collection">
                                    New collection
                                </div>
                                <div className="hero-slider__menswear">
                                    Menswear 2020
                                </div>
                                <div className="hero-slider__shop-buttons">
                                    <button className="hero-slider__button-sale">
                                        Shop sale
                                    </button>
                                    <button className="hero-slider__button-menswear">
                                        Shop the menswear
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={banner4} alt="banner4" />
                            <div className="hero-slider__caption">
                                <div className="hero-slider__new-collection">
                                    New collection
                                </div>
                                <div className="hero-slider__menswear">
                                    Menswear 2020
                                </div>
                                <div className="hero-slider__shop-buttons">
                                    <button className="hero-slider__button-sale">
                                        Shop sale
                                    </button>
                                    <button className="hero-slider__button-menswear">
                                        Shop the menswear
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="top-categories">
                <div className="top-categories__content">
                    {categories.map((category) => {
                        return (
                            <div className="top-categories__box" key={category._id}>
                                <img src={category.url} alt={category.title} />
                                <p>{category.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="new-arrivals">
                <div className="new-arrivals__content">
                    <div className="new-arrivals__header">
                        <h1>
                            New arrivals
                        </h1>
                        <div className="new-arrivals__checkout">
                            Check out our latest arrivals for the upcoming season
                        </div>
                        <Link to='newarrivals' className="new-arrivals__see-collection">
                            See the collection here
                        </Link>
                    </div>
                    <div className="new-arrivals__products">
                        {displayNewArrivalItems}
                        <ReactPaginate
                            pageCount={newArrivalPageCount}
                            onPageChange={changeNewArrivalPage}
                            containerClassName={"new-arrivals__btns"}
                            disabledClassName={"new-arrivals__disabled"}
                            activeClassName={"new-arrivals__active"}
                        />
                    </div>
                </div>
            </div>
            <div className="banners">
                <div className="banners__banner-first-content">
                    <div className="banners__banner-1">
                        <img src={banner1} alt="summer-collections" />
                        <div className="banners__image-content banners__image-content_s">
                            <div className="banners__banner-text1">
                                Summer Collections
                            </div>
                            <div className="banners__banner-text2">
                                Sale Up to 70%
                            </div>
                            <button className="banners__banner-button">
                                Explore new prices
                            </button>
                        </div>
                    </div>
                    <div className="banners__banner-2">
                        <img src={banner2} alt="new-sweaters" />
                        <div className="banners__image-content">
                            <div className="banners__banner-text1">
                                Deal of the week
                            </div>
                            <div className="banners__banner-text2">
                                Stay Warm With Our New Sweaters
                            </div>
                            <button className="banners__banner-button banners__banner-button_btn_s">
                                Shop now
                            </button>
                            <div className="banners__banner-text1">
                                Limited time offer
                            </div>
                            <div className="banners__banner-time">
                                <CountdownTimer countdownTimestampMs={1695751500000} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banners__banner-second-content">
                    <div className="banners__banner-3">
                        <img src={banner3} alt="new-sweaters" />
                        <div className="banners__image-content banners__image-content_s">
                            <div className="banners__banner-text1">
                                New collection
                            </div>
                            <div className="banners__banner-text2">
                                Shoes & Bags
                                autumn / winter 2020
                            </div>
                            <button className="banners__banner-button">
                                See offers
                            </button>
                        </div>
                    </div>
                    <div className="banners__banner-4">
                        <img src={banner4} alt="new-sweaters" />
                        <div className="banners__image-content">
                            <div className="banners__banner-text1">
                                For All new Email Subscribers
                            </div>
                            <div className="banners__banner-text2">
                                Get 5% Off & Free Delivery
                            </div>
                            <BannerForm />
                            <div className="subscribe-text">
                                *Sign up to be the first to hear about exclusive deals, special offers and upcoming
                                collections.
                            </div>
                            {/* <img src={delivery} alt="delivery" /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="popular-categories">
                <div className="popular-categories__content">
                    <h1>
                        Popular categories
                    </h1>
                    <div className="popular-categories__box">
                        {popularCategories.map((popularCategory) => {
                            return (
                                <div key={popularCategory._id}>
                                    <img src={popularCategory.url} alt={popularCategory.title} />
                                    <p className="popular-categories__text">{popularCategory.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="trending-now">
                <div className="trending-now__content">
                    <h1 className="trending-now__title">
                        Trending now
                    </h1>
                    <div className="trending-now__products">
                        {displayTrendingItems}
                        <ReactPaginate
                            previousLabel={<img className="trending-now__btn-left" src={leftBtn} alt="left-btn" />}
                            nextLabel={<img className="trending-now__btn-right" src={rightBtn} alt="right-btn" />}
                            pageCount={trendingNowPageCount}
                            onPageChange={changeTrendingNowPage}
                            containerClassName={"trending-now__products__btns"}
                            previousLinkClassName={"trending-now__products__btn-previous"}
                            nextLinkClassName={"trending-now__products__btn-next"}
                            disabledClassName={"trending-now__products__disabled"}
                            activeClassName={"trending-now__products__active"}
                        />
                    </div>
                    <div className="trending-now__btn">
                        <Link to='trendingnow' className="trending-now__button">
                            Explore top sales
                        </Link>
                    </div>
                </div>
            </div>
            <div className="sale">
                <div className="sale__content">
                    <h1 className="sale__title">
                        Sale up to 70%
                    </h1>
                    <div className="sale__products">
                        {displaySaleItems}
                        <ReactPaginate
                            previousLabel={<img className="sale__btn-left" src={leftBtn} alt="left-btn" />}
                            nextLabel={<img className="sale__btn-right" src={rightBtn} alt="right-btn" />}
                            pageCount={salePageCount}
                            onPageChange={changeSalePage}
                            containerClassName={"sale__products__btns"}
                            previousLinkClassName={"sale__products__btn-previous"}
                            nextLinkClassName={"sale__products__btn-next"}
                            disabledClassName={"sale__products__disabled"}
                            activeClassName={"sale__products__active"}
                        />
                    </div>
                    <div className="sale__btn">
                        <Link to='/sales' className="sale__button">
                            See all sale products
                        </Link>
                    </div>
                </div>
            </div>
            <div className="cta-mobile-app">
                <div className="cta-mobile-app__content">
                    <img className="cta-mobile-app__shopping" src={shopping} alt="shopping" />
                    <div className="cta-mobile-app__text">
                        Enjoy mobile shopping with our Createx Store App!
                    </div>
                    <div className="cta-mobile-app__google-store">
                        <img className="cta-mobile-app__google-play" src={googlePlay} alt="google-play" />
                        <img className="cta-mobile-app__app-store" src={appStore} alt="app-store" />
                    </div>
                </div>
            </div>
            <div className="services">
                <div className="services__content">
                    <div className="services__box">
                        <img src={icDelivery} alt="ic-delivery" />
                        <div className="services__text1">
                            Fast Worldwide Shipping
                        </div>
                        <div className="services__text2">
                            Get free shipping over $250
                        </div>
                    </div>
                    <div className="services__box">
                        <img src={icCallCenter} alt="ic-call-center" />
                        <div className="services__text1">
                            24/7 Customer Support
                        </div>
                        <div className="services__text2">
                            Friendly 24/7 customer support
                        </div>
                    </div>
                    <div className="services__box">
                        <img src={icShield} alt="ic-shield" />
                        <div className="services__text1">
                            Money Back Guarantee
                        </div>
                        <div className="services__text2">
                            We return money within 30 days
                        </div>
                    </div>
                    <div className="services__box">
                        <img src={icCreditCard} alt="ic-credit-card" />
                        <div className="services__text1">
                            Secure Online Payment
                        </div>
                        <div className="services__text2">
                            Accept all major credit cards
                        </div>
                    </div>
                </div>
            </div>
            <div className="instagram">
                <div className="instagram__content">
                    <div className="instagram__text">
                        <h6 className="instagram__follow-text">
                            Follow us on Instagram
                        </h6>
                        <h1 className="instagram__email-text">
                            @createx_store
                        </h1>
                        <a href="https://instagram.com/elmaksimka" target="_blank" rel="noreferrer" className="instagram__button">
                            Follow instagram
                        </a>
                    </div>
                    <div className="instagram__images">
                        {instagramImages.map((instagramImage) => {
                            return (
                                <div className="instagram__image" key={instagramImage._id}>
                                    <img src={instagramImage.url} alt={instagramImage.title} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="blog">
                <div className="blog__content">
                    <h1 className="blog_h1">
                        Fashion blog
                    </h1>
                    <div>
                        <Link to='/blog' className="blog__button">
                            View blog
                        </Link>
                    </div>
                    <div className="blog__images">
                        {fashionBlogs.map((fashionBlog) => {
                            return (
                                <div className="blog__image" key={fashionBlog._id}>
                                    <img src={fashionBlog.url} alt={fashionBlog.title} className="blog__image__picture" />
                                    <div className="blog__image__caption">
                                        {fashionBlog.title}
                                    </div>
                                    <div className="blog__image__text1">
                                        <div>
                                            {fashionBlog.category}
                                        </div>
                                        <div>
                                            |
                                        </div>
                                        <div>
                                            {fashionBlog.date}
                                        </div>
                                        <div>
                                            |
                                        </div>
                                        <div>
                                            <img src={chat} alt="chat" />
                                        </div>
                                        <div>
                                            {fashionBlog.comments}
                                        </div>
                                    </div>
                                    <div className="blog__image__text2">
                                        {fashionBlog.text}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="logos">
                <div className="logos__content">
                    <div className="logos__in-depth-logo">
                        <img src={inDepthConsultingLogo} alt="in-depth-consulting-logo" />
                    </div>
                    <div className="logos__higher-fit-logo">
                        <img src={higherFitLogo} alt="higher-fit-logo" />
                    </div>
                    <div className="logos__sential-consulting-logo">
                        <img src={sentinalConsultingLogo} alt="sential-consulting-logo" />
                    </div>
                    <div className="logos__national-health-logo">
                        <img src={nationalHeathLogo} alt="national-health-logo" />
                    </div>
                    <div className="logos__for-sale-logo">
                        <img src={forSaleLogo} alt="for-sale-logo" />
                    </div>
                    <div className="logos__del-mar-strategy-logo">
                        <img src={delMarStrategyLogo} alt="del-mar-strategy-logo" />
                    </div>
                </div>
            </div>
            <Subscribe />
        </>
    )
}

export default HomePage