import { Navigate } from "react-router-dom";



export const ProtectedRoute = ({ children }) => {

  const user = JSON.parse(localStorage.getItem("googleUser"))

  if (!user) {
    return <Navigate to="/" replace />
  }


  return children;
}