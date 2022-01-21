import axios from "../services.config";

export async function getDrinks() {
  try {
    const response = await axios.get(
      "/top-headlines?country=us&category=business"
    );
    console.log(response);
    return response.data.drinks;
  } catch (error) {
    console.log(error);
  }
}
