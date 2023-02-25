import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategory = createAsyncThunk("category/fetchCategory", async () => {
  const response = await fetch("http://localhost:5000/categories");
  const data = await response.json();
  return data;
});

export const fetchPopularCategory = createAsyncThunk("popularCategory/fetchPopularCategory", async () => {
  const response = await fetch("http://localhost:5000/popularcategories");
  const data = await response.json();
  return data;
});

export const fetchInstagramImage = createAsyncThunk("instagramImage/fetchInstagramImage", async () => {
  const response = await fetch("http://localhost:5000/instagramimages");
  const data = await response.json();
  return data;
});

export const fetchFashionBlog = createAsyncThunk("fashionBlog/fetchFashionBlog", async () => {
  const response = await fetch("http://localhost:5000/fashionblogs");
  const data = await response.json();
  return data;
});

export const fetchNewArrival = createAsyncThunk("newArrival/fetchNewArrival", async () => {
  const response = await fetch("http://localhost:5000/newarrivals");
  const data = await response.json();
  return data;
});

export const fetchTrendingNow = createAsyncThunk("trendingNow/fetchTrendingNow", async () => {
  const response = await fetch("http://localhost:5000/trendingnow");
  const data = await response.json();
  return data;
});

export const fetchSale = createAsyncThunk("sale/fetchSale", async () => {
  const response = await fetch("http://localhost:5000/sales");
  const data = await response.json();
  return data;
});