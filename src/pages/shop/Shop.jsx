import { PRODUCTS } from "../../products"
import { Product } from "./Product"

export const Shop = () => {
  return (
    <div className="shop">
        <div className="title">
            <h1>AstraTech Shop</h1>
        </div>
        <div className="products">
            {
              PRODUCTS.map((item) => (
                <div key={item.id}>
                  <Product data= {item}/>
                </div>
                ))}
        </div>
    </div>
  )
}
