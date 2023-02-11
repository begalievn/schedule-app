import { Header } from "../header";

export const Main = (props) => {
  return (
    <main>
      <Header />
      <div style={{ display: "flex" }}>
        {props.children}
      </div>
    </main>
  );
};
