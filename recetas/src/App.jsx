// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"; 
import { Recetas, Ingredientes, Descripcion, Error404, Topin, Home } from "./pages";
import Menu from './components/Menu';
import Ejemplo from './components/Ejemplo'; 

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Descripcion" element={<Descripcion />} />
            <Route path="/Ingredientes" element={<Ingredientes />} />
            <Route path="/Recetas" element={<Recetas />} />
            <Route path="/Topin" element={<Topin />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
