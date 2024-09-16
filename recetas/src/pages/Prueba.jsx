// COMO LLAMAR LOS INGREDIENTES
// import React from 'react';
// import { useIngredients } from '../hooks/useIngredients';

// const Prueba = () => {
//   const { ingredients, error, loading } = useIngredients();

//   if (loading) return <p>Cargando...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       {ingredients?.map((ingredient) => (
//         <div key={ingredient.id}>
//           <h3>{ingredient.name}</h3>
//           <img src={ingredient.imageSmall} alt={ingredient.name} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Prueba;


// COMO LLAMAR LAS CATEGORIAS
// import React from 'react';
// import { useCategories } from '../hooks/useCategories'; 

// const Prueba = () => {
//   const { categories, error, loading } = useCategories();

//   if (loading) return <p>Cargando...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       {categories?.map((category) => (
//         <div key={category.id}>
//           <h3>{category.name}</h3>
//           <img src={category.image} alt={category.name} />
//           <p>{category.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Prueba;


// COMO LLAMAR LAS RECETAS POR NOMBRE
// import React, { useState } from 'react';
// import { useRecipeByName } from '../hooks/useRecipeByName'; 

// const Prueba = () => {
//   const [recipeName, setRecipeName] = useState("Arrabiata");
//   const { recipe, error, loading } = useRecipeByName(recipeName);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const name = e.target.recipeName.value;
//     setRecipeName(name);
//   };

//   if (loading) return <p>Cargando...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   if (!recipe) return <p>No se encontró ninguna receta</p>;

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <input type="text" name="recipeName" placeholder="Nombre de la receta" />
//         <button type="submit">Buscar</button>
//       </form>

//       <h2>{recipe?.name}</h2>
//       <img src={recipe?.image} alt={recipe?.name} />
//       <p><strong>Categoría:</strong> {recipe?.category}</p>
//       <p><strong>Área:</strong> {recipe?.area}</p>
//       <p><strong>Instrucciones:</strong> {recipe?.instructions}</p>
//       <p><strong>Etiquetas:</strong> {recipe?.tags.join(', ')}</p>
//       <p><strong>Video:</strong> <a href={recipe?.youtube} target="_blank" rel="noopener noreferrer">Ver en YouTube</a></p>

//       <h3>Ingredientes</h3>
//       <ul>
//         {recipe?.ingredients.map((ingredient, index) => (
//           <li key={index}>
//             {ingredient} - {recipe?.measures[index]}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Prueba;


// COMO LLAMAR LAS RECETAS POR ID
// import React from 'react';
// import { useRecipeById } from '../hooks/useRecipeById';

// const Prueba = () => {
//   const { recipe, error, loading } = useRecipeById(52818);

//   if (loading) return <p>Cargando...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   if (!recipe) return <p>No se encontró ninguna receta</p>;

//   return (
//     <div>
//       <h2>{recipe?.name}</h2>
//       <img src={recipe?.image} alt={recipe?.name} />
//       <p><strong>Categoría:</strong> {recipe?.category}</p>
//       <p><strong>Área:</strong> {recipe?.area}</p>
//       <p><strong>Instrucciones:</strong> {recipe?.instructions}</p>
//       <p><strong>Etiquetas:</strong> {recipe?.tags.join(', ')}</p>
//       <p><strong>Video:</strong> <a href={recipe?.youtube} target="_blank" rel="noopener noreferrer">Ver en YouTube</a></p>

//       <h3>Ingredientes</h3>
//       <ul>
//         {recipe?.ingredients.map((ingredient, index) => (
//           <li key={index}>
//             {ingredient} - {recipe?.measures[index]}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Prueba;


// COMO LLAMAr RECETA POR INGREDIENTE
// import React, { useState } from 'react';
// import { useRecipesByIngredient } from '../hooks/useRecipesByIngredient';

// const Prueba = () => {
//   const [ingredient, setIngredient] = useState('chicken_breast');
//   const { recipes, error, loading } = useRecipesByIngredient(ingredient);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const ingredientName = e.target.ingredient.value;
//     setIngredient(ingredientName);
//   };

//   if (loading) return <p>Cargando...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <input type="text" name="ingredient" placeholder="Nombre del ingrediente" />
//         <button type="submit">Buscar</button>
//       </form>

//       <div>
//         {recipes && recipes?.length > 0 ? (
//           recipes?.map((recipe) => (
//             <div key={recipe.id}>
//               <h3>{recipe.name}</h3>
//               <img src={recipe.image} alt={recipe.name} />
//             </div>
//           ))
//         ) : (
//           <p>No se encontraron recetas para este ingrediente</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Prueba;
