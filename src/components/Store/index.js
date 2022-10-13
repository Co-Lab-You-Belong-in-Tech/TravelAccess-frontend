import { configureStore } from '@reduxjs/toolkit';
import checkListSlice from '../../features/checklist/checkListSlice';

export const store = configureStore({
  reducer: {
    checklists: checkListSlice,
  },
});
