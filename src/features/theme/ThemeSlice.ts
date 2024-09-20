// ThemeSlice.ts

import { createSlice } from '@reduxjs/toolkit';

const ThemeSlice = createSlice({
  name: 'theme',
  initialState: { darkMode: false },
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = ThemeSlice.actions;
export default ThemeSlice.reducer;
