import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ||
  "https://u53gj338bl.execute-api.us-east-1.amazonaws.com/default/datagolf-backend";

export const api = axios.create({
  baseURL: API_BASE_URL,
});