import { useFetch } from './useFetch';

const CATEGORIES_API = "https://www.themealdb.com/api/json/v1/1/categories.php";

export const useCategories = () => {
  const { data, error, loading } = useFetch(CATEGORIES_API);

  const categories = data?.categories?.map((category) => ({
    id: category.idCategory,
    name: category.strCategory,
    image: category.strCategoryThumb,
    description: category.strCategoryDescription,
  }));

  return { categories, error, loading };
};
