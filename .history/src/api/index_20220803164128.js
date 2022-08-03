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
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.response);
    return Promise.reject(error.message);
  }
};

export default api;
