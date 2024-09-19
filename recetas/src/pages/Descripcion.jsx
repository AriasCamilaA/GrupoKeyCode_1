import React from 'react';
import { useRecipeById } from '../hooks/useRecipeById';

export const Descripcion = () => {
  const { recipe, error, loading } = useRecipeById(52818);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!recipe) return <p>No se encontró ninguna receta</p>;

  return (
    <div>
      <h2>{recipe?.name}</h2>
      <img src={recipe?.image} alt={recipe?.name} />
      <p><strong>Categoría:</strong> {recipe?.category}</p>
      <p><strong>Área:</strong> {recipe?.area}</p>
      <p><strong>Instrucciones:</strong> {recipe?.instructions}</p>
      <p><strong>Etiquetas:</strong> {recipe?.tags.join(', ')}</p>
      <p><strong>Video:</strong> <a href={recipe?.youtube} target="_blank" rel="noopener noreferrer">Ver en YouTube</a></p>

    </div>
  );
};
