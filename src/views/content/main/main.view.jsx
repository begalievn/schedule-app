import { Header } from "../header";
import {BlockContainer} from "../../components/containers/block";

// styles
import classes from './style.module.scss';

export const Main = (props) => {
  return (
    <main className={classes.main}>
      <div className={classes.header_container}>
        <Header />
      </div>
      <BlockContainer style={{ marginTop: '64px' }}>
          {props.children}
      </BlockContainer>
    </main>
  );
};
