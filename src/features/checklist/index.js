import { createSlice } from '@reduxjs/toolkit';

export const checkListSlice = createSlice({
  name: 'checklist',

  initialState: {
    checklist: [],
  },
  reducers: {
    addItem: (state, actions) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.checklist.push(actions.payload);
    },
    removeItem: (state, actions) => {
      state.checklist = state.checklist.filter(
        item => item.id !== actions.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = checkListSlice.actions;

export default checkListSlice.reducer;
