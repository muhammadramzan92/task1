import { Navigate } from "react-router-dom";

export const ProtectedLoginRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("googleUser"));

  if (user) {
    return <Navigate to="/designing" replace />;
  }

  return children;
};
