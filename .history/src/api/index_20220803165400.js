import axios from "axios";
import { API_BASE } from "../service/envConstants";

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
    return Promise.reject(error.response.headers['x-message']);
  }
};

export default api;
