import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ element }) => {
  // Implement your authentication logic here
  // For example, you can check if the user is authenticated from your authentication state
  const isAuthenticated = localStorage.getItem("userprofiledata");
  console.log(isAuthenticated);
  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute