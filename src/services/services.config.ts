import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
  timeout: 2000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
    "X-Custom-Header": "Datasales App",
  },
});

export default instance;
