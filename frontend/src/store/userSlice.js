import { createSlice } from "@reduxjs/toolkit";

const initData = {
  uuid: "",
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
      const { uuid, email, displayName, photoURL } = payload;
      return {
        uuid,
        email,
        displayName,
        photoURL,
        isAuthDone: true,
      };
    },
    signout: () => {
      return { ...initData };
    },
  },
});

export const { setUser, signout } = userSlice.actions;

export default userSlice.reducer;

export const getUserData = (state) => state.user;
