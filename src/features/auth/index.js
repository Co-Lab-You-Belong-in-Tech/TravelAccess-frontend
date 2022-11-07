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
    loading: false,
    isAuthenticated: false,
    message: null,
  },
  reducers: {
    login: (state, { email, token }) => {
      state.email = email;
      state.token = token;
      state.isAuthenticated = true;
    },
    logout: state => {
      state.token = null;
      state.email = null;
      state.isAuthenticated = false;
    },
    signUp: (state, { email, token }) => {
      state.email = email;
      state.token = token;
      state.isAuthenticated = true;
    },
    clearMessage: state => {
      state.message = null;
    },
  },
  extraReducers: {
    [loginUser.rejected]: (state, action) => {
      return { ...state, loading: false, message: action.payload.message };
    },
    [loginUser.fulfilled]: (state, action) => {
      return {
        ...state,
        ...action.payload,
        loading: false,
        isAuthenticated: true,
      };
    },
    [loginUser.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [registerUser.fulfilled]: (state, action) => {
      return { ...state, ...action.payload, loading: false };
    },
  },
});

export const { login, logout, signUp, clearMessage } = authSlice.actions;
export default authSlice.reducer;
