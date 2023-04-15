import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface AuthState {
  authState: boolean;
  user: {
    id: string;
    email: string;
  } | null;
}

// Initial state
const initialState: AuthState = {
  authState: false,
  user: null,
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      state.authState = action.payload;
    },
    setUserState(state, action: PayloadAction<{id: string, email: string} | null >) {
      state.user = action.payload;
    }
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setAuthState, setUserState } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth;

export default authSlice.reducer;