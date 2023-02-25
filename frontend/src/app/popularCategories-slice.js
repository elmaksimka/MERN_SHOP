import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularCategory } from "./api/API";

const popularCategorySlice = createSlice({
  name: "popularCategories",
  initialState: { popularCategories: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPopularCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.popularCategories = action.payload;
      })
      .addCase(fetchPopularCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {} = popularCategorySlice.actions;

export default popularCategorySlice;
