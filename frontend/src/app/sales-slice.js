import { createSlice } from "@reduxjs/toolkit";
import { fetchSale } from "./api/API";

const saleSlice = createSlice({
  name: "sales",
  initialState: { sales: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSale.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSale.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.sales = action.payload;
      })
      .addCase(fetchSale.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {} = saleSlice.actions;

export default saleSlice;
