import { createSlice } from '@reduxjs/toolkit';

export const coverLetterFormSlice = createSlice({
  'name': 'cover',
  'initialState': {},

  'reducers': {
    'update': (state, action) => {
      return action.payload;
    },
  },
});

export const { update } = coverLetterFormSlice.actions;
export const selectCover = (state) => state.cover.cover;
