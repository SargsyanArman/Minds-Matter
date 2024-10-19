import { createSlice } from "@reduxjs/toolkit";

const initialMode = sessionStorage.getItem("mode") || "light";

const modeSlice = createSlice({
  name: "mode",
  initialState: {
    mode: initialMode,
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
      sessionStorage.setItem("mode", action.payload);
    },
  },
});

export const { setMode } = modeSlice.actions;

export default modeSlice.reducer;
