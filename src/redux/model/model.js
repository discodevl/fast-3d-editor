import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exposure: 1,
  shadow_intensity: 0,
  shadow_softness: 1,
  material_index: 0,
  metalness: 0,
  roughness: 0,
};

const model = createSlice({
  name: "model",
  initialState,
  reducers: {
    setExposure(state, action) {
      state.exposure = action.payload;
    },
    setShadowIntensity(state, action) {
      state.shadow_intensity = action.payload;
    },
    setShadowSoftness(state, action) {
      state.shadow_softness = action.payload;
    },
    setMaterialIndex(state, action) {
      state.material_index = action.payload;
    },
    setMetalness(state, action) {
      state.metalness = action.payload;
    },
    setRoughness(state, action) {
      state.roughness = action.payload;
    }
  },
});

export const modelActions = model.actions;

export default model.reducer;
