import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hide_side_bar: false,
  background_color: '#ffff',
};

const config = createSlice({
  name: "config",
  initialState,
  reducers: {
    setHideSideBar(state) {
      state.hide_side_bar = !state.hide_side_bar;
    }, setBackgroundColor(state, action) {
      state.background_color = action.payload;
    }
  },
});

export const configActions = config.actions;

export default config.reducer;
