import { createSlice } from "@reduxjs/toolkit";
import { fetchFashionBlog } from "./api/API";

const fashionBlogSlice = createSlice({
  name: "fashionBlogs",
  initialState: { fashionBlogs: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFashionBlog.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFashionBlog.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.fashionBlogs = action.payload;
      })
      .addCase(fetchFashionBlog.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {} = fashionBlogSlice.actions;

export default fashionBlogSlice;
