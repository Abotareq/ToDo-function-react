import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./state.slice/langaugeSlice.js";
import favReducer from "./state.slice/favSlice.js";
const store = configureStore({
  reducer: {
    language: languageReducer,
    fav: favReducer,
  }, 
});

export default store;
