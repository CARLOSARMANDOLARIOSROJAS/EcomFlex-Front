import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart";
import "./styles/index.scss";
import { ShopContextProvider } from "./context/ShopContextProvider";
import Login from "./pages/admin/Login";
import { Dashboard } from "./pages/admin/Dashboard";
import { AdminLayout } from "./layouts/AdminLayout";
import { RootLayout } from "./layouts/RootLayout";

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Rutas del administrador */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Route>
          
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}



export default App;
