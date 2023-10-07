import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export const coverLetterFormSlice = createSlice({
  'name': 'cover',
  'initialState': {},

  'reducers': {
    'update': (state: RootState, action) => {
      return action.payload;
    },
  },
});

export const { update } = coverLetterFormSlice.actions;
export const selectCover = (state: RootState) => state.cover.cover;

export default coverLetterFormSlice.reducer
