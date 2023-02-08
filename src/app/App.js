// modules
import { useRoutes } from "react-router-dom";
import { AppRoutesDefinition } from "../views/routes";
// import 'antd/dist/reset.css';

export const App = () => {
  const AppRoutes = useRoutes(AppRoutesDefinition());
  return AppRoutes;
};
