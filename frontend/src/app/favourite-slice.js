import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouriteCounter: 0,
  favouriteProducts: [],
  isFavourite: {},
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    toggleFavourite: (state, action) => {
      const existingProductIndex = state.favouriteProducts.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        state.favouriteProducts.splice(existingProductIndex, 1);
        state.favouriteCounter--;
        state.isFavourite[action.payload.id] = false;
      } else {
        state.favouriteProducts.push({
          id: action.payload.id,
          name: action.payload.name,
          url: action.payload.url,
          price: action.payload.price,
        });
        state.favouriteCounter++;
        state.isFavourite[action.payload.id] = true;
      }
    },
    removeFavourite: (state, action) => {
      const existingProductIndex = state.favouriteProducts.findIndex(
        (product) => product.id === action.payload.id
      );
      state.favouriteProducts.splice(existingProductIndex, 1);
      state.favouriteCounter--;
      state.isFavourite[action.payload.id] = false;
    },
  },
});

export const { toggleFavourite, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice;
