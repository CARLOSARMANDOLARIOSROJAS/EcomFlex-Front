import { PRODUCTS } from "../../products"
import { ShopContext } from "../../context/ShopContextProvider";
import { useContext } from "react";
import { CartItem } from "./CartItem";
import { Navigate, useNavigate } from "react-router-dom";

export const Cart = () => {
  const {cartItems, getSubtotal} = useContext(ShopContext);
  const totalAmount = getSubtotal();
  const navigate = useNavigate(); 

  return (
    <div className="cart">
        <div className="cart-title">
          <h1>Your Cart Items!</h1>
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
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
    </div>
  )
}
