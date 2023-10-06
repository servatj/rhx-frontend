import { configureStore } from '@reduxjs/toolkit';
import { coverLetterFormSlice } from './coverLetterFormSlice';

export const store = configureStore({
  reducer: {
    counter: coverLetterFormSlice,
  },
});
