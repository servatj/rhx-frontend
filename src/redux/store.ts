import { configureStore } from '@reduxjs/toolkit';
import { coverLetterFormSlice } from './coverLetterFormSlice';

export const store = configureStore({
  reducer: {
    coverLetterFormSlice: coverLetterFormSlice.reducer,
  },
});
