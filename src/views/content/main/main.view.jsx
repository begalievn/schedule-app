import { Header } from "../header";

export const Main = (props) => {
  return (
    <main>
      <Header />
      {props.children}
    </main>
  );
};
