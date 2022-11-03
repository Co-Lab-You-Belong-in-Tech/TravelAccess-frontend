import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth';
import checkListSlice from '../features/checklist';
import tripsSlice from '../features/trips';

export const store = configureStore({
  reducer: {
    checklists: checkListSlice,
    auth: authSlice,
    trips: tripsSlice,
  },
});
