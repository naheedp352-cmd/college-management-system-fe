import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const isAuthenticated = localStorage.getItem("user-info");

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
}
