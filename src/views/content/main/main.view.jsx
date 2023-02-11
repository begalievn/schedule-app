import { Sidebar } from "../../components/containers/sidebar";
import { Header } from "../header";

export const Main = (props) => {
  return (
    <main>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        {props.children}
      </div>
    </main>
  );
};
