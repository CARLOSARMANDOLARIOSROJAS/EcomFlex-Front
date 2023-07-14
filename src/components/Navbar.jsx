import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <li>
          <Link to="/" className="link">
            UStyle Shoping
          </Link>
        </li>
      </div>
      <div className="right">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkBtn">
          <i className="fa fa-bars"></i>
        </label>
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
