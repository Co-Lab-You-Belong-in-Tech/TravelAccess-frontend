import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../helper/axios';
import print from '../../helper/print';

export const fetchTrips = createAsyncThunk('trips/fetchTrips', async () => {
  const response = await axiosInstance.get('/api/trips');
  return response.data;
});

export const addTrip = createAsyncThunk('trips/addTrip', async data => {
  print(data);
  const response = await axiosInstance.post('/api/trips', data);
  return response.data;
});

export const tripsSlice = createSlice({
  name: 'trips',

  initialState: {
    trips: [],
    loading: true,
    message: null,
    error: false,
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
    [addTrip.rejected]: (state, action) => {
      return {
        ...state,
        message: action.payload,
        loading: false,
        error: true,
      };
    },
    [addTrip.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [addTrip.fulfilled]: (state, action) => {
      return { ...state, trips: action.payload, loading: false };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = tripsSlice.actions;

export default tripsSlice.reducer;
