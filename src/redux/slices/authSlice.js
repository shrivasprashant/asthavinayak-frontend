import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiClient from '../../api/apiClient';


// Base config
axios.defaults.withCredentials = true;

// Register user
export const registerUser = createAsyncThunk('auth/register', async (formData, thunkAPI) => {
  try {
    const res = await apiClient.post('/users/register', formData);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

// Send OTP
export const sendOtp = createAsyncThunk('auth/sendOtp', async (mobile, thunkAPI) => {
  try {
    const res = await apiClient.post('/users/send-otp', { mobile });
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

// Verify OTP
export const verifyOtp = createAsyncThunk('auth/verifyOtp', async (data, thunkAPI) => {
  try {
    const res = await apiClient.post('/users/verify-otp', data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

// Login (with password)
// authSlice.ts
export const loginUser = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const res = await apiClient.post('/users/login', credentials);
    // Save user data to localStorage immediately
    localStorage.setItem("user", JSON.stringify({
      ...res.data.user,
      token: res.data.token
    }));
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

// Fetch Profile
export const fetchProfile = createAsyncThunk('auth/fetchProfile', async (_, thunkAPI) => {
  try {
    const res = await apiClient.get('/users/profile');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

// Logout
export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const res = await apiClient.post('/users/logout');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
    success: false,
    message: null,
  },
  reducers: {
    clearAuthState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Send OTP
      .addCase(sendOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Verify OTP
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.message = action.payload.message;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.message = action.payload.message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Profile
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.success = true;
        state.message = 'Logged out successfully';
      });
  },
});

export const { clearAuthState } = authSlice.actions;

export default authSlice.reducer;
