import { useEffect, useState } from "react";
import { Product } from "./Product"; // Asegúrate de que la ruta es correcta

const URL = import.meta.env.VITE_BACKEND_URL;

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getProducts = async () => {
      try {
        const response = await fetch(`${URL}/api/products`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  console.log(products);
  
  return (
    <div className="shop">
      <div className="title">
        <h1>Nuestros Productos</h1>
      </div>
      <div className="products">
        {loading ? (
          <h1>Cargando...</h1>
        ) : (
          products.map((item) => (
            <Product key={item.id} data={item} />
          ))
        )}
      </div>
    </div>
  );
};
