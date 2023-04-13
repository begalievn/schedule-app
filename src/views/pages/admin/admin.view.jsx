import { Sidebar } from "../../components/containers/sidebar/index";
import {BlockContainer} from "../../components/containers/block";
import {Container} from "@mui/material";

export const AdminPage = (props) => {
  return (
    <BlockContainer style={{ padding: '10px 0 20px 80px', background: '#F8FBFF' }}>
      <Sidebar/>
      <Container maxWidth='xl' style={{ height: '100%'}}>
        {props.children}
      </Container>
    </BlockContainer>
  );
};
