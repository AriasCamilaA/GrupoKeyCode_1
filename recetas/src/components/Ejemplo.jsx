import React from 'react';

const Ejemplo = () => {
  // Datos simulados para una receta (pueden venir de una API o hook)
  const recetaEjemplo = {
    name: "Spaghetti Bolognese",
    area: "Italia",
    category: "Pasta",
    image: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
    ingredients: ["500g Spaghetti", "400g Carne molida", "Tomates", "Ajo", "Cebolla", "Sal", "Pimienta"],
    instructions: "Cocinar la pasta. Preparar la salsa con carne y tomate. Mezclar y servir caliente."
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      {/* Título de la receta */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        {recetaEjemplo.name}
      </h1>

      {/* Descripción con categoría y área */}
      <p className="text-lg text-gray-600 text-center mb-6">
        {recetaEjemplo.area}, Categoría: {recetaEjemplo.category}
      </p>

      {/* Imagen de la receta */}
      <div className="flex justify-center mb-6">
        <img
          src={recetaEjemplo.image}
          alt={recetaEjemplo.name}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Ingredientes listados */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Ingredientes</h2>
        <ul className="list-disc list-inside text-gray-700">
          {recetaEjemplo.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instrucciones para preparar la receta */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Instrucciones</h2>
        <p className="text-gray-700">{recetaEjemplo.instructions}</p>
      </div>

      {/* Botón para ver más recetas */}
      <div className="text-center mt-6">
        <button className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition duration-300">
          Ver más recetas
        </button>
      </div>
    </div>
  );
}

export default Ejemplo;
