import React, { useState } from 'react';
import RecetaComida from '../components/RecetaComida'; // Importamos el componente de la receta
import { useRecipeByName } from '../hooks/useRecipeByName'; // Hook para obtener receta por nombre
import '../layout/index.css'; // Importar los estilos de Tailwind

const App = () => {
  const [searchTerm, setSearchTerm] = useState('Arroz de Pollo');
  const { recipe, loading, error } = useRecipeByName(searchTerm);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Proyecto de Recetas
        </h1>

        {/* Formulario de búsqueda */}
        <div className="mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar receta por nombre"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-300 focus:outline-none"
          />
        </div>

        {/* Mostrar loading, error o receta */}
        {loading && <p className="text-center text-blue-500">Cargando...</p>}
        {error && <p className="text-center text-red-500">Error al cargar la receta.</p>}
        {recipe && <RecetaComida receta={recipe} />}
      </div>
    </div>
  );
};

export default App;
