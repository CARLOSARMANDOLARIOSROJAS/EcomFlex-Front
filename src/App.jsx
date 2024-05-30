import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart";
import "./styles/index.scss";
import { ShopContextProvider } from "./context/ShopContextProvider";
import Login from "./pages/admin/Login";
import { Dashboard } from "./pages/admin/Dashboard";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <Routes>
            {/* Ruta para la página de login */}
            <Route path="/admin/login" element={<Login />} />
            <Route path='/admin/dashboard' element={<Dashboard/>}/>
            {/* Rutas principales con Navbar */}
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
