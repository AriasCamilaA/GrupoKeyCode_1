# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 15 de septiembre 2024

Instalar Tailwind CSS:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

## Estructura de la Aplicación

Necesitamos varios componentes:

1. Barra lateral de navegación (puede contener filtros).
2. Vista de todas las recetas (mostrando platos con base en ingredientes seleccionados).
3. Descripción del plato seleccionado.
4. Lista de ingredientes y valores nutricionales.

Componentes en React:

App.js (Estructura principal)
Barra lateral (`Sidebar.jsx`)
Esta barra lateral permitirá al usuario seleccionar ingredientes.

Lista de recetas (`RecipesList.jsx`)
Aquí mostramos las recetas que coinciden con el ingrediente seleccionado.

Descripción de la receta (`RecipeDetail.jsx`)
Mostramos la descripción del plato seleccionado.

Lista de ingredientes (`IngredientsList.jsx`)
Aquí mostramos los ingredientes, el contenido calórico y posibles alergias del plato seleccionado.

Conectar con TheMealDB**

## Ya que tenemoss una estructura básica, ahora se conecta con la API de TheMealDB. En los componentes `RecipesList` y `RecipeDetail`, utilizamos Axios para hacer peticiones a la API de TheMealDB. 

Instalamos Axios:

npm install axios


