import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    isAuthenticated: false,
    email: null,
  },
  reducers: {
    logInAction: (state, action) => {
      state.isAuthenticated = true;
      state.email = action.payload.email;
    },

    logOutAction: (state) => {
      state.isAuthenticated = false;
      state.email = null;
    },
  },
});

export const { logInAction, logOutAction } = accountSlice.actions;
export default accountSlice.reducer;
