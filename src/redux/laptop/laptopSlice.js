import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const BASE_URL = 'http://localhost:3000/api/v1';

export const fetchLaptops = createAsyncThunk(
  'laptops/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/laptops`);
      return response.data;
    } catch (err) {
      return rejectWithValue(await err.response.data);
    }
  },
);

const initialState = {
  laptoplibrary: [], // Declare the laptoplibrary array
  laptop: {}, // Declare the laptop object
};

export const laptopSlice = createSlice({
  name: 'laptops',
  initialState,
  // Reducers...
  extraReducers: {
    [fetchLaptops.fulfilled]: (state, action) => {
      state.laptops = action.payload;
      state.laptoplibrary = state.laptops; // Use state.laptoplibrary instead of laptoplibrary

      // Extract the objects of laptops to a single laptop and assign it to laptop in the state
      state.laptop = state.laptops.reduce((acc, laptop) => ({
        ...acc,
        [laptop.id]: {
          name: laptop.name,
          description: laptop.description,
          image_url: laptop.image_url,
          price: laptop.price,
          model_year: laptop.model_year,
          rom_size: laptop.rom_size,
          ram_size: laptop.ram_size,
          dateAdded: laptop.date_added,
        },
      }), {});
    },
  },
});

export default laptopSlice.reducer;
