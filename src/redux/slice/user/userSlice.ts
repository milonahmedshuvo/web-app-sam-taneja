// src/redux/slices/userSlice.ts
import { RootState } from '@/redux/store';
import { createSlice,  } from '@reduxjs/toolkit';

export interface TUserState {
  id: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

export type TAuthState = {
  user: null | TUserState;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};



const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;

export const useCurrentToken = (state: RootState) => state.user.token;
export const selectCurrentUser = (state: RootState) => state.user.user;