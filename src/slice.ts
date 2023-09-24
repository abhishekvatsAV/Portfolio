import { createSlice } from "@reduxjs/toolkit";

const theme = createSlice({
  name: "themes",
  initialState: {
    value: "dark",
  },
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = theme.actions;

export default theme.reducer;
