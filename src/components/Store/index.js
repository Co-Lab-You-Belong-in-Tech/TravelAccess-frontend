import { configureStore } from '@reduxjs/toolkit';
// import authSlice from '../../features/auth/authSlice';
import checkListSlice from '../../features/checklist/checkListSlice';

export const store = configureStore({
  reducer: {
    checklists: checkListSlice,
    // auth: authSlice,
  },
});
