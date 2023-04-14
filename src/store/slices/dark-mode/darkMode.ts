import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: { toggleDarkMode: (state) => !state },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export const darkModeReducer = darkModeSlice.reducer;
