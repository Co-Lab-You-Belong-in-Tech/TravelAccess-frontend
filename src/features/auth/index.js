import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../helper/axios';
import print from '../../helper/print';

export const loginUser = createAsyncThunk('auth/loginUser', async email => {
  try {
    const response = await axiosInstance.post('/auth/login', { email: email });
    return response.data;
  } catch (error) {
    return error.response.data;
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
    },
  },
  extraReducers: {
    [loginUser.rejected]: (state, action) => {
      print('user Login Rejected');
    },
    [loginUser.fulfilled]: (state, action) => {
      print('user Login Fulfilled');
      return { ...state, ...action.payload };
    },
    [loginUser.pending]: (state, action) => {
      print('user Login Pending');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
