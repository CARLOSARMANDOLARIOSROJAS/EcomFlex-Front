import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Cart = () => {
  const { cartItems, getSubtotal } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const totalAmount = getSubtotal();
  const navigate = useNavigate();

  const URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(`${URL}/api/products`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="cart">
      <div className="cart-title mt-4">
        <h1 style={{ fontWeight: "bolder" }}>Este es tu carrito!</h1>
      </div>
      <div className="cart-items">
        {loading ? (
          <h1>Cargando...</h1>
        ) : (
          products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product} />;
            }
            return null;
          })
        )}
      </div>
      <div className="checkout">
        <p>
          Subtotal: <strong>${totalAmount}</strong>
        </p>
        <button onClick={() => navigate("/")}>Seguir comprando</button>
        <button>Ir a pagar</button>
      </div>
    </div>
  );
};
