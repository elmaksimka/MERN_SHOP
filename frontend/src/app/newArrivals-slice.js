import { createSlice } from "@reduxjs/toolkit";
import { fetchNewArrival } from "./api/API";

const newArrivalSlice = createSlice({
  name: "newArrivals",
  initialState: { newArrivals: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewArrival.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNewArrival.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.newArrivals = action.payload;
      })
      .addCase(fetchNewArrival.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {} = newArrivalSlice.actions;

export default newArrivalSlice;
