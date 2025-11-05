import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home/Home";

// AuthRoutes handles authentication-related routes
const AuthRoutes = () => {
  return (
    <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />

    </Routes>
  );
};

export default AuthRoutes;