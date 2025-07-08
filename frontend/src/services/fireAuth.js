import { getAuth, onAuthStateChanged } from "firebase/auth";

import app from "./firebase";

const auth = getAuth(app);

export const getUserStatus = async () => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user signed In : ");
    } else {
      console.log("user signed out: ");
    }
  });

  return unsubscribe;
};
