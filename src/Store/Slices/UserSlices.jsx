import { createSlice } from "@reduxjs/toolkit";

const saveUserToStorage = (user) => {
  sessionStorage.setItem('user', JSON.stringify(user));
};

const removeUserFromStorage = () => {
  sessionStorage.removeItem('user');
};

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
      const { email, token, id, emailVerified } = action.payload;
      Object.assign(state, { email, token, id, emailVerified });
      saveUserToStorage({ email, token, id, emailVerified });
    },
    removeUser: (state) => {
      Object.assign(state, {
        email: null,
        token: null,
        id: null,
        emailVerified: false,
      });
      removeUserFromStorage();
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
