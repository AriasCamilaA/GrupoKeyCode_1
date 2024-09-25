import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import { Recetas, Ingredientes, Descripcion, Error404, Home} from "./pages";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Recetas />} />
            <Route path="/Descripcion/:IdReceta" element={<Descripcion />} />
            <Route path="/Ingredientes" element={<Ingredientes />} />
            <Route path="/Recetas/:NameIngredient" element={<Recetas />} />
            <Route path="/Recetas" element={<Recetas />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
