import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import imageReducer from "./slices/imageSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    image:imageReducer
  },
});

export default store;
