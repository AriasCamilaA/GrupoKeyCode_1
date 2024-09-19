import React, { useState } from 'react';
import { useRecipeByName } from '../hooks/useRecipeByName'; 

export const Home = () => {
  const [recipeName, setRecipeName] = useState("Arrabiata");
  const { recipe, error, loading } = useRecipeByName(recipeName);

  const handleSearch = (e) => {
    e.preventDefault();
    const name = e.target.recipeName.value;
    setRecipeName(name);
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!recipe) return <p>No se encontró ninguna receta</p>;

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="recipeName" placeholder="Nombre de la receta" />
        <button type="submit">Buscar</button>
      </form>

      <h2>{recipe?.name}</h2>
      <img src={recipe?.image} alt={recipe?.name} />
      <p><strong>Categoría:</strong> {recipe?.category}</p>
      <p><strong>Área:</strong> {recipe?.area}</p>
      <p><strong>Instrucciones:</strong> {recipe?.instructions}</p>
      <p><strong>Etiquetas:</strong> {recipe?.tags.join(', ')}</p>
      <p><strong>Video:</strong> <a href={recipe?.youtube} target="_blank" rel="noopener noreferrer">Ver en YouTube</a></p>

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

