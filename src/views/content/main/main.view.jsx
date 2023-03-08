import { Header } from "../header";
import {BlockContainer} from "../../components/containers/block";

export const Main = (props) => {
  return (
    <main>
      <Header />
      <BlockContainer>
          {props.children}
      </BlockContainer>
    </main>
  );
};
