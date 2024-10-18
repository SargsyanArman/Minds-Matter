import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlices";
import modeReducer from "./Slices/modeSlices";
import favoriteReducer from './Slices/FavoriteSlices';

export const store = configureStore({
  reducer: {
    user: userReducer,
    mode: modeReducer,
    favorites: favoriteReducer
  },
});
