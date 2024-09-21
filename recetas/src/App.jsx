// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"; 
import { Recetas, Ingredientes, Descripcion, Error404, Topin, Home } from "./pages";
import Menu from './components/Menu';
import Ejemplo from './components/Ejemplo'; 

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-8 text-white">INVENTARIO CULINARIO</h1>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/descripcion" element={<Descripcion />} />
          <Route path="/ingredientes" element={<Ingredientes />} />
          <Route path="/recetas" element={<Recetas />} />
          <Route path="/topin" element={<Topin />} />
          <Route path="/ejemplo" element={<Ejemplo />} /> {/* Nueva ruta para el componente Ejemplo */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
