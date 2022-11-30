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

export const registerUser = createAsyncThunk(
  'api/registerUser',
  async (data, rejectWithValue) => {
    try {
      const response = await axiosInstance.post('/api/users', data);
      print(response.data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

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
      state.isAuthenticated = null;
      state.email = null;
      state.token = null;
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
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state, action) => {
        return { ...state, loading: true };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        return {
          ...state,
          ...action.payload,
          loading: false,
          isAuthenticated: true,
        };
      })
      .addCase(loginUser.rejected, (state, action) => {
        return {
          ...state,
          // ...action.payload,
          message: action.payload,
          loading: false,
          isAuthenticated: false,
        };
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        return { ...state, ...action.payload, loading: false };
      });
  },
});

export const { login, logout, signUp, clearMessage } = authSlice.actions;
export default authSlice.reducer;
