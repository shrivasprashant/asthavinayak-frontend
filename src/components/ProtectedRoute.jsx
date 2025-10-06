// components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { getUser, isAdmin } from "../utils/auth";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const user = getUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdmin()) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
