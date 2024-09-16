import { useFetch } from './useFetch'; // Reutilizamos el hook de fetch

export const useRecipesByIngredient = (ingredient) => {
  const RECIPES_BY_INGREDIENT_API = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const { data, error, loading } = useFetch(RECIPES_BY_INGREDIENT_API);

  const recipes = data?.meals?.map((meal) => ({
    id: meal.idMeal,
    name: meal.strMeal,
    image: meal.strMealThumb,
  }));

  return { recipes, error, loading };
};
