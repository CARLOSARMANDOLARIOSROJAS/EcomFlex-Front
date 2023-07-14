import { ShopContext } from "../../context/ShopContextProvider";
import { useContext } from "react";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, newAmount } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <div className="">
        <img src={productImage} alt="" />
      </div>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input value={cartItems[id]} onChange={(e) => newAmount(Number(e.target.value), id) } />
          <button onClick={() => addToCart(id)} >+</button>
        </div>
      </div>
    </div>
  );
};
