/* eslint-disable no-useless-catch */
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  updateProfile,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import app from "./firebase";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const singUPUserWithEmail = async (user) => {
  const { email, password, first, last, imgURL } = user;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("user logged in successfully");
    await updateUserProfile({
      displayName: `${first}${last}`,
      photoURL: `${imgURL}`,
    });
  } catch (err) {
    throw err;
  }
};

export const signInUserWithEmail = async (user) => {
  const { email, password } = user;

  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    throw err;
  }
};

export const authWithProvider = async (type) => {
  const provider = type === "google" ? googleProvider : githubProvider;

  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    throw err;
  }
};

export const updateUserProfile = async ({ displayName, photoURL }) => {
  try {
    await updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
    console.log("Update user profile");
  } catch (err) {
    throw err;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    throw err;
  }
};

export default auth;
