import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink to= {"/"}> Home </NavLink>
      <NavLink to= {"/Descripcion"}> Descripcion </NavLink>
      <NavLink to= {"/Recetas"}> Recetas </NavLink>
      <NavLink to= {"/ingredientes"}> Ingredientes </NavLink>
      <NavLink to= {"/Topin"}> Topin </NavLink>
    </nav>
  );
};

export default Menu;
