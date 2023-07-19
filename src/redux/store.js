import { configureStore } from '@reduxjs/toolkit';
import { laptopSlice } from './laptop/laptopSlice';

const store = configureStore({
  reducer: {
    laptops: laptopSlice.reducer,
  },
});

export default store;
