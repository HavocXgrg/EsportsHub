import * as React from "react";
import { useLocation, Navigate, Outlet } from "react-router";

interface IProtectedRoutesProps {}

const ProtectedRoutes: React.FunctionComponent<IProtectedRoutesProps> = () => {
  const isAuth: boolean = false;
  const location = useLocation();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} /> //location is used so user can navigate back to the page they want after loggedin directly without going to home or else
  );
};

export default ProtectedRoutes;
