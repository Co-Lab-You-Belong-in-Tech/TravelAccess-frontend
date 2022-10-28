import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../helper/axios';

export const fetchChecklist = createAsyncThunk(
  'checklist/fetchChecklist',
  async () => {
    try {
      const response = await axiosInstance.get('/api/check_list');
      return response.data;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

export const checkListSlice = createSlice({
  name: 'checklist',

  initialState: {
    checklist: [],
  },
  reducers: {
    addItem: (state, actions) => {
      state.checklist.push(actions.payload);
    },
    removeItem: (state, actions) => {
      state.checklist = state.checklist.filter(
        item => item.id !== actions.payload.id
      );
    },
  },
  extraReducers: {
    [fetchChecklist.fulfilled]: (state, action) => {
      return { ...state, checklist: action.payload };
    },
    [fetchChecklist.rejected]: (state, action) => {
      console.log('user Login Rejected');
    },
    [fetchChecklist.pending]: (state, action) => {
      console.log('user Login Pending');
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = checkListSlice.actions;

export default checkListSlice.reducer;
