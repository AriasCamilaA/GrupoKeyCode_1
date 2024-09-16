import { useFetch } from './useFetch'; // Asumo que el hook lo tienes en un archivo separado

const INGREDIENTS_API = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
const IMAGE_BASE_URL = "https://www.themealdb.com/images/ingredients/";

export const useIngredients = () => {
  const { data, error, loading } = useFetch(INGREDIENTS_API);

  const ingredients = data?.meals?.map((ingredient) => ({
    id: ingredient.idIngredient,
    name: ingredient.strIngredient,
    image: `${IMAGE_BASE_URL}${ingredient.strIngredient}.png`,
    imageSmall: `${IMAGE_BASE_URL}${ingredient.strIngredient}-Small.png`,
  }));

  return { ingredients, error, loading };
};
