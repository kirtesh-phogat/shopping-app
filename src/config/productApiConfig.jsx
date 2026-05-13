import axios from "axios";

const productsApi = axios.create({
  baseURL: import.meta.env.VITE_PRODUCTS_API_URL,
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

export default productsApi;
