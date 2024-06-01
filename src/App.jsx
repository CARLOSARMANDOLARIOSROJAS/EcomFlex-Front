import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./pages/cart/Cart";
import "./styles/index.scss";
import { ShopContextProvider } from "./context/ShopContextProvider";
import Login from "./pages/admin/Login";
import { AdminLayout } from "./layouts/AdminLayout";
import { RootLayout } from "./layouts/RootLayout";
import { Products } from "./pages/shop/Products";
import { Data } from "./pages/admin/Data";
import { Dashboard } from "./pages/admin/Dashboard";

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Products/>} />
          <Route path="/cart" element={<Cart />} />
          
        </Route>

        {/* Rutas del administrador */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Data />} />
          <Route path="/admin/registro" element={<Dashboard/>}/>
        </Route>
          
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}



export default App;
