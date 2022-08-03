import { Navigate } from "react-router-dom";
import { useAuth } from "../../common/hooks";

export const ProtectedRoute = ({ children }) => {
  const { isLoggin } = useAuth();
  if (!isLoggin) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};