import { LogoElement } from "../../components/elements/logo";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Avatar,
  Tooltip,
  styled,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <StyledToolbar disableGutters>
            <LogoElement />
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton sx={{ p: 0 }}>
                  <NavLink to='/admin'>
                    <Avatar
                      alt='Admin'
                      src='/static/images/avatar/2.jpg'
                    />
                  </NavLink>
                </IconButton>
              </Tooltip>
            </Box>
          </StyledToolbar>
        </Container>
      </AppBar>
    </>
  );
};

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
