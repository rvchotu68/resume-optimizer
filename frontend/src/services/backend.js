/* eslint-disable no-useless-catch */
import axios from "axios";
import auth from "./fireAuth";
import data from "./../data";

// Users

// Resume

export const sendResume = async (formData) => {
  const token = await auth.currentUser.getIdToken();
  let serverURL = import.meta.env.VITE_BACKEND_URL;

  const endpoint = import.meta.env.VITE_RESUME_ENDPOINT;

  serverURL = serverURL + endpoint;

  try {
    // const data = await axios.post(serverURL, formData, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "multipart/form-data",
    //   },
    //   withCredentials: true,
    // });
    return data;
  } catch (err) {
    throw err;
  }
};
