import { createSlice } from "@reduxjs/toolkit";
import { fetchInstagramImage } from "./api/API";

const instagramImageSlice = createSlice({
  name: "instagramImages",
  initialState: { instagramImages: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInstagramImage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInstagramImage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.instagramImages = action.payload;
      })
      .addCase(fetchInstagramImage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {} = instagramImageSlice.actions;

export default instagramImageSlice;
