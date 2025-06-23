import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./assets/pages/Home/Home";
import Registration from "./assets/pages/Registration/Registration";
import Login from "./assets/pages/Login.jsx/Login";
import NotFound from "./assets/components/NotFound";
import Layout from "./assets/components/Layout";

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Registration />} />
          <Route path="ToDo" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
