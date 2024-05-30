import { PRODUCTS } from "../../products"
import { ShopContext } from "../../context/ShopContextProvider";
import { useContext } from "react";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const {cartItems, getSubtotal} = useContext(ShopContext);
  const totalAmount = getSubtotal();
  const navigate = useNavigate(); 

  return (
    <div className="cart">
        <div className="cart-title mt-4">
          <h1 style={{ fontWeight: 'bolder'}}>Este es tu carrito!</h1>
        </div>
        <div className="cart-items">
          {
            PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem key={product.id} data = {product} />
              }
          })}
        </div>

        <div className="checkout">
          <p>Subtotal: <strong>${totalAmount}</strong></p>
          <button onClick={() => navigate("/")}>Seguir comprando</button>
          <button>Ir a pagar</button>
        </div>
    </div>
  )
}
