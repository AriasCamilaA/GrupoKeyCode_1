import React from 'react';
import { useRecipeById } from '../hooks/useRecipeById';
import { useParams } from 'react-router-dom';

export const Pasos = () => {
  const { IdReceta } = useParams()
  const { recipe, error, loading } = useRecipeById(IdReceta);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!recipe) return <p>No se encontró ninguna receta</p>;

  return (
    <div>
      <h2>{recipe?.name}</h2>
      <p><strong>Pasos:</strong> {recipe?.instructions}</p>
    </div>
  );
};
