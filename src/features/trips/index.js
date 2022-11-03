import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../helper/axios';
import print from '../../helper/print';

export const fetchTrips = createAsyncThunk('trips/fetchTrips', async () => {
  try {
    const response = await axiosInstance.get('/api/trips');
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
});

export const tripsSlice = createSlice({
  name: 'trips',

  initialState: {
    trips: [],
  },
  reducers: {
    addItem: (state, actions) => {
      state.trips.push(actions.payload);
    },
    removeItem: (state, actions) => {
      state.trips = state.trips.filter(item => item.id !== actions.payload.id);
    },
  },
  extraReducers: {
    [fetchTrips.fulfilled]: (state, action) => {
      return { ...state, trips: action.payload };
    },
    [fetchTrips.rejected]: (state, action) => {
      console.log('user Login Rejected');
    },
    [fetchTrips.pending]: (state, action) => {
      console.log('user Login Pending');
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = tripsSlice.actions;

export default tripsSlice.reducer;
