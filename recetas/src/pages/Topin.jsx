import React from 'react';
import { useIngredients } from '../hooks/useIngredients';

export const Topin = () => {
  const { ingredients, error, loading } = useIngredients();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {ingredients?.map((ingredient) => (
        <div key={ingredient.id}>
          <h3>{ingredient.name}</h3>
          <img src={ingredient.imageSmall} alt={ingredient.name} />
        </div>
      ))}
    </div>
  );
};