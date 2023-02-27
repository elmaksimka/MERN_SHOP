import axios from 'axios'

const API_URL = '/api/favourites/'

// Create new favourite
const createFavourite = async (favouriteData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, favouriteData, config)

  return response.data
}

// Get user favourites
const getFavourites = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user favourite
const deleteFavourite = async (favouriteId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + favouriteId, config)

  return response.data
}

const favouriteService = {
  createFavourite,
  getFavourites,
  deleteFavourite,
}

export default favouriteService
