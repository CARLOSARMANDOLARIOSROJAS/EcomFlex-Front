import React from "react";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p className="productTitle">
            <b>{productName}</b>
        </p>
        <p>{price}</p>
      </div>
      <button className="addToCartBtn">Add To Cart</button>
    </div>
  );
};
