import {
  AccountBox,
  DarkMode,
  Group,
  Home,
  LightMode,
  Person,
  ReceiptLong,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Switch,
} from "@mui/material";
import React, { useState } from "react";

export const Sidebar = ({ setMode, mode, openDrawer, setOpenDrawer }) => {
  const textArr = [
    "Homepage",
    "Pages",
    "Groups",
    "MarketPlace",
    "Friends",
    "Settings",
    "Profile",
  ];
  const iconArr = [
    <Home />,
    <ReceiptLong />,
    <Group />,
    <Storefront />,
    <Person />,
    <Settings />,
    <AccountBox />,
  ];
  const [day, setDay] = useState(true);
  const handleSwitch = () => {
    setDay(!day);
    setMode(mode === "light" ? "dark" : "light");
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      {/* smaller than mid */}
      <Box>
        <SwipeableDrawer
          onClose={handleCloseDrawer}
          anchor="left"
          open={openDrawer}
        >
          <List>
            {textArr.map((text, index) => (
              <ListItem key={index}>
                <ListItemButton onClick={handleCloseDrawer}>
                  <ListItemIcon>{iconArr[index]}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  {day ? <LightMode /> : <DarkMode />}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Switch
                      onClick={handleSwitch}
                      onChange={handleCloseDrawer}
                    />
                  }
                />
              </ListItemButton>
            </ListItem>
          </List>
        </SwipeableDrawer>
      </Box>
      <Box
        flex={1.8}
        p={1}
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        {/* biger than mid */}
        <Box position="fixed">
          <List>
            {textArr.map((text, index) => (
              <ListItem key={index}>
                <ListItemButton>
                  <ListItemIcon>{iconArr[index]}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  {day ? <LightMode /> : <DarkMode />}
                </ListItemIcon>
                <ListItemText primary={<Switch onClick={handleSwitch} />} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};
