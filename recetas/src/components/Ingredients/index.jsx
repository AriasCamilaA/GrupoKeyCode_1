import React from 'react';
import { useIngredients } from '../../hooks/useIngredients'


export const Ingredients = () => {
  const { ingredients, error, loading } = useIngredients();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="h-screen overflow-auto gap-1 p-1 w-20 bg_pastel-dark"> 
      {ingredients?.map((ingredient) => (
        <div
          key={ingredient.id}
          className="w-full"
        >
          {/* Imagen del ingrediente */}
          <a href={`/Recetas/${ingredient.name}`}>
          <img
            src={ingredient.imageSmall}
            alt={ingredient.name}
            className="bg_pastel-teal w-20 h-20 object-cover rounded-full shadow-md transition-transform transform hover:scale-110 cursor-pointer"
          />
            </a>
        </div>
      ))}
    </div>
  );
};
