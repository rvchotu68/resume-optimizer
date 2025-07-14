/* eslint-disable no-useless-catch */
import axios from "axios";

// Users

// Resume

export const sendResume = async (id, formData) => {
  let serverURL = import.meta.env.VITE_BACKEND_URL;

  let endpoint = import.meta.env.VITE_RESUME_ENDPOINT;
  endpoint = endpoint.replace(/$id/, id);

  serverURL = serverURL + endpoint;

  try {
    const data = await axios(serverURL, formData);
    return data;
  } catch (err) {
    throw err;
  }
};
