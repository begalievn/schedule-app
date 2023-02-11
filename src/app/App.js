// modules
import { useRoutes } from "react-router-dom";

// components
import { AppRoutesDefinition } from "../views/routes";

export const App = () => {
  const AppRoutes = useRoutes(AppRoutesDefinition());
  return AppRoutes;
};
