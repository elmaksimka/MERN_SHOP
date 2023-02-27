import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import favouriteService from './favouriteService'

const initialState = {
  favourites: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new favourite
export const createFavourite = createAsyncThunk(
  'favourites/create',
  async (favouriteData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await favouriteService.createFavourite(favouriteData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user favourites
export const getFavourites = createAsyncThunk(
  'favourites/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await favouriteService.getFavourites(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user favourite
export const deleteFavourite = createAsyncThunk(
  'favourites/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await favouriteService.deleteFavourite(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const favouritesSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createFavourite.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createFavourite.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.favourites.push(action.payload)
      })
      .addCase(createFavourite.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getFavourites.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getFavourites.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.favourites = action.payload
      })
      .addCase(getFavourites.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteFavourite.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteFavourite.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.favourites = state.favourites.filter(
          (favourite) => favourite._id !== action.payload.id
        )
      })
      .addCase(deleteFavourite.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = favouritesSlice.actions
export default favouritesSlice.reducer
