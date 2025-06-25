import { createSlice } from "@reduxjs/toolkit";
const favSlice = createSlice({
  name: "fav",
  initialState: {
    favs: [],
  },
  reducers: {
    addFav: (state, action) => {
      state.favs.push(action.payload);
    },
    removeFav: (state, action) => {
      state.favs = state.favs.filter((fav) => fav.id !== action.payload.id);
    },
    clearFavs: (state) => {
      state.favs = [];
    },
  },
});
export const { addFav, removeFav, clearFavs } = favSlice.actions;
export default favSlice.reducer;