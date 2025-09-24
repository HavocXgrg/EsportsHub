import { createBrowserRouter } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Schedule from "./pages/Schedule";
import Error from "./pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <Error />, // This handles errors for the Home route and its children
  },
  {
    path: "/login",
    Component: Login,
  },
  // This is the protected route element
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/schedule",
        Component: Schedule,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />, // This is a catch-all for any undefined routes (e.g., 404 Not Found)
  },
]);
