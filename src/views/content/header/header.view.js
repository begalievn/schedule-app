// import classes from './style.module.scss';
import { LogoElement } from "../../components/elements/logo";
import { NavigationHeader } from "../../components/elements/navigation-header";
// import {MakeAuth} from "../../components/elements/make-auth";
// import {BlockContainer} from "../../components/containers/block";
// import {ContentContainer} from "../../components/containers/content";
// import {BurgerMenu} from "../../components/elements/burger-menu";
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
            <Box>
              <NavigationHeader />
            </Box>
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
