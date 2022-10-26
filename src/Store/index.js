import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth';
import checkListSlice from '../features/checklist';

export const store = configureStore({
  reducer: {
    checklists: checkListSlice,
    auth: authSlice,
  },
});
