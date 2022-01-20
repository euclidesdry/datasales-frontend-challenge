import axios from '../services.config';

export async function getDrinks() {
  try {
    const response = await axios.get("/search.php?s=coffee");
    console.log(response)
    return response.data.drinks;
  } catch (error) {
    console.log(error);
  }
};