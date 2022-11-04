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

export const registerUser = createAsyncThunk('api/registerUser', async data => {
  try {
    const response = await axiosInstance.post('/api/users', data);
    print(response.data);
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
    message: null,
  },
  reducers: {
    login: (state, { email, token }) => {
      state.email = email;
      state.token = token;
    },
    logout: state => {
      state.token = null;
      state.email = null;
    },
    signUp: (state, { email, token }) => {
      state.email = email;
      state.token = token;
    },
    clearMessage: state => {
      state.message = null;
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
    [registerUser.fulfilled]: (state, action) => {
      print('user Registration Fulfilled');
      return { ...state, ...action.payload };
    },
  },
});

export const { login, logout, signUp, clearMessage } = authSlice.actions;
export default authSlice.reducer;
