import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../helper/axios';

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
    loading: true,
    message: null,
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
      return { ...state, trips: action.payload, loading: false };
    },
    [fetchTrips.rejected]: (state, action) => {
      return { ...state, message: action.payload, loading: false };
    },
    [fetchTrips.pending]: (state, action) => {
      return { ...state, loading: true };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = tripsSlice.actions;

export default tripsSlice.reducer;
