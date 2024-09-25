import { NavLink, useHref } from "react-router-dom";
import './Menu.css';

const Menu = () => {
  const ref = useHref();
  const IdReceta = ref.split("/")[2];

  const menuItems = [
    { path: '/', label: 'Home', requiresId: false },
    { path: `/Descripcion/${IdReceta}`, label: 'Descripcion', requiresId: true },
    { path: `/Pasos/${IdReceta}`, label: 'Pasos', requiresId: true },
    { path: `/Ingredientes/${IdReceta}`, label: 'Ingredientes', requiresId: true }
  ];

  return (
    <nav className="w-full bg-pastel-blue p-4">
      <ul className="flex justify-around space-x-2">
        {menuItems.map((item, index) => (
          <li key={index} className="flex-1">
            {/* Si requiere IdReceta y no está presente, deshabilitamos el enlace */}
            {item.requiresId && !IdReceta ? (
              <span className="nav-link-disabled nav-link">{item.label}</span>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active nav-link' : 'nav-link-inactive '}`
                }
              >
                {item.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
