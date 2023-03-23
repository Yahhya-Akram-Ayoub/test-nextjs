import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const API_URL = "https://localhost:7246";

export const login = createAsyncThunk(
  "user/login",
  async ({ Email, Pass }, thunkAPI) => {
    const response = await fetch(
      `${API_URL}/api/User/login?Email=${Email}&Pass=${Pass}`
    );
    return response.json();
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = 'null user';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
