import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/recetas" className="text-white hover:text-gray-400">Recetas</Link>
        </li>
        <li>
          <Link to="/ingredientes" className="text-white hover:text-gray-400">Ingredientes</Link>
        </li>
        <li>
          <Link to="/ejemplo" className="text-white hover:text-gray-400">Ejemplo</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
