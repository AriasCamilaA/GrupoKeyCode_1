import { useFetch } from './useFetch'; // Reutilizamos el hook de fetch

export const useRecipeById = (id) => {
  const RECIPE_BY_ID_API = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data, error, loading } = useFetch(RECIPE_BY_ID_API);

  const recipe = data?.meals?.[0] ? {
    id: data.meals[0].idMeal,
    name: data.meals[0].strMeal,
    category: data.meals[0].strCategory,
    area: data.meals[0].strArea,
    instructions: data.meals[0].strInstructions,
    image: data.meals[0].strMealThumb,
    tags: data.meals[0].strTags?.split(',') || [],
    youtube: data.meals[0].strYoutube,
    ingredients: Object.keys(data.meals[0])
      .filter(key => key.startsWith("strIngredient") && data.meals[0][key])
      .map(key => data.meals[0][key]),
    measures: Object.keys(data.meals[0])
      .filter(key => key.startsWith("strMeasure") && data.meals[0][key])
      .map(key => data.meals[0][key]),
  } : null;

  return { recipe, error, loading };
};
