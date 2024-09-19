import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink to= {"/"}> Home </NavLink>
      <NavLink to= {"/Acerca"}> Descripcion </NavLink>
      <NavLink to= {"/Productos"}> Recetas </NavLink>
      <NavLink to= {"/Servicios"}> Ingredientes </NavLink>
      <NavLink to= {"/Servicios"}> Topin </NavLink>
    </nav>
  );
};

export default Menu;
