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
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { NavLink } from "react-router-dom";

import classes from './style.module.scss';

export const Header = () => {
  return (
    <>
      <StyledAppBar position='static'>
        <Container maxWidth='xl'>
          <StyledToolbar disableGutters>
            <LogoElement />
            <div className={classes.admin_logo}>
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
            </div>
          </StyledToolbar>
        </Container>
      </StyledAppBar>
    </>
  );
};

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const StyledAppBar = styled(AppBar)(() => ({
  background: "#557CDE",
  boxShadow: "none",
}));
