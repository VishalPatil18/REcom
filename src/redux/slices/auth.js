import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "../asyncThunks";

const initialState = {
  user: {},
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: {
    [login.pending]: (state) => {},
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.data.foundUser;
      state.token = action.payload.data.encodedToken;
    },
    [login.rejected]: (state, action) => {
      console.log(action);
    },
    [signup.pending]: (state) => {},
    [signup.fulfilled]: (state, action) => {
      state.user = action.payload.data.createdUser;
      state.token = action.payload.data.encodedToken;
    },
    [signup.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export const { reducer: authReducer } = authSlice;

export const { logout } = authSlice.actions;
