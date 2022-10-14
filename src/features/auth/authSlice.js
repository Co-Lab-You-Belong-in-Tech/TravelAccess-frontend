import { createSlice } from '@reduxjs/toolkit';
// import axiosInstance from '../../components/helper/axios';

// export const fetchUser = createAsyncThunk(
//   'auth/login',
//   async (email, thunkAPI) => {
//     const response = await axiosInstance.post('/auth/login', email);
//     return response.data;
//   }
// );

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    email: null,
    isAuthenticated: false,
    token: null,
  },
  reducers: {
    login: (state, actions) => {
      state.user = actions.payload.user;
      state.email = actions.payload.email;
      state.isAuthenticated = true;
      state.token = actions.payload.token;
    },
    logout: state => {
      state.user = null;
      state.email = null;
      state.isAuthenticated = false;
      state.token = null;
    },
  },
  extraReducers: {},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
