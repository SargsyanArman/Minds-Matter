import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(sessionStorage.getItem('user'));

const initialState = {
  email: savedUser?.email || null,
  token: savedUser?.token || null,
  id: savedUser?.id || null,
  emailVerified: savedUser?.emailVerified || false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.emailVerified = action.payload.emailVerified;
      sessionStorage.setItem('user', JSON.stringify({
        email: action.payload.email,
        token: action.payload.token,
        id: action.payload.id,
        emailVerified: action.payload.emailVerified,
      }));
    },
    removeUser: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
      state.emailVerified = false;
      sessionStorage.removeItem('user');
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
