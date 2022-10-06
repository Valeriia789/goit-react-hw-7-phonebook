import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    findContact: {
      reducer (state, action) {
        return (state = action.payload);
      },
    },
  },
});

export const { findContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
