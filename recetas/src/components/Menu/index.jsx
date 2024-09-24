import { NavLink } from "react-router-dom";
import './Menu.css';

const Menu = () => {
  return (
    <nav className="w-full bg-pastel-blue p-4">
      <ul className="flex justify-around space-x-2">
        {['/', '/Descripcion', '/Recetas', '/ingredientes'].map((path, index) => (
          <li key={index} className="flex-1">
            <NavLink
              to={path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`
              }
            >
              {['Home', 'Descripcion', 'Recetas', 'Ingredientes'][index]}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
