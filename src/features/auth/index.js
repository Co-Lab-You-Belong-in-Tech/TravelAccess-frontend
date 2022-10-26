import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../helper/axios';

export const loginUser = createAsyncThunk('auth/loginUser', async email => {
  try {
    const response = await axiosInstance.post('/auth/login', { email: email });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    email: null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, { email, token }) => {
      state.email = email;
      state.token = token;
    },
    logout: state => {
      state.user = null;
      state.email = null;
      state.error = null;
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      console.log('user Login Fulfilled');
      return { ...state, ...action.payload };
    },
    [loginUser.rejected]: (state, action) => {
      console.log('user Login Rejected');
    },
    [loginUser.pending]: (state, action) => {
      console.log('user Login Pending');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
