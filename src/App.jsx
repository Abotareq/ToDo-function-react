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
import Movies from "./pages/Movies/Movies";
import { MovieProvider } from "./context/MovieContext";
import MovieDetalis from "./pages/MovieDetails/MovieDetalis";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import FavMovies from "./pages/FavMovies/FavMovies";
import { QueryClientProviderComponent } from "./Client/queryClientProivder.jsx";
import TV from "./pages/Tv/TV.jsx";
import TVdetalis from "./pages/TVdetails/TVdetalis.jsx";
function App() {
  return (
    <QueryClientProviderComponent>
      <Provider store={store}>
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
              <Route
                path="Movies"
                element={
                  <MovieProvider>
                    <Movies />
                  </MovieProvider>
                }
              >
                <Route path=":id" element={<MovieDetalis />} />
              </Route>
              <Route
                path="favMovies"
                element={
                  <MovieProvider>
                    <FavMovies />
                  </MovieProvider>
                }
              >
                <Route path=":id" element={<MovieDetalis />} />
              </Route>
              <Route path="tv" element={<TV />}>
                <Route path=":id" element={<TVdetalis />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProviderComponent>
  );
}

export default App;
