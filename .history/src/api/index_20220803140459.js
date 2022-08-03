import axios from "axios";
import { API_BASE } from "../services/envConstants";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  baseURL: `${API_BASE}/api/`,
};
const axiosInstance = axios.create(config);

const api = async (options) => {
  try {
    const response = await axiosInstance(options);
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return Promise.reject(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      return Promise.reject(error.message);
    }
  }
};

export default api;
