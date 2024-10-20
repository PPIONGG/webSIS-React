import {
  Drawer,
  IconButton,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  ListItem,
  ListItemIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { navigation } from "../common/navigation";
const drawerWidth = 300;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

export default function LayoutDelivery() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const currentNavItem = navigation.find((item) =>
    location.pathname.startsWith(item.path)
  );
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Toolbar
        sx={{
          backgroundColor: "#FFB52B",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              mr: 2,
              transition: "opacity 0.3s ease, visibility 0.3s ease",
              opacity: open ? 0 : 1,
              visibility: open ? "hidden" : "visible",
            },
          ]}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          noWrap
          component="div"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box
            component="span"
            sx={[
              {
                backgroundColor: "#071CA1",
                color: "white",
                fontWeight: "bold",
                borderRadius: "4px",
                fontSize: "24px",
              },
            ]}
          >
            SIS
          </Box>
          <ChevronRightIcon />
          <Box sx={{ fontSize: "20px", fontWeight: "bold" }}>
            {currentNavItem ? currentNavItem.text : "หน้าแรก"}
          </Box>
        </Typography>
      </Toolbar>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          variant="temporary"
          anchor="left"
          onClose={handleDrawerClose}
          open={open}
        >
          <DrawerHeader>
            <Box
              sx={{
                backgroundColor: "#071CA1",
                color: "white",
                fontWeight: "bold",
                fontSize: "24px",
                padding: "2px",
                borderRadius: "4px",
              }}
            >
              SIS
            </Box>
            <Box sx={{ fontSize: "22px", fontWeight: "bold" }}>
              SIS order V1
            </Box>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon sx={{ color: "black" }} />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List sx={{ paddingLeft: "8px", paddingRight: "8px" }}>
            {navigation.map((item, index) => (
              <ListItem
                key={item.text}
                disablePadding
                sx={{
                  backgroundColor: location.pathname.startsWith(item.path)
                    ? "#FFFAE9"
                    : "transparent",
                  borderRadius: "8px",

                  "&:hover": {
                    backgroundColor: location.pathname.startsWith(item.path)
                      ? "#FFECB6"
                      : "#FFFAE9",
                  },
                }}
              >
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerClose}
                  sx={{
                    borderRadius: "8px",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: location.pathname.startsWith(item.path)
                        ? "#FFB52B"
                        : "inherit",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      color: location.pathname.startsWith(item.path)
                        ? "#FFB52B"
                        : "inherit",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
      <Outlet />
    </div>
  );
}
