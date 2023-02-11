import { Sidebar } from "../../components/containers/sidebar/index";

// styles
import classes from "./style.module.scss";

export const AdminPage = (props) => {
  return (
    <div className={classes.container}>
      <Sidebar />
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
