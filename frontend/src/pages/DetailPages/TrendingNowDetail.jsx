import { useLoaderData, json } from 'react-router-dom'
import ProductDetail from '../../components/ProductDetail';
import Navigation from '../../components/UI/Navigation';

const TrendingNowDetailPage = () => {
    const trendingNowData = useLoaderData();

    return (
        <>
            <Navigation catName='TrendingNow' isProd={true} prodName={trendingNowData.name} />
            <ProductDetail productData={trendingNowData} />
        </>
    )
}

export default TrendingNowDetailPage

export async function loader({ request, params }) {
    const id = params.trendingNowId;

    const response = await fetch('http://localhost:5000/trendingnow/' + id);

    if (!response.ok) {
        throw json(
            { message: 'Could not fetch details for selected product.' },
            {
                status: 500,
            }
        );
    } else {
        return response;
    }
}