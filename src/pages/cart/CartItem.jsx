import { ShopContext } from "../../context/ShopContextProvider";
import { useContext } from "react";

export const CartItem = (props) => {
  const { id, name, price, image_url } = props.data;
  const { cartItems, addToCart, removeFromCart, newAmount } = useContext(ShopContext);
  const URL = import.meta.env.VITE_BACKEND_URL;
  return (
    <div className="cartItem">
      <div className="cartItem-image">
        <img src={`${URL}${image_url}`} alt={name} />
      </div>
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input 
            type="number" 
            value={cartItems[id]} 
            onChange={(e) => newAmount(Number(e.target.value), id) } 
            min="1" 
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
