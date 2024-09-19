import React from 'react';

const RecetaComida = ({ receta }) => {
  if (!receta) {
    return <p className="text-center text-red-500">Cargando receta...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Título de la receta */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        {receta.name}
      </h1>

      {/* Descripción con categoría y área */}
      <p className="text-lg text-gray-600 text-center mb-6">
        {receta.area}, Categoría: {receta.category}
      </p>

      {/* Imagen de la receta */}
      <div className="flex justify-center mb-6">
        <img
          src={receta.image}
          alt={receta.name}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Ingredientes listados */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Ingredientes</h2>
        <ul className="list-disc list-inside text-gray-700">
          {receta.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instrucciones para preparar la receta */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Instrucciones</h2>
        <p className="text-gray-700">{receta.instructions}</p>
      </div>

      {/* Botón para ver más recetas */}
      <div className="text-center mt-6">
        <button className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition duration-300">
          Ver más recetas
        </button>
      </div>
    </div>
  );
};

export default RecetaComida;
