// modules
import { useRoutes } from "react-router-dom";
import { appRoutesDefinition } from "../views/routes";
// import 'antd/dist/reset.css';

export const App = () => {
  const AppRoutes = useRoutes(appRoutesDefinition);
  return AppRoutes;
};
