import React, { useState } from "react";

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

import {
  ChevronLeft,
  ChevronRight,
  FileCopyOutlined,
  PieChartOutlined,
  DesktopMacOutlined,
  VerifiedUserOutlined,
  TheaterComedyOutlined,
} from "@mui/icons-material";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    label,
    children,
  };
}

const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopMacOutlined />),
  getItem("User", "sub1", <VerifiedUserOutlined />),
  getItem("Team", "sub2", <TheaterComedyOutlined />),
  getItem("Files", "9", <FileCopyOutlined />),
];

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      variant='permanent'
      open={open}
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
            <StyledListButton>
              <StyledListIcon>{item.icon}</StyledListIcon>
              <ListItemText
                primary={item.label}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </StyledListButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

const drawerWidth = 220;

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

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  backgroundColor: "green",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  "& .MuiPaper-root": {
    // backgroundColor: "green",
    height: "90vh",
    position: "static",
  },
}));

const StyledListButton = styled(ListItemButton)(() => ({
  display: "flex",
  justifyContent: "initial",
  marginLeft: "5px",
}));

const StyledListIcon = styled(ListItemIcon)(() => ({
  minWidth: "40px",
}));
