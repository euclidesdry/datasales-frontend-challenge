import { AxiosResponse } from "axios";
import axios from "../services.config";

export interface IDrink {
  idDrink: number;
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

export async function getDrinks() {
  try {
    const response = await axios.get<IDrink[]>("/drinks");
    return response.data;
  } catch (error) {
    console.warn(error);
  }
}
