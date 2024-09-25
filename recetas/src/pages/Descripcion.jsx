import React from 'react';
import { useRecipeById } from '../hooks/useRecipeById';
import { useParams } from 'react-router-dom';

export const Descripcion = () => {
  const { IdReceta } = useParams()
  const { recipe, error, loading } = useRecipeById(IdReceta);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!recipe) return <p>No se encontró ninguna receta</p>;

  return (
    <div>
      <h2>{recipe?.name}</h2>
      <img src={recipe?.image} alt={recipe?.name} />
      <p><strong>Categoría:</strong> {recipe?.category}</p>
      <p><strong>Área:</strong> {recipe?.area}</p>
      <p><strong>Video:</strong> <a href={recipe?.youtube} target="_blank" rel="noopener noreferrer">Ver en YouTube</a></p>

    </div>
  );
};
