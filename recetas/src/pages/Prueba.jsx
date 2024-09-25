
import React from 'react';
import { useCategories } from '../hooks/useCategories'; 

const Prueba = () => {
const { categories, error, loading } = useCategories();

if (loading) return <p>Cargando...</p>;
if (error) return <p>Error: {error.message}</p>;

return (
    <div>
        {categories?.map((category) => (
        <div key={category.id}>
            <h3>{category.name}</h3>
            <img src={category.image} alt={category.name} />
            <p>{category.description}</p>
        </div>
        ))}
    </div>
    );
};

export default Prueba;




