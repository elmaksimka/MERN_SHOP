import { favouriteActions } from "./favourite-slice";

export const fetchFavData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/favourites");

      if (!response.ok) {
        throw new Error("Could not fetch favourite data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const favData = await fetchData();
      dispatch(
        favouriteActions.replaceFav({
          favouriteProducts: favData.favouriteProducts || [],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendFavData = (favourites, favouriteId) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(`"http://localhost:5000/favourites/${favouriteId}"`, {
        method: "PUT",
        body: JSON.stringify({
          favouriteProducts: favourites.favouriteProducts.favouriteProducts,
        }),
      });

      if (!response.ok) {
        throw new Error("Sending favourite data failed.");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};
