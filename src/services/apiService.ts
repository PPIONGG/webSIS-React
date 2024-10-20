// services/apiService.ts
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const API_TOKEN = process.env.REACT_APP_API_TOKEN_BEARER;

export const fetchWorkStatus = async (status: string, userName: string) => {
  const response = await axios.get(`${API_BASE_URL}${API_ENDPOINT}`, {
    params: {
      Status: status,
      UserName: userName,
    },
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return response.data;
};
