import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login.jsx/Login";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Products from "./pages/Products/Products";
import { ProductProvider } from "./context/ProductContext";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Registration />} />
          <Route path="ToDo" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route
            path="Products"
            element={
              <ProductProvider>
                <Products />
              </ProductProvider>
            }
          >
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
