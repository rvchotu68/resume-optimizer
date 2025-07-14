import { createSlice } from "@reduxjs/toolkit";

const initData = {
  uid: "",
  email: "",
  displayName: "",
  photoURL: "",
  isAuthDone: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initData,
  reducers: {
    setUser: (_, { payload }) => {
      const { uid, email, displayName, photoURL } = payload;
      return {
        uid,
        email,
        displayName,
        photoURL,
        isAuthDone: true,
      };
    },
    signout: () => {
      return { ...initData, isAuthDone: true };
    },
  },
});

export const { setUser, signout } = userSlice.actions;

export default userSlice.reducer;

export const getUserData = (state) => {
  return state.user;
};
