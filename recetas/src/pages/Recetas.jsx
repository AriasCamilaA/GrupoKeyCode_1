
import React, { useState } from 'react';
import { useRecipesByIngredient } from '../hooks/useRecipesByIngredient';

export const Recetas = () => {
  const [ingredient, setIngredient] = useState('chicken_breast');
  const { recipes, error, loading } = useRecipesByIngredient(ingredient);

  const handleSearch = (e) => {
    e.preventDefault();
    const ingredientName = e.target.ingredient.value;
    setIngredient(ingredientName);
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="ingredient" placeholder="Nombre del ingrediente" />
        <button type="submit">Buscar</button>
      </form>

      <div>
        {recipes && recipes?.length > 0 ? (
          recipes?.map((recipe) => (
            <div key={recipe.id}>
              <h3>{recipe.name}</h3>
              <img src={recipe.image} alt={recipe.name} />
            </div>
          ))
        ) : (
          <p>No se encontraron recetas para este ingrediente</p>
        )}
      </div>
    </div>
  );
};


