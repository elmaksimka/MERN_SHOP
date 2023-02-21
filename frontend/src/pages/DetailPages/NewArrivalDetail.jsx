import { useLoaderData, json } from 'react-router-dom'
import ProductDetail from '../../components/ProductDetail';

const NewArrivalDetailPage = () => {
  const newArrivalData = useLoaderData();

  return (
    <ProductDetail productData={newArrivalData} />
  )
}

export default NewArrivalDetailPage

export async function loader({ request, params }) {
  const id = params.newArrivalId;

  const response = await fetch('http://localhost:5000/newarrivals/' + id);

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