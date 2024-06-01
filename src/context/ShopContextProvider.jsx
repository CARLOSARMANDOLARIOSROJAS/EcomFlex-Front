import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
  let cart = {};
  for (let product of products) { 
    cart[product.id] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
        setCartItems(getDefaultCart(response.data)); // Initialize cartItems after products are fetched
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const getSubtotal = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = products.find((product) => product.id === Number(itemId));
        if (itemInfo) {
          totalAmount += cartItems[itemId] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0) }));
  };

  const newAmount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    newAmount,
    getSubtotal,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};