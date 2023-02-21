import { createSlice } from '@reduxjs/toolkit';

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    favouriteCounter: 0,
    favHeartIsActive: false
  },
  reducers: {
    // addItemToFavourite(state, action) {
    //   state.favouriteCounter++;

    //   const id = action.payload;
    //   const existingItem = state.props.find(item => item.id === id);
    //   existingItem.favHeartIsActive(true);
    // },
    // removeItemFromFavourite(state, action) {
    //   state.favouriteCounter--;

    //   const id = action.payload;
    //   const existingItem = state.props.find(item => item.id === id);
    //   existingItem.favHeartIsActive(false);
    // },
    toggleFavourite(state, action) {
      state.favouriteCounter++;

      const id = action.payload;
      const existingItem = state.props.find(item => item.id === id);
      
      existingItem.favHeartIsActive(!state.favHeartIsActive);
    }
  },
});

// addItemToFavourite(state, action) {
//   const newItem = action.payload;
//   const existingItem = state.items.find((item) => item.id === newItem.id);
//   state.totalQuantity++;
//   if (!existingItem) {
//     state.items.push({
//       id: newItem.id,
//       price: newItem.price,
//       quantity: 1,
//       totalPrice: newItem.price,
//       name: newItem.title
//     });
//   } else {
//     existingItem.quantity++;
//     existingItem.totalPrice = existingItem.totalPrice + newItem.price;
//   }
// },
// removeItemFromFavourite(state, action) {
//   const id = action.payload;
//   const existingItem = state.items.find(item => item.id === id);
//   state.totalQuantity--;
//   if (existingItem.quantity === 1) {
//     state.items = state.items.filter(item => item.id !== id);
//   } else {
//     existingItem.quantity--;
//   }
// },

export const favouriteActions = favouriteSlice.actions;

export default favouriteSlice;