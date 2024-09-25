
import React, { useState } from 'react';
import { useRecipesByIngredient } from '../hooks/useRecipesByIngredient';
import { useParams } from 'react-router-dom';

export const Recetas = () => {
  const {NameIngredient} = useParams()
  const [ingredient, setIngredient] = useState(NameIngredient ?  NameIngredient : "");
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
              <a href={`/Descripcion/${recipe.id}`}>{recipe.name}</a>
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


