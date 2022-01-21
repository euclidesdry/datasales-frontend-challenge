import axios from "axios";

// API_KEY from https://newsapi.org/v2
const API_KEY = "cd0ca7d83764493a9ce3be70836f041c";
const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://www.thecocktaildb.com/api/json/v1/1"
    : "http://localhost:9002/";

const instance = axios.create({
  baseURL: API_URL,
  timeout: 3000,
  headers: {
    "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, X-Requested-With",
    "X-Api-Key": API_KEY,
  },
});

export default instance;
