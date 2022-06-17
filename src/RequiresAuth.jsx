import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiresAuth = ({ children }) => {
  const authState = useSelector((state) => state.auth);
  const token = authState.token || localStorage.getItem("token");
  const location = useLocation();
  const isLoggedIn = authState.user && token;

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { RequiresAuth };
