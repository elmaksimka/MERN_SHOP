import { createSlice } from "@reduxjs/toolkit";
import { fetchCategory } from "./api/API";

const categorySlice = createSlice({
  name: "categories",
  initialState: { categories: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {} = categorySlice.actions;

export default categorySlice;
