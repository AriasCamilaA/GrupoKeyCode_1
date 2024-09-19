import React from 'react';
import { useRecipeById } from '../hooks/useRecipeById';

const Ingredientes = () => {
  const { recipe, error, loading } = useRecipeById(52818);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!recipe) return <p>No se encontró ninguna receta</p>;

  return (
    <div>
      <h2>{recipe?.name}</h2>
      
      <h3>Ingredientes</h3>
      <ul>
        {recipe?.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient} - {recipe?.measures[index]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredientes;