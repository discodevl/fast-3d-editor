import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hide_side_bar: false,
};

const config = createSlice({
  name: "config",
  initialState,
  reducers: {
    setHideSideBar(state) {
      state.hide_side_bar = !state.hide_side_bar;
    },
  },
});

export const configActions = config.actions;

export default config.reducer;
