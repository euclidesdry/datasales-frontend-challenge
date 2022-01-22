import axios from "../services.config";

export interface IDrink {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsDE: string;
  strInstructionsIT: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}

export const LOGIN_USERS = [
  {
    id: 1,
    username: "Euclides",
    email: "euclidesdry@challenge.com.br",
    password: "@123456",
  },
  {
    id: 2,
    username: "Admin",
    email: "admin@challenge.com.br",
    password: "@12345678",
  },
];

const API_QUERY_STRING =
  process.env.NODE_ENV === "production" ? "/search.php?s=coffee" : "/drinks";

export async function login() {
  return LOGIN_USERS;
}

export async function getDrinks() {
  try {
    const response = await axios.get<IDrink[]>(API_QUERY_STRING);
    return response.data;
  } catch (error) {
    console.warn(error);
  }
}
