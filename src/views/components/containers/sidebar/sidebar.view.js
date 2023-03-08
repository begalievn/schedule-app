import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";

import {
  List,
  Divider,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Drawer as MuiDrawer,
} from "@mui/material";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import {
  ClassRoomIcon,
  GroupIcon,
  ScheduleIcon,
  SubjectIcon,
  TeacherIcon,
} from "../../../../assets/icons/index";

import { NavLink } from "react-router-dom";

import { BrowserRoute } from "../../../routes/browser.routes";

function getItem(label, key, icon, path, children) {
  return {
    key,
    icon,
    label,
    path,
    children,
  };
}

const items = [
  getItem("Schedulle", "1", <ScheduleIcon />, BrowserRoute.ADMIN_SCHEDULE),
  getItem("Teacher", "2", <TeacherIcon />, BrowserRoute.ADMIN_TEACHER),
  getItem("Subject", "sub1", <SubjectIcon />, BrowserRoute.ADMIN_SUBJECT),
  getItem("Classroom", "sub2", <ClassRoomIcon />, BrowserRoute.ADMIN_CLASSROOM),
  getItem("Group", "9", <GroupIcon />, BrowserRoute.ADMIN_GROUP),
];

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [positionFixed, setPositionFixed] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const positionChange = () => setPositionFixed(window.scrollY >= 66);
    window.addEventListener("scroll", positionChange);
    return () => window.removeEventListener("scroll", positionChange);
  }, []);
  return (
    <Drawer
      variant='permanent'
      open={open}
      positionFixed={positionFixed}
    >
      <DrawerHeader>
        {open ? (
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        ) : (
          <IconButton onClick={handleDrawerOpen}>
            <ChevronRight />
          </IconButton>
        )}
      </DrawerHeader>
      <Divider variant='middle' />
      <List>
        {items.map((item) => (
          <ListItem
            key={item.key}
            disablePadding
          >
            <NavLink to={item.path}>
              <StyledListButton>
                <StyledListIcon>{item.icon}</StyledListIcon>

                <ListItemText
                  primary={item.label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </StyledListButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer)(({ theme, open, positionFixed }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  color: "rgba(65, 90, 128, 1)",
  height: "auto",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  "& .MuiPaper-root": {
    backgroundColor: "#9FB8F9",
    color: "rgba(65, 90, 128, 1)",
    position: positionFixed ? "fixed" : "absolute",
    top: positionFixed ? "0px" : "64px",
    height: "100vh",
  },
}));

const StyledListButton = styled(ListItemButton)(() => ({
  display: "flex",
  justifyContent: "initial",
  marginLeft: "5px",
}));

const StyledListIcon = styled(ListItemIcon)(() => ({
  color: "rgba(140, 131, 131, 1)",
  "& svg": {
    maxWidht: "15px",
    maxHeight: "18px",
  },
}));
