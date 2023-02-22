import { useLoaderData, json } from 'react-router-dom'
import ProductDetail from '../../components/ProductDetail';
import Navigation from '../../components/UI/Navigation';

const SalesDetailPage = () => {
  const saleData = useLoaderData();

  return (
    <>
      <Navigation catName='Sales' isProd={true} prodName={saleData.name} />
      <ProductDetail productData={saleData} />
    </>
  )
}

export default SalesDetailPage

export async function loader({ request, params }) {
  const id = params.saleId;

  const response = await fetch('http://localhost:5000/sales/' + id);

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