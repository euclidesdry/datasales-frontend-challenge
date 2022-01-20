import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
  timeout: 2000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, X-Requested-With",
  },
});

export default instance;
