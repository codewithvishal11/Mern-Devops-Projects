import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  // If user is not logged in → redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Else render protected component
  return children;
};

export default ProtectedRoutes;
