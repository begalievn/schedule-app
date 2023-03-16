import { Sidebar } from "../../components/containers/sidebar/index";

// styles
import {BlockContainer} from "../../components/containers/block";
import {Container} from "@mui/material";

export const AdminPage = (props) => {
  return (
    <BlockContainer style={{ paddingLeft: '80px', paddingRight: '10px', background: '#F8FBFF' }}>
      <Sidebar/>
      <Container maxWidth='xl'>
        {props.children}
      </Container>
    </BlockContainer>
  );
};
