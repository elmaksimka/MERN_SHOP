import { createSlice } from "@reduxjs/toolkit";
import { fetchTrendingNow } from "./api/API";

const trendingNowSlice = createSlice({
  name: "trendingNow",
  initialState: { trendingNow: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingNow.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrendingNow.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.trendingNow = action.payload;
      })
      .addCase(fetchTrendingNow.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {} = trendingNowSlice.actions;

export default trendingNowSlice;
