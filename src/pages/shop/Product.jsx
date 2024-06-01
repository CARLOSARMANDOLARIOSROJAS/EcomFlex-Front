import { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

export const Product = ({ data }) => {
  const { id, name, price, image_url } = data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id] || 0;

  // Verifica que la ruta de la imagen esté bien formada
  const imageUrl = image_url.startsWith('/') ? `http://localhost:3000${image_url}` : image_url;

  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <div className="description">
        <p className="productTitle">
          <b>{name}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Agregar al Carrito {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};
