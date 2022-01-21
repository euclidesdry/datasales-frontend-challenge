import axios from "axios";

const API_KEY = "cd0ca7d83764493a9ce3be70836f041c";

const instance = axios.create({
  baseURL: "https://newsapi.org/v2",
  timeout: 2000,
  headers: {
    "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, X-Requested-With",
    "X-Api-Key": API_KEY,
  },
});

export default instance;
